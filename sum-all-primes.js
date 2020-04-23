// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

// =========
// OBJECTIVE
// =========

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// ==========
// TEST CASES
// ==========

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

console.clear();

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sumPrimes = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sumPrimes += i;
    }
  }
  return sumPrimes;
}

const result = [sumPrimes(10), sumPrimes(977)];

console.log(result);

/* Output

  [ 17, 73156 ]
  
*/
