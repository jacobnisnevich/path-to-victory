require 'json'

file = File.open("538_data.json")
data = JSON.parse(file.read)

print "var delegateClintonLeadMapData = [\n\t['State', 'Difference'],\n"

data.each_with_index do |date, index|
  date["states"].each do |state|
    if index != data.length - 1
      print "\t['#{state["state"]}', #{(state["difference"] - 0.05).round(2)}],\n"
    else
      print "\t['#{state["state"]}', #{(state["difference"] - 0.05).round(2)}]\n"
    end
  end
end

print "]"
