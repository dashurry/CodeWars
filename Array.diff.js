function arrayDiff(a, b) {
  // Create a Set from the second list to make it easier to check if a value
  // is present in that list.
  const set = new Set(b);

  // Use the Array.filter() method to remove all values from the first list
  // that are present in the second list.
  return a.filter(x => !set.has(x));
}
// creating a Set from the second list, which is a data structure that allows you to quickly check if a value is present in the set. 
// Then, it uses the Array.filter() method to remove all values from the first list that are present in the second list. 
// Finally, it returns the resulting array.
