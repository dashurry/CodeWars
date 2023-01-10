// This function takes an array of numbers and returns the sum of all of the positive numbers

function positiveSum(arr) {

  let total = 0;

  // Iterate over the array and add the positive numbers together

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {

      total += arr[i];

    }

  }

  return total;

}
