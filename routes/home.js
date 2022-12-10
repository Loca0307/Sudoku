const express = require('express');
const router = express.Router();
module.exports = router;

router.get("/", function(req,res) {
    res.redirect("/index.html");
});

router.get("/index.html", function(req, res) {
    console.log(req.query);
    res.render("index");
});