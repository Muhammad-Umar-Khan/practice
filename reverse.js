function reverse(number) {
  let finalOutput = 0;
  while (number > 0) {
    let lastInt = Math.floor(number % 10);
    number = Math.floor(number / 10);
    finalOutput = Math.floor(finalOutput * 10 + lastInt);
  }
  return finalOutput;
}

console.log(reverse(123));
console.log(reverse(654));
