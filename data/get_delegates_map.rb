require 'json'

file = File.open("538_data.json")
data = JSON.parse(file.read)

print "var delegateMapData = [\n\t['State', 'Difference'],\n"

data.each_with_index do |date, index|
  date["states"].each do |state|
    if index != data.length - 1
      print "\t['#{state["state"]}', #{state["difference"]}],\n"
    else
      print "\t['#{state["state"]}', #{state["difference"]}]\n"
    end
  end
end

print "]"
