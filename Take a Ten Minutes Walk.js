function isValidWalk(walk) {
  // Initialize variables to keep track of our current position on the grid
  let currentX = 0;
  let currentY = 0;

  // Walk through each direction in the array
  for (let i = 0; i < walk.length; i++) {
    // Get the current direction
    let direction = walk[i];

    // Update our position based on the direction
    if (direction === 'n') {
      currentY++;
    } else if (direction === 's') {
      currentY--;
    } else if (direction === 'e') {
      currentX++;
    } else if (direction === 'w') {
      currentX--;
    }
  }

  // Return true if we end up back at the starting position (0, 0) and have taken exactly 10 steps
  return currentX === 0 && currentY === 0 && walk.length === 10;
}
// In this function, we use a loop to walk through each direction in the walk array. 
// For each direction, we update our current position on the grid based on the direction. 
// If the direction is 'n' (north), we increment the currentY position by 1. 
// If the direction is 's' (south), we decrement the currentY position by 1. 
// If the direction is 'e' (east), we increment the currentX position by 1. 
// If the direction is 'w' (west), we decrement the currentX position by 1.

// After we have walked through all of the directions in the walk array, 
// we check whether our current position is back at the starting position (0, 0)
// and whether we have taken exactly 10 steps (i.e., whether the walk array has a length of 10). 
// If both of these conditions are true, we return true; otherwise, we return false.
