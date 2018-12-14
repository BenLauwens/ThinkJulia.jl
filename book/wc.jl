function linecount(filename)
    count = 0
    for line in eachline(filename)
        count += 1
    end
    count
end

print(linecount("wc.jl"))