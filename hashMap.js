let myMap = {};

// Add key value pair
myMap["key1"] = "value1";
myMap["key2"] = "value2";
myMap["key3"] = "value3";

console.log(myMap["key1"]); // Output: value1
console.log(myMap["key2"]); // Output: value2

// Check for key exists
console.log("key3" in myMap); // Output: true
console.log("key4" in myMap); // Output: false

// Remove a key-value pair
delete myMap["key2"];

// Iterate over keys
for (let key in myMap) {
  console.log(key, myMap[key]);
}
