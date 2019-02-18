function deploybook(;
  root = error("no 'root' keyword provided."),
  target = "site",
  dirname = "",

  repo   = error("no 'repo' keyword provided."),
  branch = "gh-pages",
  latest = "master",

  osname = "linux",
  julia::Union{AbstractString,Nothing} = nothing
)
  # deprecation of julia defaulting to "nightly"
  if julia === nothing
    Base.depwarn("""
        `julia` keyword to `Documenter.deploydocs()` not specified.
        In the future `julia` will be a required keyword argument
        instead of defaulting to `"nightly"`.
        """, :deploydocs)
    julia = "nightly"
  end

  # Get environment variables.
  documenter_key      = get(ENV, "DOCUMENTER_KEY",       "")
  travis_branch       = get(ENV, "TRAVIS_BRANCH",        "")
  travis_pull_request = get(ENV, "TRAVIS_PULL_REQUEST",  "")
  travis_repo_slug    = get(ENV, "TRAVIS_REPO_SLUG",     "")
  travis_tag          = get(ENV, "TRAVIS_TAG",           "")
  travis_osname       = get(ENV, "TRAVIS_OS_NAME",       "")
  travis_julia        = get(ENV, "TRAVIS_JULIA_VERSION", "")

  # Other variables.
  sha = cd(root) do
    # We'll make sure we run the git commands in the source directory (root), in case
    # the working directory has been changed (e.g. if the makedocs' build argument is
    # outside root).
    try
        readchomp(`git rev-parse --short HEAD`)
    catch
        # git rev-parse will throw an error and return code 128 if it is not being
        # run in a git repository, which will make run/readchomp throw an exception.
        # We'll assume that if readchomp fails it is due to this and set the sha
        # variable accordingly.
        "(not-git-repo)"
    end
  end

  # Sanity checks
  if !isempty(travis_repo_slug) && !occursin(travis_repo_slug, repo)
    @warn("repo $repo does not match $travis_repo_slug")
  end

  # When should a deploy be attempted?
  should_deploy =
    travis_pull_request == "false"   &&
    travis_osname == osname &&
    travis_julia  == julia  &&
    (
        travis_branch == latest ||
        travis_tag    != ""
    )

  should_deploy = true

  # check that the tag is valid
  if should_deploy && !isempty(travis_tag) && !occursin(Base.VERSION_REGEX, travis_tag)
    @warn("tag `$(travis_tag)` is not a valid VersionNumber")
    should_deploy = false
  end

  # check DOCUMENTER_KEY only if the branch, Julia version etc. check out
  if should_deploy && isempty(documenter_key)
    @warn("""
          DOCUMENTER_KEY environment variable missing, unable to deploy.
          Note that in Documenter v0.9.0 old deprecated authentication methods were removed.
          DOCUMENTER_KEY is now the only option. See the documentation for more information.""")
    should_deploy = false
  end

  if should_deploy
    cd(root) do
        println("setting up target directory.")
        isdir(target) || mkpath(target)
        println("pushing new documentation to remote: $repo:$branch.")
        mktempdir() do temp
            git_push(
                root, temp, repo;
                branch=branch, dirname=dirname, target=target,
                tag=travis_tag, key=documenter_key, sha=sha
            )
        end
    end
  else
    println("skipping docs deployment.")
  end
end

function git_push(
  root, temp, repo;
  branch="gh-pages", dirname="", target="site", tag="", key="", sha=""
)
  dirname = isempty(dirname) ? temp : joinpath(temp, dirname)
  isdir(dirname) || mkpath(dirname)
  # Versioned docs directories.
  latest_dir = joinpath(dirname, "latest")
  stable_dir = joinpath(dirname, "stable")
  tagged_dir = joinpath(dirname, tag)

  keyfile = abspath(joinpath(root, ".documenter"))
  target_dir = abspath(target)

  # The upstream URL to which we push new content and the ssh decryption commands.
  upstream = "git@$(replace(repo, "github.com/" => "github.com:"))"

  write(keyfile, String(base64decode(key)))
  chmod(keyfile, 0o600)

  try
    # Use a custom SSH config file to avoid overwriting the default user config.
    withfile(joinpath(homedir(), ".ssh", "config"),
        """
        Host github.com
            StrictHostKeyChecking no
            HostName github.com
            IdentityFile $keyfile
        """
    ) do
        cd(temp) do
            # Setup git.
            run(`git init`)
            run(`git config user.name "autodocs"`)
            run(`git config user.email "autodocs"`)

            # Fetch from remote and checkout the branch.
            run(`git remote add upstream $upstream`)
            run(`git fetch upstream`)

            try
                run(`git checkout -b $branch upstream/$branch`)
            catch e
                println("Checking out $branch failed with error: $e")
                println("Creating a new local $branch branch.")
                run(`git checkout --orphan $branch`)
                run(`git commit --allow-empty -m "Initial empty commit for docs"`)
            end

            # Copy docs to `latest`, or `stable`, `<release>`, and `<version>` directories.
            if isempty(tag)
                gitrm_copy(target_dir, latest_dir)
                generate_siteinfo_file(latest_dir, "latest")
            else
                @assert occursin(Base.VERSION_REGEX, tag) # checked in deploydocs
                version = VersionNumber(tag)
                # only push to stable if this is the latest stable release
                versions = filter!(x -> occursin(Base.VERSION_REGEX, x), readdir(dirname))
                maxver = mapreduce(x -> VersionNumber(x), max, v"0.0.0", versions)
                if version >= maxver && version.prerelease == () # don't deploy to stable for prereleases
                    gitrm_copy(target_dir, stable_dir)
                    generate_siteinfo_file(stable_dir, "stable")
                end
                gitrm_copy(target_dir, tagged_dir)
                generate_siteinfo_file(tagged_dir, tag)
                # Build a `release-*.*` folder as well
                release = "release-$(version.major).$(version.minor)"
                gitrm_copy(target_dir, joinpath(dirname, release))
                Writers.HTMLWriter.generate_siteinfo_file(joinpath(dirname, release), release)
            end

            # Create the versions.js file containing a list of all docs
            # versions. This must always happen after the folder copying.
            generate_version_file(dirname)

            # Add, commit, and push the docs to the remote.
            run(`git add -A .`)
            if !success(`git diff --cached --exit-code`)
                run(`git commit -m "build based on $sha"`)
                run(`git push -q upstream HEAD:$branch`)
            else
                println("New docs identical to the old -- not committing nor pushing.")
            end
        end
    end
  finally
    # Remove the unencrypted private key.
    isfile(keyfile) && rm(keyfile)
  end
end

function gitrm_copy(src, dst)
  # --ignore-unmatch so that we wouldn't get errors if dst does not exist
  run(`git rm -rf --ignore-unmatch $(dst)`)
  cp(src, dst; force=true)
end

function withfile(func, file::AbstractString, contents::AbstractString)
  hasfile = isfile(file)
  original = hasfile ? read(file, String) : ""
  open(file, "w") do stream
    print(stream, contents)
    flush(stream) # Make sure file is written before continuing.
  end
  try
    func()
  finally
    if hasfile
        open(file, "w") do stream
            print(stream, original)
        end
    else
        rm(file)
    end
  end
end

function getenv(regex::Regex)
  for (key, value) in ENV
    occursin(regex, key) && return value
  end
  error("could not find key/iv pair.")
end

function generate_siteinfo_file(dir::AbstractString, version::AbstractString)
  open(joinpath(dir, "siteinfo.js"), "w") do buf
      println(buf, "var DOCUMENTER_CURRENT_VERSION = \"$(version)\";")
  end
end

function generate_version_file(dir::AbstractString)
  named_folders = []
  release_folders = []
  tag_folders = []
  for each in readdir(dir)
      each in ("stable", "latest")         ? push!(named_folders,   each) :
      occursin(r"release\-\d+\.\d+", each) ? push!(release_folders, each) :
      occursin(Base.VERSION_REGEX, each)   ? push!(tag_folders,     each) : nothing
  end
  # put stable before latest
  sort!(named_folders, rev = true)
  # sort tags by version number
  sort!(tag_folders, lt = (x, y) -> VersionNumber(x) < VersionNumber(y), rev = true)
  # sort release- folders by version number
  vnum(x) = VersionNumber(match(r"release\-(\d+\.\d+)", x)[1])
  sort!(release_folders, lt = (x, y) -> vnum(x) < vnum(y), rev = true)
  open(joinpath(dir, "versions.js"), "w") do buf
      println(buf, "var DOC_VERSIONS = [")
      for group in (named_folders, release_folders, tag_folders)
          for folder in group
              println(buf, "  \"", folder, "\",")
          end
      end
      println(buf, "];")
  end
end