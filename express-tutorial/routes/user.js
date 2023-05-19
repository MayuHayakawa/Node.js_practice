const express = require("express");
const router = express.Router();

// router.use(mylogger); //to use middleware

router.get("/", mylogger, (req, res) => {
    res.send('user page');
});

router.get("/info", (req,res) => {
    res.send('user information');
});

router.get("/:id", (req,res) => {
    res.send(`recieve information of ${req.params.id}.`);
})

//middleware
function mylogger(req, res, next) {
    console.log(req.originalUrl);
    next(); //don't stop sycle
}

module.exports = router;