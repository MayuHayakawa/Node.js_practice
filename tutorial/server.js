const http = require('http'); //same as import { createServer } from 'http';
const PORT = 8000;
const html = require('fs').readFileSync('./index.html');

//create web server
const server = http.createServer((req, res) => {
    //set process when get response from browser
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log('server running');
});