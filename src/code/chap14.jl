struct DBM
  filename :: String
  handle :: Ptr{Cvoid}
  DBM(filename::String, flag::String="c") = new(filename, gdbm_open(filename, flag))
end

Base.close(dbm::DBM) = gdbm_close(dbm.handle)

Base.show(io::IO, dbm::DBM) = print(io, "DBM(<$(dbm.filename)>)")

struct Datum
  dptr :: Ptr{UInt8}
  dsize :: Int32
  Datum(str::String) = new(Base.unsafe_convert(Ptr{UInt8}, str), length(str))
  Datum(bytes::Array{UInt8,1}) = new(Base.unsafe_convert(Ptr{UInt8}, bytes), length(bytes))
end

const OPENFLAGS = Dict("r"=>0, "w"=>1, "c"=>2, "n"=>3)

const STOREFLAGS = Dict("r"=>1, "i"=>0)

function gdbm_open(name::String, flag::String="r")
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_open = Libdl.dlsym_e(GDBM, :gdbm_open)
  handle = ccall(gdbm_open, Ptr{Cvoid}, (Cstring, Int32, Int32, Int32, Ptr{Cvoid}), name, 0, OPENFLAGS[flag], 420, C_NULL)
  handle == C_NULL && error("File could not be opened!")
  handle
end

function gdbm_close(handle::Ptr{Cvoid})
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_close = Libdl.dlsym_e(GDBM, :gdbm_close)
  ccall(gdbm_close, Cvoid, (Ptr{Cvoid},), handle)
end

function gdbm_store(handle::Ptr{Cvoid}, key::Datum, value::Datum, flag::String="r")
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_store = Libdl.dlsym_e(GDBM, :gdbm_store)
  ret = ccall(gdbm_store, Int32, (Ptr{Cvoid}, Datum, Datum, Int32), handle, key, value, STOREFLAGS[flag])
  ret == -1 && error("Database is not writable or key/value is not a valid string.")
  ret == 1 && error("Key is already in database.")
  nothing
end

function gdbm_fetch(handle::Ptr{Cvoid}, key::Datum)
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_fetch = Libdl.dlsym_e(GDBM, :gdbm_fetch)
  datum = ccall(gdbm_fetch, Datum, (Ptr{Cvoid}, Datum), handle, key)
  datum.dptr == C_NULL && throw(KeyError(key))
  datum
end

function gdbm_exists(handle::Ptr{Cvoid}, key::Datum)
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_exists = Libdl.dlsym_e(GDBM, :gdbm_exists)
  ret = ccall(gdbm_exists, Int32, (Ptr{Cvoid}, Datum), handle, key)
  ret == 0 && return false
  true
end

function gdbm_count(handle::Ptr{Cvoid})
  count = Ref(UInt(0))
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_count = Libdl.dlsym_e(GDBM, :gdbm_count)
  ret = ccall(gdbm_count, Int32, (Ptr{Cvoid}, Ref{UInt}), handle, count)
  ret == -1 && error("Error reading database.")
  Int(count[])
end

function gdbm_delete(handle::Ptr{Cvoid}, key::Datum)
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_delete = Libdl.dlsym_e(GDBM, :gdbm_delete)
  ret = ccall(gdbm_delete, Int32, (Ptr{Cvoid}, Datum), handle, key)
  ret ≠ 0 && error("Database is not writable or key not found.")
  nothing
end

function gdbm_firstkey(handle::Ptr{Cvoid})
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_firstkey = Libdl.dlsym_e(GDBM, :gdbm_firstkey)
  ccall(gdbm_firstkey, Datum, (Ptr{Cvoid}, ), handle)
end

function gdbm_nextkey(handle::Ptr{Cvoid}, prev::Datum)
  GDBM = Libdl.dlopen_e(libgdbm)
  gdbm_nextkey = Libdl.dlsym_e(GDBM, :gdbm_nextkey)
  ccall(gdbm_nextkey, Datum, (Ptr{Cvoid}, Datum), handle, prev)
end

function Base.getindex(dbm::DBM, key::Union{String,Array{UInt8,1}})
  datum = gdbm_fetch(dbm.handle, Datum(key))
  value = unsafe_string(datum.dptr, datum.dsize)
  Libc.free(datum.dptr)
  value
end
  
function Base.setindex!(dbm::DBM, value::Union{String,Array{UInt8,1}}, key::Union{String,Array{UInt8,1}})
  gdbm_store(dbm.handle, Datum(key), Datum(value))
  key
end

function Base.iterate(dbm::DBM)
  first = gdbm_firstkey(dbm.handle)
  first.dptr == C_NULL && return nothing
  key = unsafe_string(first.dptr, first.dsize)
  datum = gdbm_fetch(dbm.handle, first)
  value = unsafe_string(datum.dptr, datum.dsize)
  Libc.free(datum.dptr)
  ((key, value), first)
end

function Base.iterate(dbm::DBM, prev::Datum)
  next = gdbm_nextkey(dbm.handle, prev)
  Libc.free(prev.dptr)
  next.dptr == C_NULL && return nothing
  key = unsafe_string(next.dptr, next.dsize)
  datum = gdbm_fetch(dbm.handle, next)
  value = unsafe_string(datum.dptr, datum.dsize)
  Libc.free(datum.dptr)
  ((key, value), next)
end

Base.length(dbm::DBM) = gdbm_count(dbm.handle)

Base.eltype(::Type{DBM}) = Union{Pair{String,String},Pair{String,Array{UInt8,1}},Pair{Array{UInt8,1},String},Pair{Array{UInt8,1},Array{UInt8,1}}}

Base.keytype(::Type{DBM}) = String

Base.valtype(::Type{DBM}) = String

Base.haskey(dbm::DBM, key::Union{String,Array{UInt8,1}}) = gdbm_exists(dbm.handle, Datum(key))

function Base.delete!(dbm::DBM, key::String)
  gdbm_delete(dbm.handle, Datum(key))
  dbm
end

function Base.pop!(dbm::DBM, key::Union{String,Array{UInt8,1}}, default = nothing)
  datum = Datum(key)
  if gdbm_exists(dbm.handle, datum)
    vdatum = gdbm_fetch(dbm.handle, datum)
    value = unsafe_string(vdatum.dptr, vdatum.dsize)
    Libc.free(vdatum.dptr)
    gdbm_delete(dbm.handle, datum)
    return value
  end
  default isa String && return default
  throw(KeyError(key))
end

function Base.getkey(dbm::DBM, key::Union{String,Array{UInt8,1}}, default::String)
  gdbm_exists(dbm.handle, Datum(key)) && return key
  default
end

function Base.get(dbm::DBM, key::Union{String,Array{UInt8,1}}, default::String)
  value = default
  datum = Datum(key)
  if gdbm_exists(dbm.handle, datum)
    datum = gdbm_fetch(dbm.handle, datum)
    value = unsafe_string(datum.dptr, datum.dsize)
    Libc.free(datum.dptr)
  end
  value
end

function Base.get!(dbm::DBM, key::Union{String,Array{UInt8,1}}, default::String)
  value = default
  datum = Datum(key)
  if gdbm_exists(dbm.handle, datum)
    vdatum = gdbm_fetch(dbm.handle, datum)
    value = unsafe_string(vdatum.dptr, vdatum.dsize)
    Libc.free(vdatum.dptr)
  else
    gdbm_store(dbm.handle, datum, Datum(default))
  end
  value
end

function Base.isempty(dbm::DBM)
  gdbm_count(dbm.handle) == 0 && return true
  false
end

function Base.empty!(dbm::DBM)
  prev = gdbm_firstkey(dbm.handle)
  while prev.dptr ≠ C_NULL
    key = unsafe_string(prev.dptr, prev.dsize)
    next = gdbm_nextkey(dbm.handle, prev)
    gdbm_delete(dbm.handle, prev)
    Libc.free(prev.dptr)
    prev = next
  end
end

function Base.in(pair::Union{Pair{String,String},Pair{String,Array{UInt8,1}},Pair{Array{UInt8,1},String},Pair{Array{UInt8,1},Array{UInt8,1}}}, dbm::DBM)
  datum = Datum(pair.first)
  !gdbm_exists(dbm.handle, datum) && return false
  vdatum = gdbm_fetch(dbm.handle, datum)
  value = unsafe_string(vdatum.dptr, vdatum.dsize)
  Libc.free(vdatum.dptr)
  value == pair.second
end