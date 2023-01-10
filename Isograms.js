// Checks if a given string is an isogram or not

// An isogram is a word that has no repeating letters, consecutive or non-consecutive

// Returns true if the string is an isogram, false otherwise

function isIsogram(str) {

  const seen = new Set();

  const lowerCaseStr = str.toLowerCase();



  // loop through the characters in the string

  for (let char of lowerCaseStr) {

    // check if the character is in the set

    if (seen.has(char)) {

      // if it is, the string is not an isogram, return false

      return false;

    }



    // add the character to the set

    seen.add(char);

  }



  // if we haven't returned false yet, the string is an isogram, return true

  return true;

}
