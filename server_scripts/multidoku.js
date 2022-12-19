const gridSize = 81;
const columnSize = 9;
const rowSize = 9;

function createGame(level) {
    let solvedsudoku = init();
    let CorrectSudokuForChecking = arrayto1D(JSON.parse(JSON.stringify(solvedsudoku)));
    let board = arrayto1D(removeNumbersFromBoard(solvedsudoku, level));
    return {board , CorrectSudokuForChecking};
}

function init() {
    let sudoku = [];
    x = populateGrid(sudoku);
    solveSudoku(x, 0, 0);
    return x;
}

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

function checkRow(sudoku, row, number) {

    for (let i = 0; i < sudoku[row].length; i++)
        if (number === sudoku[row][i])
            return false;
    return true;

}

function checkColumn(sudoku, column, number) {
    for (let i = 0; i < 9; i++) {
        if (number === sudoku[i][column])
            return false;
    }
    return true;
}

function checkSquare(sudoku, row, column, number) {

    let indexR = row - row % 3;
    let indexC = column - column % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (number == sudoku[i + indexR][j + indexC])
                return false;


    return true;
}

function checkNumber(sudoku, row, column, number) {

    if (checkRow(sudoku, row, number)
        && checkColumn(sudoku, column, number)
        && checkSquare(sudoku, row, column, number)) {
        return true;
    }
    return false;
}

function solveSudoku(sudoku, row, column) {
    let N = 9;

    if (row == N - 1 && column == N)
        return true;

    if (column == N) {
        row++;
        column = 0;
    }

    if (sudoku[row][column] != 0)
        return solveSudoku(sudoku, row, column + 1);

    for (let num = 1; num <= 9; num++) {

        if (checkNumber(sudoku, row, column, num)) {

            sudoku[row][column] = num;

            if (solveSudoku(sudoku, row, column + 1))
                return true;
        }

        sudoku[row][column] = 0;
    }
    return false;
}

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

function removeNumbersFromBoard(solvedsudoku, level) {
    let removedSudoku = removeNumbers(solvedsudoku, level);
    return removedSudoku;
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

module.exports = {
    createGame
}