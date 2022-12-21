function sumTwoSmallestNumbers(numbers) {
  
  // sort the numbers in ascending order
  numbers.sort((a, b) => a - b);
  
  // get the first and second smallest numbers
  const smallestNumber = numbers[0];
  const secondSmallestNumber = numbers[1];
  
  // return the sum of the two smallest numbers
  return smallestNumber + secondSmallestNumber;

}

// This function first sorts the array of numbers in ascending order using the Array.sort() method 
// and a callback function that compares the elements using the subtraction operator. 
// Then, it returns the sum of the first two elements of the sorted array, 
// which will be the two smallest numbers in the original array.
