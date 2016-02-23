diff = ARGV[0].to_f

def percent_diff(diff)
  first = (1 + (diff / 100)) / 2
  second = 1 - first

  return [first, second]
end

p percent_diff(diff)