import fs from 'fs';


fs.writeFile('file.txt', 'Hello world', (err) => {
    if(err) throw err;
    console.log('File created!');
});


fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(data);
});


export function add(a, b) {
    return a + b;
};
// module.exports = add; //commonjs


const buff = Buffer.from('Hello Developers!');
console.log(buff); //<Buffer 48 65 6c 6c 6f 20 44 65 76 65 6c 6f 70 65 72 73 21>


const buf = Buffer.alloc(8);
const bytesWritten = buf.write('Hello');
console.log('Byte written:', bytesWritten); //Byte written: 5
console.log('Buffer', buf); //Buffer <Buffer 48 65 6c 6c 6f 00 00 00>


let data = 'Hellooooo';
const bufferedVersion = Buffer.from(data);
console.log(bufferedVersion); //<Buffer 48 65 6c 6c 6f 6f 6f 6f 6f>

fs.writeFile('file.txt', bufferedVersion, (err) => {
    if(err) {
        console.log(err);
    }
    console.log('successfully write');
})

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(data); //Hellooooo
})