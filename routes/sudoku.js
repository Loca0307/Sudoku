const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/sudoku/new_game", function(req,res) {
    res.render("sudoku");
});

// router.get("/index", function(req, res) {
//     console.log(req.query);
//     res.render("index", {high_scores: high_scores.data});
// });