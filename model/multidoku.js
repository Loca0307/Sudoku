const fs = require('fs-extra');
const path = require('path');

const gridSize = 81;
const columnSize = 9;
const rowSize = 9;
let gridValues = []; //1D array representing board
let sudoku = []; //2D array representing board




// function createGrid() {
//     for (let i = 0; i < gridSize; i++) {
//       const input = document.createElement('input');
//       input.setAttribute('id', `input-${i}`);
//       input.setAttribute('type', 'number');
//       input.setAttribute('min', '1');
//       input.setAttribute('max', '9');
//       input.setAttribute('maxlength', '1');
//       grid.appendChild(input);
//     }
    
// };

function createGrid() {
    var htmlout = "";
    for (let i = 0; i < gridSize; i++) {
    htmlout += "<input ";
    htmlout += " id='input-'" + i + " ";
    htmlout += " type='number' ";
    htmlout += " min='1' ";
    htmlout += " max='9' ";
    htmlout += " maxlength='1' ";
    htmlout += ">";

    
    return htmlout;
    // grid.appendChild(input);

    }

};




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
    gridValues,
    createGrid,
    sudoku
}