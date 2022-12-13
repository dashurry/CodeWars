function rot13(str) {
  // Create an empty string to store the ciphered string
  let ciphered = '';

  // Iterate over each character in the string
  for (let char of str) {
    // Check if the character is a letter
    if (char >= 'A' && char <= 'Z') {
      // Shift the character by 13 places, wrapping around if necessary
      ciphered += String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
    } else if (char >= 'a' && char <= 'z') {
      // Shift the character by 13 places, wrapping around if necessary
      ciphered += String.fromCharCode((char.charCodeAt(0) - 97 + 13) % 26 + 97);
    } else {
      // If the character is not a letter, return it as is
      ciphered += char;
    }
  }

  return ciphered;
}
// This function takes a string as input and returns the Rot13-ciphered version of the string. 
// It iterates over each character in the string, checking if it is a letter (upper or lower case). 
// If it is a letter, the function shifts it by 13 places using the charCodeAt() method and the fromCharCode() method. 
// If the character is not a letter, it is returned as is. 
// The resulting ciphered string is returned at the end of the function.
