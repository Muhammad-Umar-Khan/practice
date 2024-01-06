function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
const result = fibonacci(6);
console.log(result); // Output: 8
