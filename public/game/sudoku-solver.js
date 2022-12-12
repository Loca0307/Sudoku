//const { array } = require("fast-check");


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


//either this function will take the empty array, or it will remain global













// function init() {
//     let sudoku = [];

//     createGrid();
  
//     x = populateGrid(sudoku);

//     solveSudoku(x, 0, 0);

//     console.log(x);
//     // let asb = removeNumbersFromBoard(x, 3);
//     displayGridValues(x);

//     return x;
// }
// init();



/**
 * 
 * @returns 
 */
function init() {
    let sudoku = [];

    createGrid();
  
    x = populateGrid(sudoku);
    
    solveSudoku(x, 0, 0);
    console.log(x);
    
    // displayGridValues(x);
    // let asb = removeNumbersFromBoard(x, 3);

    return x;
}
// init();






















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

/**
 * 
 * @param {*} gridValues 
 * @returns 
 */
// takes 1D array representing sudoku board, converts to 2D array needed for algo
function arrayto2D(gridValues) {
    let sudoku = [];
    while (gridValues.length)
        sudoku.push(gridValues.splice(0,9));
    return sudoku; 
}

/**
 * 
 * @param {*} sudoku 
 * @returns 
 */
// takes 2D array representing sudoku board, converts to 1D array needed for display
function arrayto1D(sudoku) {
    gridValues = [].concat(...sudoku);
    return gridValues;
}

/**
 * 
 * @returns 
 */
function getRandomNumbers() {
    let init = [1,2,3,4,5,6,7,8,9];
    let out = [];
    while (init.length) {
        let i = Math.floor(Math.random() * init.length);
        out.push(init[i]);
        init.splice(i,1);
    }
    return out; 

}

/**
 * 
 * @param {*} sudoku 
 * @returns 
 */
function populateGrid(sudoku) {
    let randomSeed = getRandomNumbers(); // array of random numbers
    // console.log(randomSeed);
    // let zeroRow = [];
    
    // // make an array of 0's 
    // for (let i = 0; i < 9; i++)
    //     zeroRow.push(0);
    
    // // generate initial sudoku board
    // for (let i = 0; i < 9; i++) {
    //         sudoku.push(zeroRow);       
    // }

    // insert the random numbers in the sudoku board
    // for (let i = 0; i < 9; i++) {
    //     sudoku[i][i] = i;
    // }
    // sudoku[0][0] = 1;
    sudoku = [[0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]];
                // insert the random numbers in the sudoku board
    for (let i = 0; i < 9; i++) {
        sudoku[i][i] = randomSeed[i];
    }
    return sudoku;
    
}

/**
 * 
 * @param {*} sudoku 
 */
// display the grid values in html input
function displayGridValues(sudoku) {
    
    let n = 0; //this is associated to the input element ids

    for (let i = 0; i < columnSize; i++) {
        // inserte the value in the input
        for (let j = 0; j < rowSize; j++) {
            
            document.getElementById(`input-${n++}`).value = sudoku[i][j];
        }
    }

}



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

/**
 * 
 * @returns 
 */
// get all the input values from the grid, NOT IN USE AT THE MOMENT
function getGridValues() {
    gridValues = gridArray.map(input => input.value);
    return gridValues;
}

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} number 
 * @returns 
 */
// check if the number is already in the same row
function checkRow(sudoku, row, number) {

    for (let i = 0; i < sudoku[row].length; i++)
        if (number === sudoku[row][i])
            return false;
    return true;

}

/**
 * 
 * @param {*} sudoku 
 * @param {*} column 
 * @param {*} number 
 * @returns 
 */
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

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @param {*} number 
 * @returns 
 */
function checkSquare(sudoku, row, column, number) {

    let indexR = row - row % 3;
    let indexC = column - column % 3;
     

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (number == sudoku[i + indexR][j + indexC])
                return false;           
                            

    return true; 
}

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @param {*} number 
 * @returns 
 */
function checkNumber(sudoku, row, column, number) {

    if (checkRow(sudoku, row, number) 
    && checkColumn(sudoku, column, number) 
    && checkSquare(sudoku, row, column, number)) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
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

/**
 * 3d part of the code is to creat 3 different levels of difficulty
 * that a single player can choose from
 * and play and solve the sudoku
 * 
 * for this we store the initial sudoku board in a variable
 * and then we remove a certain number of numbers from the board
 * depending on the level of difficulty
 * 
 * 
 */



// take the init() return value and store it in a variable
let solvedsudoku = init();
// Create copy of solvedsudoku array, not reference
let CorrectSudokuForChecking = JSON.parse(JSON.stringify(solvedsudoku));


/**
 * 
 */
// create the easy level
console.log("easy level");
function gameLevel(difficulty){
    if (difficulty === "easy") {
        return removeNumbersFromBoard(sudokulevels, 1);
    }
    else if (difficulty === "medium") {
        return removeNumbersFromBoard(sudokulevels, 2);
    }
    else if (difficulty === "hard") {
        return removeNumbersFromBoard(sudokulevels, 3);
    }
}


/**
 * 
 * @param {*} solvedsudoku 
 * @param {*} level 
 * @returns 
 */
// remove a certain number of numbers from the board depending on the level of difficulty
function removeNumbers(solvedsudoku, level) {
    let n = 0;
    let removedNumbers = 0;
    // easy level
    if (level === 1) {
        removedNumbers = 10;
    }
    // medium level
    else if (level === 2) {
        removedNumbers = 20;
    }
    // hard level
    else if (level === 3) {
        removedNumbers = 30;
    }
    // remove the numbers from the board
    while (n < removedNumbers) {
        let row = Math.floor(Math.random() * 9);
        let column = Math.floor(Math.random() * 9);
        if (solvedsudoku[row][column] !== 0) {
            solvedsudoku[row][column] = 0;
            n++;
        }
    }
    console.log("removed numbers");
    console.log(solvedsudoku);
    console.log("removed shadflksahdfkshdfk");
    console.log("removed shadflksahdfkshdfk");
    // makeNonEmptyCellsReadonly();
    console.log("removed shadflksahdfkshdfk");
    console.log("removed shadflksahdfkshdfk");

    return solvedsudoku;
}

/**
 * TODO when user presses on easy button this needs to be called with params solvedsudoku and 1
 *      when user presses on medium button this needs to be called with params solvedsudoku and 2
 *      when user presses on hard button this needs to be called with params solvedsudoku and 3
 * @param {*} solvedsudoku 
 * @param {*} level 
 * @returns 
 */
// remove the numbers from the board
function removeNumbersFromBoard(solvedsudoku, level) {
    let removedSudoku = removeNumbers(solvedsudoku, level);
    // makeNonEmptyCellsReadonly();
    return removedSudoku;
}

removeNumbersFromBoard(solvedsudoku, 1);
console.log(removeNumbersFromBoard(solvedsudoku, 1));
displayGridValues(removeNumbersFromBoard(solvedsudoku, 1));
makeNonEmptyCellsReadonly();
console.log("aljdf;lajfl;kad");
// console.log(displayGridValues(removeNumbersFromBoard(solvedsudoku, 1)));



// player needs to be able to choose a level
// and then the board is displayed
// and the player can start playing
// and solve the sudoku
// and then the player can check if the sudoku is solved
// and if it is solved the player can start a new game
// and choose a new level
// and then the board is displayed

/**
 * 
 * @param {*} sudoku 
 * @returns 
 */
// go over the sudoku of the player and store the coordinates of the empty cells
function getEmptyCells(sudoku) {
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] === 0) {
                emptyCells.push([i, j]);
            }
        }
    }
    return emptyCells;
}

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
// if the coordinates of the empty cells are the same as the coordinates of the cell that the player clicked on
// then the player can enter a number in that cell
// this should be used for the event listener
function checkIfCellIsEmpty(sudoku, row, column) {
    let emptyCells = getEmptyCells(sudoku);
    for (let i = 0; i < emptyCells.length; i++) {
        if (emptyCells[i][0] === row && emptyCells[i][1] === column) {
            return true;
        }
    }
    return false;
}


/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @param {*} number 
 */
// if checkIfCellIsEmpty returns true then the player can enter a number in the cell
function enterNumber(sudoku, row, column, number) {
    if (checkIfCellIsEmpty(sudoku, row, column)) {
        sudoku[row][column] = number;
    }
}

/**
 * 
 * @param {*} sudoku 
 * @returns 
 */
// go over the sudoku of the player and store the coordinates of the non empty cells
function getNonEmptyCells(sudoku) {
    let nonEmptyCells = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] !== 0) {
                nonEmptyCells.push([i, j]);
            }
        }
    }
    return nonEmptyCells;
}

/**
 * 
 */
// loop over the sudocu and make the cells that have the same coordinates of the nonEmptyCells readonly
function makeNonEmptyCellsReadonly() {
    let nonEmptyCells = getNonEmptyCells(solvedsudoku);
    for (let i = 0; i < nonEmptyCells.length; i++) {
        let x = nonEmptyCells[i];
        id = x[0] * 9 + x[1];
        document.getElementById('input-'+id).readOnly = true;
    }
}

// add the class green to the input fields of alterning 3x3 boxes
function addGreenClassToBoxes() {
    b = solvedsudoku
    a = document.getElementById('input-'+i).className = "color";
    for (let i = 0; i<3; i++) {
    b[i][0] = a;
    b[i][1] = a;
    b[i][2] = a;
    b[i][6] = a;
    b[i][7] = a;
    b[i][8] = a;
    }
    for (let i = 3; i<6; i++) {
    b[i][3] = a;
    b[i][4] = a;
    b[i][5] = a;
    }
    for (let i = 6; i<9; i++) {
    b[i][0] = a;
    b[i][1] = a;
    b[i][2] = a;
    b[i][6] = a;
    b[i][7] = a;
    b[i][8] = a;
    }
}

   







/**
 * 4th part of the project
 * this part updates the highscore based on the progress of the player
 */




/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */

// check if the player has entered a number in the cell
function checkIfCellIsFilled(sudoku, row, column) {
    if (sudoku[row][column] !== 0) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @param {*} number 
 * @returns 
 */
// check if the player has entered the correct number in the cell
function checkIfCellIsCorrect(sudoku, row, column, number) {
    if (checkIfCellIsFilled(sudoku, row, column)) {
        if (CorrectSudokuForChecking[row][column] === number) {
            return true;
        }
    }
    return false;
}



/**
 * 
 * @param {*} sudoku 
 * @param {*} row 
 * @param {*} column 
 * @param {*} number 
 * @returns 
 */
// creat a function called highscore that keeps track of the progres of the player
// if the player enters a correct number in the cell the highscore is increased
// if the player enters an incorrect number in the cell the highscore is decreased
function highscore(sudoku, row, column, number) {
    highscore = 0;
    if (checkIfCellIsCorrect(sudoku, row, column, number)) {
        highscore++;
    }
    else {
        highscore--;
    }
    return highscore;
}

