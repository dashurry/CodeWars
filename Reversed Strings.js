```
function solution(str){
  // It first splits the string into an array of characters using the split method
  // This separates each character of the string into its own element in the array
  // The array is now ['h','e','l','l','o'] for the string 'hello'
  var array = str.split('');
  
  // It then uses the reverse method to reverse the order of the elements in the array
  // The array is now ['o','l','l','e','h'] for the string 'hello'
  array.reverse();
  
  // It then joins the elements of the array back into a string using the join method
  // This puts all the elements of the array back into a single string
  // The final string is now 'olleh' for the string 'hello'
  return array.join('');
}
```
// The above code will take a string as a parameter and will reverse the order of the characters in the string and return the reversed string.
// It's using the split() method to convert the string into an array of characters, then using the reverse() method to change the order of the elements in the array which will in turn change the order of the characters in the string and then using the join() method to combine the elements of the array back into a single string.
// The final output will be the reversed version of the input string.
