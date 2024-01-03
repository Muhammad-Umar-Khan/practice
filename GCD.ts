function findGCD(a: number, b: number): number {
  // Ensure both numbers are positive
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// Example usage:
const num1 = 48;
const num2 = 18;
const gcd = findGCD(num1, num2);

console.log(`GCD of ${num1} and ${num2} is: ${gcd}`);