function findOutlier(integers) {
  // Count the number of odd and even numbers in the array
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // If there is only one odd number, return it
  if (oddCount === 1) {
    return integers.find(x => x % 2 !== 0);
  }

  // Otherwise, there is only one even number, so return it
  return integers.find(x => x % 2 === 0);
}
// This function first uses a loop to count the number of odd and even numbers in the array. 
// If there is only one odd number, it uses the find method to return that number. 
// Otherwise, it returns the only even number in the array.
