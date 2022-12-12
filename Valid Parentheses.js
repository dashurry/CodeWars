function validParentheses(parens) {
  // Use a stack to keep track of the open parentheses.
  const stack = [];

  // Loop through the string of parentheses.
  for (const char of parens) {
    // If the character is an open parenthesis, push it to the stack.
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      // If the character is a closing parenthesis and the stack is empty,
      // return false because there is no corresponding open parenthesis.
      if (stack.length === 0) {
        return false;
      }

      // Otherwise, pop the last open parenthesis from the stack.
      stack.pop();
    }
  }

  // If there are any open parentheses left in the stack, return false
  // because there are unmatched open parentheses.
  if (stack.length > 0) {
    return false;
  }

  // Otherwise, return true because the string of parentheses is valid.
  return true;
}
// using a stack to keep track of the open parentheses in the string. 
// It loops through the string and pushes each open parenthesis to the stack. 
// When it encounters a closing parenthesis, it checks if the stack is empty, and returns false if it is because there is no corresponding open parenthesis. 
// If the stack is not empty, it pops the last open parenthesis from the stack. 
// Finally, it checks if there are any open parentheses left in the stack, and returns false if there are because they are unmatched. 
// If there are no open parentheses left in the stack, it returns true because the string of parentheses is valid.
