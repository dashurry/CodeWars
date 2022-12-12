function addBinary(a, b) {
  // Convert the numbers to binary and store them as strings
  let binaryA = a.toString(2);
  let binaryB = b.toString(2);

  // Add the binary strings together using the built-in parseInt function
  let sum = parseInt(binaryA, 2) + parseInt(binaryB, 2);

  // Convert the sum back to binary and return it as a string
  return sum.toString(2);
}
// This function first converts the two numbers a and b to binary strings using the toString method, which takes a base (in this case 2 for binary) as an argument.
// It then adds the binary strings together using the parseInt function, which takes a string and a base and returns the corresponding integer. 
// Finally, it converts the sum back to binary and returns it as a string.
