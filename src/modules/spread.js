const chalk = require('chalk');

let myArray = [0, 1, 2, 3, 4, 5];

let myObject = {
  a: 0,
  b: 1,
  c: 2
}

myNewArray = myArray;
myOtherNewArray = [...myArray];

myNewObject = myObject;
myOtherNewObject = Object.assign({}, myObject);

console.log(chalk.yellow('Is "myNewArray" the same as "myArray"?'), chalk.red(myNewArray === myArray));
console.log(chalk.yellow('Is "myOtherNewArray" the same as "myArray"?'), chalk.cyan(myOtherNewArray === myArray));

console.log(chalk.yellow('Is "myNewObject" the same as "myObject"?'), chalk.red(myNewObject === myObject));
console.log(chalk.yellow('Is "myOtherNewObject" the same as "myObject"?'), chalk.cyan(myOtherNewObject === myObject));
