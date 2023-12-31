// let names = ["Umar", "Khan", "Mardan"];
// for (let name of names) {
//   console.log("Current item", name);
}

// console.log(names.forEach((name) => name.includes("a")));
// let info = names.filter((name) => name.includes("a"));
// console.log(info);
function containsDuplicates(arr) {
  const uniqueSet = new Set(arr);
  console.log("Set is", uniqueSet);
  return uniqueSet.size !== arr.length;
}

const numbersWithDuplicates = [1, 2, 3, 4, 5, 2];
const uniqueNumbers = [1, 2, 3, 4, 5];

console.log(containsDuplicates(numbersWithDuplicates));
console.log(containsDuplicates(uniqueNumbers));
