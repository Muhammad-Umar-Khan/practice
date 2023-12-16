let myMap = {};

// Add key value pair
myMap["key1"] = "value1";
myMap["key2"] = "value2";
myMap["key3"] = "value3";

console.log(myMap["key1"]);
console.log(myMap["key2"]);

console.log("key3" in myMap);
console.log("key4" in myMap);

// Remove a key-value pair
delete myMap["key2"];

// Iterate over keys
for (let key in myMap) {
  console.log(key, myMap[key]);
}
