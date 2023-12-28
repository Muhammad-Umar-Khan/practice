let names = ["Umar", "Khan", "Mardan"];
for (let name of names) {
  console.log("Current item is", name);
}

console.log(names.forEach((name) => name.includes("a")));
