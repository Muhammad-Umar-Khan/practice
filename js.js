// let names = ["Umar", "Khan", "Mardan"];
// for (let name of names) {
//   console.log("Current item", name);
// }

// console.log(names.forEach((name) => name.includes("a")));
// let info = names.filter((name) => name.includes("a"));
// console.log(info);
function containsDuplicates(arr) {
  // Using Set to check for uniqueness
  const uniqueSet = new Set(arr);
  
  // If the size of the Set is equal to the length of the array, there are no duplicates
  // Otherwise, there are duplicates
  return uniqueSet.size !== arr.length;
}

const numbersWithDuplicates = [1, 2, 3, 4, 5, 2];
const uniqueNumbers = [1, 2, 3, 4, 5];

console.log(containsDuplicates(numbersWithDuplicates));  // Output: true
console.log(containsDuplicates(uniqueNumbers)); 