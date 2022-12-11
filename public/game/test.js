// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// DO NOT EDIT THIS FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// NON MODIFICATE QUESTO FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// DO NOT EDIT THIS FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// DO NOT EDIT THIS FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// DO NOT EDIT THIS FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!
// DO NOT EDIT THIS FILE
// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!

let test2 = [ 
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 3, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 4, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 5, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 6, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 7, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 8, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9 ]]




function solveSudoku(sudoku, row, column)
{   
    

	 let N = 9;
	
	if (row == N - 1 && column == N)
		return true;

	
	if (column == N) {
		row++;
		column = 0;
	}

	// Check if the current position
	// of the grid already
	// contains value >0, we iterate
	// for next column
	if (sudoku[row][column] != 0)
		return solveSudoku(sudoku, row, column + 1);

	for (let num = 1; num <= 9; num++) {
		
		if (checkNumber(sudoku, row, column, num)) {
			
			sudoku[row][column] = num;

			// Checking for next
			// possibility with next column
			if (solveSudoku(sudoku, row, column + 1))
				return true;
		}
		
		sudoku[row][column] = 0;
	}
	return false;
}


// check if the number is already in the same row
function checkRow(sudoku, row, number) {

    for (let i = 0; i < sudoku[row].length; i++)
        if (number === sudoku[row][i])
            return false;
    return true;


}

// check if the number is already in the same column
function checkColumn(sudoku, column, number) {
    // calculate the column
    //const column = position % 9;
    // iterate over the column and check if the number is already there
    for (let i = 0; i < 9; i++) {
        if (number === sudoku[i][column]) 
            return false;
    }
    return true;

}


///everything before this has been adapted to work with a 2D array



// check if the number is already in the same 3x3 square
// function checkSquare(gridValues, position, number) {
//     // calculate the square
//     let square = Math.floor(position / 27) * 27 + Math.floor(position % 9 / 3) * 3;
//     // iterate over the square and check if the number is already there
//     for (let i = square; i < square + 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (gridValues[i + j * 9] === number) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


function checkSquare(sudoku, row, column, number) {

    let indexR = row - row % 3;
    let indexC = column - column % 3;
     

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (number == sudoku[i + indexR][j + indexC])
                return false;           
                            

    return true; 
}





// check if the number is valid in a certain position
// function checkNumber(gridValues, position, number) {
//     if (checkRow(gridValues, position, number) 
//     && checkColumn(gridValues, position, number) 
//     && checkSquare(gridValues, position, number)) {
//         return true;
//     }
//     return false;
// }


// will work 
function checkNumber(sudoku, row, column, number) {

    
    if (checkRow(sudoku, row, number) 
    && checkColumn(sudoku, column, number) 
    && checkSquare(sudoku, row, column, number)) {
        return true;
    }
    return false;
}

solveSudoku(test2, 0, 0);
console.log(test2);