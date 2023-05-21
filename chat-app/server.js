const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('User is connecting.');

    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg );
        io.emit('chat message', msg );
    })
})

server.listen(PORT, () => {
    console.log('hey')
});

// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("ユーザーが接続しました");
//   socket.on("chat message", (msg) => {
//     // console.log("massage:" + msg);
//     io.emit("chat message", msg);
//   });
// });

// server.listen(process.env.PORT || 3000, () => {
//   console.log("listenin on 3000");
// });