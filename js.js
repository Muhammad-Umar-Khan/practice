// let names = ["Umar", "Khan", "Mardan"];
// for (let name of names) {
//   console.log("Current item", name);
// }

// console.log(names.forEach((name) => name.includes("a")));
// let info = names.filter((name) => name.includes("a"));
// console.log(info);
function containsDuplicates(arr) {
  const uniqueSet = new Set(arr);
  return uniqueSet.size !== arr.length;
}

const numbersWithDuplicates = [1, 2, 3, 4, 5, 2];
const uniqueNumbers = [1, 2, 3, 4, 5];

console.log(containsDuplicates(numbersWithDuplicates)); // Output
console.log(containsDuplicates(uniqueNumbers));
