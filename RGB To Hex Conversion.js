function rgb(r, g, b){
    return [r,g,b].map(function(x) {
        return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
    }

// The function first uses the map() method to apply the function to each of the red, green, and blue values. 
// This function first ensures that the value is between 0 and 255 by using Math.max() and Math.min(), and then converts the number to a hexadecimal string using toString() with a base of 16. 
// Finally, the resulting string is padded with a leading 0 if it only has one character, and the resulting hexadecimal strings are joined together and converted to uppercase using join() and toUpperCase(), respectively.
