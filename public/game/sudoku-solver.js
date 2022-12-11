const grid = document.querySelector('#grid');  
const solveButton = document.querySelector('#solve-button');
const gridSize = 81;
const columnSize = 9;
const rowSize = 9;
const gridArray = Array.from(grid.children); //maybe we need to acces .value of children elelemtn

let gridValues = []; //1D array representing board
let sudoku = []; //2D array representing board


let test = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
             [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
             [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
             [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
             [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
             [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
             [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
             [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
             [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]
  

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


/* 

Explanations:

Sudoku represents a 2D array
gridValues represents a 1D array 

*/



/**
 * 
 * first part of the code is to create the grid
 * and to populate it with 3 random numbers from 1 to 9 each one different from the other
 * so that the next part can take this grid and solve it via backtracking
 * generating a total of 9*8*7 = 504 possible different sudoku grids
 */


// Create the grid

function createGrid() {
for (let i = 0; i < gridSize; i++) {
  let input = document.createElement('input');
  input.setAttribute('id', `input-${i}`);
  input.setAttribute('type', 'number');
  input.setAttribute('min', '1');
  input.setAttribute('max', '9');
  input.setAttribute('maxlength', '1');

  grid.appendChild(input);
}

};


createGrid();

// sudoku.push(1);

//let sudoku = [];

// takes 1D array representing sudoku board, converts to 2D array needed for algo
function arrayto2D() {
    while (gridValues.length-1)
        sudoku.push(gridValues.splice(0,9));
    return sudoku; 
}

// takes 2D array representing sudoku board, converts to 1D array needed for display
function arrayto1D() {
    gridValues = [].concat(...sudoku);
    return gridValues;
}


// assign to the 3 const a random number between 1 and 9 different from each other


// @return {Array} with 3 random numbers
function getRandomNumbers() {
    let first, second, third, fourth, fifth, sixth, seventh, eighth, ninth;; 
    while (first === second || second === third || third === fourth || fourth === fifth 
        || fifth === sixth || sixth === seventh || seventh === eighth || eighth === ninth ) {
        first = Math.floor(Math.random() * 9) + 1;
        second = Math.floor(Math.random() * 9) + 1;
        third = Math.floor(Math.random() * 9) + 1;
        fourth = Math.floor(Math.random() * 9) + 1;
        fifth = Math.floor(Math.random() * 9) + 1;
        sixth = Math.floor(Math.random() * 9) + 1;
        seventh = Math.floor(Math.random() * 9) + 1;
        eighth = Math.floor(Math.random() * 9) + 1;
        ninth = Math.floor(Math.random() * 9) + 1;
    }
    return [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];

}

//let x = getRandomNumbers();
//console.log(x);


// get all the input values from the grid
// function getGridValues() {
//     const gridValues = gridArray.map(input => input.value);
//     return gridValues;
// }
// getGridValues();
// console.log(gridValues);

// populate the grid with the 3 random numbers
// const gridValues = getGridValues();


//let sudoku = []; // this is the actual playing board


function populateGrid(sudoku) {
    let randomSeed = getRandomNumbers(); // array of random numbers
    let row1 = [];
    let zeroRow = [];
    // generate row with 3 random values; 
    for (let i = 0; i < 9; i++) {
        if (i < 3)
            row1.push(randomSeed[i]);
        else
            row1.push(0);
    }
    // make an array of 0's 
    for (let i = 0; i < 9; i++)
        zeroRow.push(0);
    
    
    // generate initial sudoku board
    for (let i = 0; i < 9; i++) {
        if (i == 0)
            sudoku.push(row1);
        else
            sudoku.push(zeroRow);
            
    }
    // rest of grid values to 0
    
}



//console.log(gridValues);
console.log("break");
//populateGrid(sudoku);
console.log(sudoku);

// display the grid values in html input
function displayGridValues() {

    let n = 0; //this is associated to the input element ids

    for (let i = 0; i < columnSize; i++) {
        // inserte the value in the input
        for (let j = 0; j < rowSize; j++) {
            document.getElementById(`input-${n++}`).value = sudoku[i][j];
        }
    }

}

solveSudoku(test, 0, 0);
displayGridValues();



/**
 * 2nd part of the code is to solve the grid
 * for this the algorithem needs to be able to check if a number is valid in a certain position
 * if it is not valid to change it to the next number
 * if it is valid to move to the next position
 * and if no number is valid to go back to the previous position and change the number there
 * 
 * for the validity of a number in a certain position the algorithem needs to check
 * if the number is already in the same row
 * if the number is already in the same column
 * if the number is already in the same 3x3 square
 * 
 */




// get all the input values from the grid, NOT IN USE AT THE MOMENT
function getGridValues() {
    gridValues = gridArray.map(input => input.value);
    return gridValues;
}



// check if the number is already in the same row
function checkRow(sudoku, row, number) {
    // calculate the row
    // const row = Math.floor(position / 9);
    // // iterate over the row and check if the number is already there
    // for (let i = row; i < row + 9; i++) {
    //     if (gridValues[i] === number) {
    //         return false;
    //     }
    // }
    // return true;

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

    let gridValues = arrayto1D(sudoku);
    if (checkRow(sudoku, row, number) 
    && checkColumn(sudoku, column, number) 
    && checkSquare(sudoku, row, column, number)) {
        return true;
    }
    return false;
}



// solve the grid
function solveGrid(gridValues) {
    // store the gridValues in an array
    
    // iterate over the gridValues
    for (let i = 0; i < gridSize; i++) {
        // if the position is empty
        if (gridValues[i] === 0) {
            // iterate over the numbers
            for (let j = 1; j <= 9; j++) {
                // if the number is valid
                if (checkNumber(gridValues, i, j)) {
                    // insert the number in the position
                    gridValues[i] = j;
                    
                    // document.getElementById(`input-${i}`).value = gridValues[i];
                    // solve the rest of the gridValues
                    if (solveGrid(gridValues)) {
                        return true;
                    }
                    // if the number is not valid
                    else {
                        // empty the position
                        gridValues[i] = 0;
                        
                        // document.getElementById(`input-${i}`).value = gridValues[i];

                    }
                }
            }
            // if no number is valid
            return false;
        }
    }
    // if the gridValues is solved
    return true;
}
//solveGrid(gridValues);
console.log(gridValues);




function solveSudoku(sudoku, row, column, size)
{
	// let N = 9;
	
	if (row == size - 1 && column == size)
		return true;

	
	if (column == size) {
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





