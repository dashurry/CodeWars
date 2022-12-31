
String.prototype.toJadenCase is a function that converts a string to Jaden Case.
Jaden Case is a style of writing where each word in a phrase is capitalized.
@returns {string} a new string in Jaden Case
@example
"how are you doing?".toJadenCase();
// returns "How Are You Doing?"

```
String.prototype.toJadenCase = function () {
return this.split(' ').map(function(word){
return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');
};
```

// 1. split the string into an array of words<br>
// 2. map over the array of words<br>
// 3. for each word, capitalize the first letter and add the rest of the word<br>
// 4. join the array of words back into a string
