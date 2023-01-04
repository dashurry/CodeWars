// Function to replace every letter in a string with its position in the alphabet.

// Ignores any character that is not a letter.
```
function alphabetPosition(text) {

  let result = ''; // Stores the result

  for (let i = 0; i < text.length; i++) { // Iterate through the characters

    let code = text.charCodeAt(i); // Get the character's Unicode code

    if (code > 64 && code < 91) { // Check if character is in uppercase

      result += (code - 64) + ' '; // Add the position of the letter in the alphabet to the result string

    }

    else if (code > 96 && code < 123) { // Check if character is in lowercase

      result += (code - 96) + ' '; // Add the position of the letter in the alphabet to the result string

    }

  }

  return result.trim(); // Return the result string, with trailing spaces removed

}
```
