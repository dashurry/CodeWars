function getMiddle(s)
{
  if (s.length % 2 == 0) {
    return s.slice(s.length/2 - 1, s.length/2 + 1);
  } else {
    return s.slice(s.length/2, s.length/2 + 1);
  }
}
// First, the function checks if the length of the string (s.length) is even by using the modulo operator (%) to check if the length divided by 2 has a remainder of 0.

// If the length of the string is even, the function uses the slice() method to return the substring of s that starts at the s.length/2 - 1 index and ends at the s.length/2 + 1 index. 
// This will return the two middle characters of the string.

// If the length of the string is odd, the function uses the slice() method to return the substring of s that starts at the s.length/2 index and ends at the s.length/2 + 1 index. 
// This will return the middle character of the string.
