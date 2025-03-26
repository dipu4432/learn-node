// nodemon

/* nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. */

// For running the file, use the command: npx nodemon 
// We create a package.json file, use the command: npm init -y
// We create a dependency using the command: npm install date-fns or something
// We create a devdependency using the command: npm install nodemon -D
// Install production dependencies which allowed to generate ids using the command: npm install uuid

// console.log('testing!');

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'))

console.log('I\'m learning npm');
console.log(uuid());
console.log();

// Install any specific version of a package using the command: npm install date-fns@4.0.0

// check any update using command: npm update

// If we want to uninstall any package, use the command: npm uninstall nodemon -D or npm rm date-fns

// dependencies module is known as production dependencies whereas devdependencies module is known as development dependencies