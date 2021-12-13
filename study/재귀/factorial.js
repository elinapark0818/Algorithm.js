function Factorial(n) {
  if (n === 1) return 1;

  return n * Factorial(n - 1);
}

Factorial(5); // 120
Factorial(4); // 24
