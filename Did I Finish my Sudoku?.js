function doneOrNot(board){
    //check rows
    for (var i = 0; i < board.length; i++) {
        if (board[i].reduce((a, b) => a + b, 0) != 45) {
        return "Try again!";
        }
    }
    //check columns
    for (var i = 0; i < board.length; i++) {
        var sum = 0;
        for (var j = 0; j < board.length; j++) {
        sum += board[j][i];
        }
        if (sum != 45) {
        return "Try again!";
        }
    }
    //check boxes
    for (var i = 0; i < board.length; i += 3) {
        for (var j = 0; j < board.length; j += 3) {
        var sum = 0;
        for (var k = 0; k < 3; k++) {
            for (var l = 0; l < 3; l++) {
            sum += board[i + k][j + l];
            }
        }
        if (sum != 45) {
            return "Try again!";
        }
        }
    }
    return "Finished!";
    }

// The function first checks the rows of the board by iterating over each row with a for loop. 
// For each row, it calculates the sum of all the numbers in the row using the reduce() method. 
// If the sum is not equal to 45 (which is the sum of all numbers from 1 to 9), the function immediately returns "Try again!".

// Next, the function checks the columns by using two nested for loops. 
// The outer loop iterates over each column, and the inner loop iterates over each row for that column. 
// For each column, the function calculates the sum of all the numbers in that column and checks if it is equal to 45. 
// If not, the function returns "Try again!".

// Finally, the function checks the 3x3 boxes within the board using two nested for loops. 
// The outer loop iterates over each box, and the inner loop iterates over each cell within that box. 
//For each box, the function calculates the sum of all the numbers in the box and checks if it is equal to 45. 
//If not, the function returns "Try again!". If all checks pass, the function returns "Finished!".
