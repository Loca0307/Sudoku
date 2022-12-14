const grid = document.querySelector('#grid');
const solveButton = document.querySelector('#solve-button');
const gridSize = 81;
const columnSize = 9;
const rowSize = 9;
const gridArray = Array.from(grid.children); //maybe we need to acces .value of children elelemtn

let gridValues = []; //1D array representing board
let sudoku = []; //2D array representing board

let correctIndexes = [];


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



/**
 * 
 * @returns a 2D array representing the solved sudoku
 */
function init() {
    let sudoku = [];

    createGrid();
    x = populateGrid(sudoku);
    solveSudoku(x, 0, 0);

    return x;
}


// helper functions:
/**
 * 
 * @param {*} gridValues 
 * @returns 
 */
// takes 1D array representing sudoku board, converts to 2D array needed for algo
function arrayto2D(gridValues) {
    let sudoku = [];
    while (gridValues.length)
        sudoku.push(gridValues.splice(0, 9));
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


function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        var smallgridrow = Math.floor((Math.floor(i / 9)) / 3);
        var smallgridcol = Math.floor((i % 9) / 3);
        let input = document.createElement('input');
        input.setAttribute('id', `input-${i}`);
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('max', '9');
        input.setAttribute('maxlength', '1');
        input.classList.add('sudoku-input');

        input.addEventListener('mouseover', (event) => {
            highlightSame(event);
        });

        input.addEventListener('mouseout', (event) => {
            removeCellStyles('cell-highlight');
        });

        input.addEventListener('change', () => { inputChange(); });

        document.getElementById(`grid-${smallgridcol}-${smallgridrow}`).appendChild(input);
    }

};



/**
 *  used in populateGrid()
 * @returns an array of random numbers from 1 to 9
 */
function getRandomNumbers() {
    let init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let out = [];
    while (init.length) {
        let i = Math.floor(Math.random() * init.length);
        out.push(init[i]);
        init.splice(i, 1);
    }
    return out;

}

/**
 *  used in init()
 *  puts in the diagonal of the 9x9 grid of 0s the 9 random numbers generated by getRandomNumbers()
 * @param {*} sudoku 
 * @returns 
 */
function populateGrid(sudoku) {
    let randomSeed = getRandomNumbers(); // array of random numbers

    sudoku = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    // insert the random numbers in the sudoku board
    for (let i = 0; i < 9; i++) {
        sudoku[i][i] = randomSeed[i];
    }
    return sudoku;

}

/**
 * insert the values in the webpage sudoku grid
 * @param {*} sudoku 2d array representing the sudoku board
 */
// display the grid values in html input
function displayGridValues(sudoku) {

    let n = 0; //this is associated to the input element ids

    for (let i = 0; i < columnSize; i++) {
        // inserte the value in the input
        for (let j = 0; j < rowSize; j++) {

            sudoku[i][j] == 0 ? document.getElementById(`input-${n++}`).value = "" : document.getElementById(`input-${n++}`).value = sudoku[i][j];
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
 * checks if a number is valid in a certain row
 * @param {*} sudoku 2d array representing the sudoku board
 * @param {*} row  what row we need to check in the 2d array
 * @param {*} number the number tha needs to be checked if it is already in the row
 * @returns 
 */
function checkRow(sudoku, row, number) {

    for (let i = 0; i < sudoku[row].length; i++)
        if (number === sudoku[row][i])
            return false;
    return true;

}

/**
 * checks if a number is valid in a certain column
 * @param {*} sudoku 2d array representing the sudoku board
 * @param {*} column what column we need to check in the 2d array
 * @param {*} number the number tha needs to be checked if it is already in the column
 * @returns 
 */
function checkColumn(sudoku, column, number) {
    for (let i = 0; i < 9; i++) {
        if (number === sudoku[i][column])
            return false;
    }
    return true;
}

/**
 * checks if a number is valid in a certain 3x3 square
 * @param {*} sudoku 2d array representing the sudoku board
 * @param {*} row the row of the 3x3 square
 * @param {*} column the column of the 3x3 square
 * @param {*} number the number tha needs to be checked if it is already in the 3x3 square
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
 * checks if a number is valid in a certain position
 * @param {*} sudoku 2d array representing the sudoku board
 * @param {*} row the row of the position 
 * @param {*} column the column of the position
 * @param {*} number the number tha needs to be checked if it is already in any of the 3x3 square, row or column
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
 * this is the main function that solves the sudoku 
 * it uses recursion to check all the possible numbers in a certain position
 * if the number is valid it moves to the next position
 * if the number is not valid it changes the number in the current position
 * if no number is valid it goes back to the previous position and changes the number there
 * 
 * @param {*} sudoku 2d array representing the sudoku board
 * @param {*} row the row of the position
 * @param {*} column the column of the position
 * @returns 
 */
function solveSudoku(sudoku, row, column) {
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

// global variable of part 3


let solvedsudoku = init(); // take the init() return value and store it in a variable
let CorrectSudokuForChecking = JSON.parse(JSON.stringify(solvedsudoku)); // Create copy of solvedsudoku array, not reference
let level = document.getElementById("level").innerHTML; //get the level of difficulty from the html
let resetSudoku;
let hintsReceived = 0;


function init2(){
    displayGridValues(removeNumbersFromBoard(solvedsudoku, level));
    makeNonEmptyCellsReadonly();

    return solvedsudoku

};




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


/**
 * @param {*} solvedsudoku 
 * @param {*} level 
 * @returns 
 */
// remove the numbers from the board
function removeNumbersFromBoard(solvedsudoku, level) {
    let removedSudoku = removeNumbers(solvedsudoku, level);
    return removedSudoku;
}


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
        var element = document.getElementById('input-' + id);
        element.readOnly = true;
        // element.disabled = true;
        element.classList.add("givennumber");
    }
}


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 4th part of the project
 * impruve cliants sudoku experience
 * updates the highscore based on the progress of the player
 * add a timer
 * add a button to show a hint
 * add a button to reset the game
 * add a button to check if the player has won
 * if clicking on a number all the cells with the same number are highlighted
 * if clicking on a cell all the cells in the same row, column and box are highlighted
 *
 * 
 * 
 * 
 * 
 * 
 * 
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


// viene chiamata in updateCorrectedIndexes((showHint(selfreferenc)) e (createGrid(init)))
function updateScore(correctIndexes, wrongIndexes) {
    var score = 0;
    correctIndexes.forEach(() => {
        score += 5;
    });
    wrongIndexes.forEach(() => {
        score -= 1;
    });
    score -= (hintsReceived * 10);
    // creat a variabol who many hints the player has used and then subtract that from the score

    document.getElementById('score').innerHTML = score;

}

// selfcalling function
// show a hint to the player
function showHint() {
    hintsReceived++;
    // highscores = highscores - 10;
    // get a random empty cell
    let emptyCells = getEmptyCells(solvedsudoku);
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    let x = randomCell;
    id = x[0] * 9 + x[1];

    var wrong = false;
    correctIndexes.forEach(i => {
        if (i == id) wrong = true;
    });

    if (wrong) {
        showHint();
    } else {
        // get the correct number for the cell
        let number = CorrectSudokuForChecking[x[0]][x[1]];
        // show the correct number in the cell
        document.getElementById('input-' + id).value = number;
        document.getElementById('input-' + id).classList.add('hint-cell');
        document.getElementById('input-' + id).disabled = true;
        console.log(id);
        inputChange();
    }
}

// viene chiamata in createGrid(init)
function highlightSame(event) {
    var num = event.target.value;
    var similarArray = [];
    for (let i = 0; i < gridSize; i++) {
        var element = document.getElementById(`input-${i}`);
        if (element.value == num) {
            similarArray.push(i);
        }
    }

    updateCellStyles(similarArray, 'cell-highlight');
}

// viene chiamata in showHint (che viene chiamata dentro di se) e createGrid(che viene chiamata nell init)
//returns an array of numbers currently on the board
function inputChange() {
    var playablespots = 0;
    var boardstate = [];
    for (let i = 0; i < gridSize; i++) {
        var celltag = document.getElementById(`input-${i}`)
        var cellvalue = celltag.value;
        if (!celltag.readOnly) {
            if (cellvalue) {
                boardstate.push(+cellvalue);
                playablespots++;
            }
            else {
                boardstate.push(0);
                playablespots++;
            }
        }
        else {
            boardstate.push(0);
        }

    }
    updateCorrectedIndexes(boardstate, playablespots);


}

// viene chiamata in inputChange ( (showHint()selfreferenc) e (createGrid(init))
function updateCorrectedIndexes(boardstate, playablespots) {
    correctIndexes = [];
    var wrongIndexes = [];

    var correctArray = arrayto1D(CorrectSudokuForChecking);
    for (let i = 0; i < gridSize; i++) {
        if (boardstate[i] != 0) {
            if (boardstate[i] == correctArray[i]) {
                correctIndexes.push(i);
            }
            else {
                wrongIndexes.push(i);
            }
        }
    }

    updateCellStyles(correctIndexes, 'correct-cell');
    updateCellStyles(wrongIndexes, 'wrong-cell');
    updateScore(correctIndexes, wrongIndexes);
    checkIfPlayerHasWon(correctIndexes, boardstate, playablespots);

}


// chiamata in createGrid( in init) e updateCellStyles(highlightSame (createGrid( in init)) e updateCorrectedIndexes((showHint()selfreferenc) e (createGrid(init)))
function removeCellStyles(className) {
    for (let i = 0; i < gridSize; i++) {
        document.getElementById(`input-${i}`).classList.remove(className);
    }
}

// highlightSame (createGrid( in init)) e updateCorrectedIndexes((showHint()selfreferenc) e (createGrid(init))
function updateCellStyles(indexArray, className) {

    removeCellStyles(className);

    indexArray.forEach(element => {
        document.getElementById(`input-${element}`).classList.add(className);
    });

}

//updateCorrectedIndexes((showHint()selfreferenc) e (createGrid(init))
function checkIfPlayerHasWon(correctIndexes, boardstate, playablespots) {
    if (correctIndexes.length == playablespots) {
        console.log('YouHaveWon');

        for (let i = 0; i < gridSize; i++) {
            document.getElementById(`input-${i}`).disabled = true;
        }

        document.getElementById('msg').innerHTML = "You Have Won, ";

        document.getElementById('score').innerHTML += " (You can start a new game!)";

    }
}


init2();

function startTimer() {
    let time = 0;
   //document.getElementById("startTimer").addEventListener( 'click', () =>{
        setInterval(timer, 1);

        function timer() {
            time++;
            console.log(time);
            document.getElementById("miliseconds").innerHTML = time; 
        }

    //})

}





// possible fearutes to add in the future if needed

// highlight all the cells in the same row, column and box as the cell the player has clicked on
// function highlightSameRowColumnBoxCells() {
//     // get the coordinates of the cell the player has clicked on
//     let x = addEventListener('click', function (event) {
//         let id = event.target.id;
//         let x = id.split('-');
//         x = x[1];
//         y = Math.floor(x / 9);
//         z = x % 9
//     });
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (i === y || j === z || (Math.floor(i / 3) === Math.floor(y / 3) && Math.floor(j / 3) === Math.floor(z / 3))) {
//                 document.getElementById('input-' + (i * 9 + j)).className = "highlightCoordinates";
//             }
//         }
//     }
// }