function moveZeros(arr) {
    let result = [];
    let zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result.concat(zeros);
  }
//   1. create a function that takes an array as an argument
//   2. create a variable to store the result
//   3. create a variable to store the zeros
//   4. create a for loop to iterate through the array
//   5. check if the current element is equal to zero
//   6. if it is, push it to the zeros array
//   7. if it is not, push it to the result array
//   8. return the result array concatenated with the zeros array
