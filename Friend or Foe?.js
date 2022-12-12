function friend(friends) {
  // Use the filter method to only return names with 4 letters
  return friends.filter(name => name.length === 4);
}
// This function uses the filter method to create a new array containing only the names with exactly 4 letters. 
// The filter method takes a callback function that determines which elements should be included in the new array. 
// In this case, the callback function checks the length of each name and returns true if it is 4, and false otherwise.
