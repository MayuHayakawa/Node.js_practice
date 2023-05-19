const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

// app.use(mylogger); //to use middleware
// app.use(express.static('public')); //to use static file
app.set('view engine', 'ejs'); //to use ejs

app.get("/", (req,res) => {
    // console.log('Hello');
    // res.send('<h1>yahoo</h1>');
    // res.sendStatus(400);
    // res.status(500).send('error!');
    // res.status(500).json({ msg: 'error!'});
    res.render('index', { text: 'Nodejs and Express' }); //render the specific file inside views folder
})

//routing
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);

//middleware
// function mylogger(req, res, next) {
//     console.log(req.originalUrl);
//     next(); //don't stop sycle
// }

app.listen(PORT, () => console.log('server is working'))