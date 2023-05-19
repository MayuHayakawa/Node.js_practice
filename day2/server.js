// const http = require('http'); //commonjs
import http from 'http' //es6
// const add = require('./index.js'); //commonjs
import add from './index' //es6

const PORT = 3001;

const server = http.createServer();

server.on('request', function(req, res) {
    if(req.url === '/') {
        res.statusCode = 200;
        res.end('Hello');
    }else if(req.url === '/hello') {
        res.statusCode = 200;
        res.end('<h1>Hello World</h1>')
    }else if(req.url === '/categories') {
        res.statusCode = 200;
        // res.end('<ul><li>item1</li><li>item2</li></ul>')
        let arr = [{id: 1, name: 'item1'}, {id: 2, name: 'item2'}];
        res.end(JSON.stringify(arr));
    }
});

server.on('listening', function() {
    console.log(`Server is running on port ${PORT}.`)
})

server.listen(PORT);