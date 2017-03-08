const chalk = require('chalk');

// Import an object from an external file.

const Figure = require('./resources-0');
const { shape } = require('./resources-1');

// Class rectangle extends from imported class Figure.

class Rectangle extends Figure {
  constructor (shape) {
    super(shape);
  }
}

let rectangle = new Rectangle(shape);

console.log(chalk.magenta(rectangle.area()));

// Object properties and object assign.

let name = 'John';
let surname = 'Doe';

let credentials = { name, surname };

console.log(chalk.white(JSON.stringify(Object.assign({}, credentials, { age: 32 }))));

// Default parameters value.

const add = (a = 0, b = 0) => {
  return a + b;
}

console.log(chalk.grey(add()));
console.log(chalk.grey(add(4)));
console.log(chalk.grey(add(2, 3)));

// Destructuring assignment.

let options = {
  red: 182,
  green: 23,
  blue: 124
};

let { red, blue } = options;

console.log(chalk.white(red));
console.log(chalk.white(blue));
