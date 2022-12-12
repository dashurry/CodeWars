function solution(number) {
  // Set up a sum variable to keep track of the total sum of the multiples of 3 and 5.
  let sum = 0;

  // Loop through the numbers from 0 to the given number.
  for (let i = 0; i < number; i++) {
    // If the current number is a multiple of 3 or 5, add it to the sum.
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  // Return the sum.
  return sum;
}
// This solution works by looping through the numbers from 0 to the given number, and checking if each number is a multiple of 3 or 5. 
// If it is, it adds it to the sum variable. 
// Finally, it returns the sum variable, which contains the sum of all the multiples of 3 or 5 below the given number.
