function order(words) {
  // split the input string into an array of words
  const wordsArr = words.split(' ');

  // create an array of empty strings with the length of the number of words
  const resultArr = new Array(wordsArr.length).fill('');

  // iterate over the array of words
  for (const word of wordsArr) {
    // find the number that the word contains
    const num = +word.replace(/\D/g, '');

    // place the word in the correct index in the result array
    resultArr[num - 1] = word;
  }

  // join the result array into a string and return it
  return resultArr.join(' ');
}
//  split the input string into an array of words, then create an array of empty strings with the length of the number of words in the input.
// Then, iterate over the array of words and for each word, find the number that it contains. 
// Use this number to determine the index in the result array where the word should be placed. 
// After all words have been placed in the correct index in the result array, join the result array into a string and return it.
