const students = ["Alex", "Bob", "Charlie", "Jushua"];
const [first, , third, fourth] = students;
console.log("First student is", first, "and fourth element");
const copy = students.slice(0, 2);
const SPLICE = students.splice(0, 1, "Umar");
console.log(copy, SPLICE);
