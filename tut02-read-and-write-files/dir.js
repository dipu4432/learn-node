const fs = require('fs');

if (!fs.existsSync('./new')) {
    // create a diractory
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    });
}


// delete directory
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    });
}