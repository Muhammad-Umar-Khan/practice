let names = ["Umar", "Khan", "Mardan"];
for (let name of names) {
  console.log("Current item", name);
}

console.log(names.forEach((name) => name.includes("a")));
let info = names.filter((name) => name.includes("a"));
console.log(info);
