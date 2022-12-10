const fs = require('fs-extra');
const path = require('path');

const gridSize = 81;
const columnSize = 9;
const rowSize = 9;








function newGame(){
    //TODO Set up the board and start a new game
    //return the board
}



function arrayto2D() {
    while (gridValues.length-1)
        sudoku.push(gridValues.splice(0,9));
    return sudoku; 
}





module.exports = {
    gridSize,
    columnSize,
    rowSize,
    newGame,
    arrayto2D,
    
}