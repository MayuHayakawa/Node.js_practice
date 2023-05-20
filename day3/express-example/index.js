import express from 'express';

const app = express() //initialize express server

function checkAuth (req, res, next) {
    if(req.headers.authorization) {
        next()
    } else {
        res.status(401).send('Authentication failed!');
    }
}

function checkEmail (req, res, next) {
    console.log('checking email');
    let email = 'asdfghjkl';
    if(email) {
        next()
    } else {
        res.status(401).send('Email is not valid!');
    }
}

app.use((req, res, next) => {
    console.log('Middleware is running on every requests.');
    if(req.headers.authorization) {
        next();
    } else {
        res.status(401).send('Authentication failed!');
    }
})

app.get('/health', checkAuth, checkEmail, (req,res) => {
    console.log(req.userName);
    res.status(200).json({
        message: 'Server is UP',
        author: 'admin'
    })
})

