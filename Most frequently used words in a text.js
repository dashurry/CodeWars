function topThreeWords(text) {
  // Use a regular expression to match all words in the text
  const words = text.match(/\b[\w']+\b/g);

  // If no words were found, return an empty array
  if (!words) {
    return [];
  }

  // Create a Map to store the count for each word
  const wordCounts = new Map();

  // Iterate through the words array and count the occurrences of each word
  for (const word of words) {
    const lowerCaseWord = word.toLowerCase();
    if (wordCounts.has(lowerCaseWord)) {
      wordCounts.set(lowerCaseWord, wordCounts.get(lowerCaseWord) + 1);
    } else {
      wordCounts.set(lowerCaseWord, 1);
    }
  }

  // Sort the Map entries by value in descending order
  const sortedWordCounts = [...wordCounts.entries()].sort((a, b) => b[1] - a[1]);

  // Return the top 3 most occurring words
  return sortedWordCounts.slice(0, 3).map(([word, count]) => word);
}


// First, the function uses a regular expression to match all words in the text. 
// The regular expression /\b[\w']+\b/g searches for sequences of word characters (\w) and apostrophes (') that are surrounded by word boundaries (\b). 
// The g flag at the end of the regular expression indicates that the match should be global, meaning that it should find all occurrences of the pattern in the text, rather than stopping at the first match. 
// The resulting array of words is stored in the words variable.

// Next, the function checks whether words is null or undefined. If it is, the function returns an empty array. 
// If words is not null or undefined, the function continues to the next step.

// The function then creates a Map object called wordCounts to store the count for each word.

// The function then iterates through the words array and counts the occurrences of each word. 
// It does this by using a for loop to iterate through the words array, and using the Map.has and Map.set methods to check whether a word is already in the wordCounts map, and if it is, to increment the count for that word by 1. 
// If the word is not in the map, the function adds it to the map with a count of 1.

// After the for loop completes, the function sorts the entries in the wordCounts map by value in descending order using the Array.sort method. 
// It does this by creating an array of entries from the map using the spread operator ([...wordCounts.entries()]), and then sorting the array using a comparison function that compares the second element (the count) of each entry.

// Finally, the function uses the Array.slice method to return the top 3 most occurring words from the sorted array of entries. 
// It does this by slicing the array to get the first 3 elements, and then using the Array.map method to transform each entry into just the word (the first element of the entry).
