function findOdd(A) {

  // Create an empty object to store the count of each integer

  let count = {};

  // Iterate through the array and count the number of occurrences of each integer

  for (let i = 0; i < A.length; i++) {

    // If the integer has not been encountered before, add it to the count object with a count of 1

    if (count[A[i]] === undefined) {

      count[A[i]] = 1;

    }

    // If the integer has been encountered before, increment its count by 1

    else {

      count[A[i]]++;

    }

  }

  // Iterate through the keys in the count object

  for (let key in count) {

    // Convert the key to a number and store it in a variable called 'int'

    let int = Number(key);

    // If the count for the current integer is odd, return the integer

    if (count[int] % 2 === 1) {

      return int;

    }

  }

}


      

// We want to find the integer in an array that appears an odd number of times. 
// To do this, we can create a new object and use it to store the count of each integer in the array. 
// We can then iterate through the keys in this object and return the key (which is the integer) if its count is odd.

// Here is a step-by-step breakdown of the modified function:

// Create an empty object called count.

// Iterate through the array of integers. For each integer in the array:

// If the integer has not been encountered before, add it to the count object with a count of 1.

// If the integer has been encountered before, increment its count by 1.

// Iterate through the keys in the count object. 
// For each key (which is a string representation of an integer):

// Convert the key to a number and store it in a variable called 'int'.
// If the count for the current integer is odd, return the integer.
