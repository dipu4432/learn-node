/* Read File */

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

/*
fs.readFile('./Files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data.toString());
    console.log(data);
})
*/

console.log('Hello...');

// write file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write complete');

    // modify file
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
        if (err) throw err;
        console.log('Append complete');

        // rename file
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete');
        })
    })
})

/*
// update file
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text', (err) => {
    if (err) throw err;
    console.log('Append complete');
})
*/

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1); // exit application
})