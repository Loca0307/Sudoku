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
  input.setAttribute('class', '');
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

let resetSudoku;
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
    if (level == 1) {
        removedNumbers = 10;
    }
    // medium level
    else if (level == 2) {
        removedNumbers = 20;
    }
    // hard level
    else if (level == 3) {
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
    resetSudoku = JSON.parse(JSON.stringify(solvedsudoku));
    return solvedsudoku;
}






// todo this links the difficulty level to the removeNumbersFromBoard function
// but as we are in a test js to see that it works we have to move all the needed code to sudoku.js
// let level = document.getElementById("diff").value;

// if the code above doesn't work we can use instead
// let value = document.getElementById("diff");
// value.addEventListener('click', event => {
//     level = document.getElementById("diff").value;
//     removeNumbersFromBoard(solvedsudoku, level)

// });


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
// console.log(removeNumbersFromBoard(solvedsudoku, 1));
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

// loop over the sudocu and add to the cells that have the same coordinates of the emptyCells a focusout event listener
function ofFocus(){
    let emptyCells = getEmptyCells(solvedsudoku);
    for (let i = 0; i < emptyCells.length; i++) {
        let x = emptyCells[i];
        let row = x[0];
        let column = x[1];
        id = x[0] * 9 + x[1];
        const cell = document.getElementById('input-'+id)
        cell.addEventListener('focusout', (event) => {
            // get value of the cell
            let number = event.target.value;
            // get coordinates of the cell
            highscore(solvedsudoku, row, column, number) 
            console.log(highscore(solvedsudoku, row, column, number));

        })
    }

} 
ofFocus();
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
    //document.getElementById('input-'+i).className = "color";
    for (let i = 0; i<3; i++) {
    b[i][0] = document.getElementById('input-'+i*9+0).className = "color";
    b[i][1] = document.getElementById('input-'+i*9+1).className = "color";
    b[i][2] = document.getElementById('input-'+i*9+2).className = "color";
    b[i][6] = document.getElementById('input-'+i*9+6).className = "color";
    b[i][7] = document.getElementById('input-'+i*9+7).className = "color";
    b[i][8] = document.getElementById('input-'+i*9+8).className = "color";
    }
    for (let i = 3; i<6; i++) {
    b[i][3] = document.getElementById('input-'+i*9+3).className = "color";
    b[i][4] = document.getElementById('input-'+i*9+4).className = "color";
    b[i][5] = document.getElementById('input-'+i*9+5).className = "color";
    }
    for (let i = 6; i<9; i++) {
    b[i][0] = document.getElementById('input-'+i*9+0).className = "color";
    b[i][1] = document.getElementById('input-'+i*9+1).className = "color";
    b[i][2] = document.getElementById('input-'+i*9+2).className = "color";
    b[i][6] = document.getElementById('input-'+i*9+6).className = "color";
    b[i][7] = document.getElementById('input-'+i*9+7).className = "color";
    b[i][8] = document.getElementById('input-'+i*9+8).className = "color";
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
    highscores = 0;
    if (checkIfCellIsCorrect(sudoku, row, column, number)) {
        highscores++;
    }
    else {
        highscores--;
    }
    return highscores;
}

let highscores = 0;
console.log(highscores);



/**
 * 5th part of the project
 * impruve cliants sudoku experience
 * add a timer
 * add a button to show a hint
 * add a button to reset the game
 * add a button to check if the player has won
 * if clicking on a number all the cells with the same number are highlighted
 * if clicking on a cell all the cells in the same row, column and box are highlighted
 *
 */

// // add a timer that starts when the player starts the game
// function timer() {
//     let time = 0;
//     setInterval(function () {
//         time++;
//         document.getElementById('time').innerHTML = time;
//     }, 1000);
// }
// // calculate the time it took the player to finish the game
// function calculateTime() {
//     let start = Date.now();
//     let finish = Date.now();
//     // calculate the time it took the player to finish the game
//     let time = finish - start;
//     return time;
// }

// show a hint to the player
function showHint() {
    highscores = highscores - 10;
    // get a random empty cell
    let emptyCells = getEmptyCells(solvedsudoku);
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    let x = randomCell;
    id = x[0] * 9 + x[1];
    // get the correct number for the cell
    let number = CorrectSudokuForChecking[x[0]][x[1]];
    // show the correct number in the cell
    document.getElementById('input-' + id).value = number;
}

// reset the game
function resetGame(){
    displayGridValues(resetSudoku);
}

// start a new game with same level of difficulty
function newGame(){
    location.reload();
}

// check if sudoku is correct
function checkIfSudokuIsCorrect(solvedsudoku) {
    if (CorrectSudokuForChecking == solvedsudoku)
        return true;
    return false;
}
// check if the player has won
function checkIfPlayerHasWon(){
    // call the function checkIfSudokuIsCorrect
    if (checkIfSudokuIsCorrect(solvedsudoku)) {
        // player has won
        alert("Congratulations! You have won!");
    }
    else {
        alert("You have not won yet!");
    }
}

// highlight all the cells with the same number as the cell the player has clicked on
function highlightSameNumberCells() {
    // get coordunates of the cell the plater has clicked on
    let x = addEventListener('click', function (event) {
        let id = event.target.id;
        let x = id.split('-');
        x = x[1];
        y = Math.floor(x/9);
        z = x%9
    });
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (solvedsudoku[i][j] === solvedsudoku[y][z]) {
                document.getElementById('input-' + (i * 9 + j)).className = "highlightNumber";
            }
        }
    }
}

// highlight all the cells in the same row, column and box as the cell the player has clicked on
function highlightSameRowColumnBoxCells() {
    // get the coordinates of the cell the player has clicked on
    let x = addEventListener('click', function (event) {
        let id = event.target.id;
        let x = id.split('-');
        x = x[1];
        y = Math.floor(x/9);
        z = x%9
    });
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i === y || j === z || (Math.floor(i / 3) === Math.floor(y / 3) && Math.floor(j / 3) === Math.floor(z / 3))) {
                document.getElementById('input-' + (i * 9 + j)).className = "highlightCoordinates";
            }
        }
    }
}
