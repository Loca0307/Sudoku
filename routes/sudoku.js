const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/sudoku/new_game", function(req,res) {
    //TODO: Login verification
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );
    
    res.render("sudoku");
});