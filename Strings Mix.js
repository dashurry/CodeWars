function mix(s1, s2) {
    // Create two maps to keep track of the number of times each character appears in each string
    const s1Map = new Map();
    const s2Map = new Map();
    // Create an array to store the final result
    const result = [];
    // Loop through each character in s1
    for (let i = 0; i < s1.length; i++) {
        // Check if the current character is a lowercase letter
        if (s1[i].match(/[a-z]/)) {
            // If s1Map already has the character, increment its count by 1
            if (s1Map.has(s1[i])) {
                s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
            } else {
                // Otherwise, add the character to s1Map with a count of 1
                s1Map.set(s1[i], 1);
            }
        }
    }
    
    for (let i = 0; i < s2.length; i++) {
        // Check if the current character is a lowercase letter
        if (s2[i].match(/[a-z]/)) {
            // If s2Map already has the character, increment its count by 1
            if (s2Map.has(s2[i])) {
                s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
            } else {
                // Otherwise, add the character to s2Map with a count of 1
                s2Map.set(s2[i], 1);
            }
        }
    }
    
    
    // Convert the keys of the s1Map and s2Map Maps to arrays
const s1Keys = Array.from(s1Map.keys());
const s2Keys = Array.from(s2Map.keys());

// Initialize empty objects to store the maximum counts for each string
const s1Max = {};
const s2Max = {};
const equalMax = {};

    
for (let i = 0; i < s1Keys.length; i++) {
    // Check if s2Keys contains the current character from s1Keys
    if (s2Keys.includes(s1Keys[i])) {
        // If the character has a higher count in s1Map, add it to s1Max
        if (s1Map.get(s1Keys[i]) > s2Map.get(s1Keys[i])) {
            s1Max[s1Keys[i]] = s1Map.get(s1Keys[i]);
        // If the character has a higher count in s2Map, add it to s2Max
        } else if (s1Map.get(s1Keys[i]) < s2Map.get(s1Keys[i])) {
            s2Max[s1Keys[i]] = s2Map.get(s1Keys[i]);
        // Otherwise, the character has the same count in both Maps, so add it to equalMax
        } else {
            equalMax[s1Keys[i]] = s1Map.get(s1Keys[i]);
        }
    // If the character is not in s2Keys, add it to s1Max
    } else {
        s1Max[s1Keys[i]] = s1Map.get(s1Keys[i]);
    }
}

    
for (let i = 0; i < s2Keys.length; i++) {
    // If the current character from s2Keys is not in s1Keys, add it to s2Max
    if (!s1Keys.includes(s2Keys[i])) {
        s2Max[s2Keys[i]] = s2Map.get(s2Keys[i]);
    }
}

// Convert the keys of the s1Max, s2Max, and equalMax objects to arrays
const s1MaxKeys = Object.keys(s1Max);
const s2MaxKeys = Object.keys(s2Max);
const equalMaxKeys = Object.keys(equalMax);


    // Loop through each key in the s1MaxKeys array
for (let i = 0; i < s1MaxKeys.length; i++) {
    // Check if the value associated with the current key in the s1Max object is greater than 1
    if (s1Max[s1MaxKeys[i]] > 1) {
      // If the value is greater than 1, push the key repeated the number of times
      // specified by the value, prefixed with "1:" to the result array
      result.push(`1:${s1MaxKeys[i].repeat(s1Max[s1MaxKeys[i]])}`);
    }
  }
  
  // Repeat the above steps for the s2MaxKeys array and the s2Max object
  for (let i = 0; i < s2MaxKeys.length; i++) {
    if (s2Max[s2MaxKeys[i]] > 1) {
      result.push(`2:${s2MaxKeys[i].repeat(s2Max[s2MaxKeys[i]])}`);
    }
  }
  
  // Repeat the above steps for the equalMaxKeys array and the equalMax object
  for (let i = 0; i < equalMaxKeys.length; i++) {
    if (equalMax[equalMaxKeys[i]] > 1) {
      result.push(`=:${equalMaxKeys[i].repeat(equalMax[equalMaxKeys[i]])}`);
    }
  }

// Sort the result array in ascending order based on the length of the elements
// If two elements have the same length, sort them in ascending alphabetical order
result.sort((a, b) => {
    if (a.length > b.length) {
      // If the length of element a is greater than the length of element b,
      // return -1 to sort a to an index lower than b
      return -1;
    } else if (a.length < b.length) {
      // If the length of element a is less than the length of element b,
      // return 1 to sort a to an index higher than b
      return 1;
    } else {
      // If the length of element a is equal to the length of element b,
      // compare their alphabetical order and return -1, 1, or 0 accordingly
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  
    
    // Join the elements of the result array with the "/" character and return the result
return result.join('/');
}
