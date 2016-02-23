require 'json'

file = File.open("538_data.json")
data = JSON.parse(file.read)

sanders_total = 0
clinton_total = 0

print "var delegateDeltaData = [\n\t['Date', 'Delegate Difference'],\n"

data.each_with_index do |date, index|
  date["states"].each do |state|
    sanders_total += state["delegates"] * state["sanders"]
    clinton_total += state["delegates"] * state["clinton"]
  end

  if index != data.length - 1
    print "\t[new Date('#{date["date"]}'), #{sanders_total.floor - clinton_total.floor}],\n"
  else
    print "\t[new Date('#{date["date"]}'), #{sanders_total.floor - clinton_total.floor}]\n"
  end
end

print "]"
