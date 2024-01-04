function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const num1 = 24;
const num2 = 16;
const GCD = findGCD(num1, num2);

console.log(`GCD of ${num1} and ${num2} is: ${GCD}`);
