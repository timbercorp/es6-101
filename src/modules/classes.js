const chalk = require('chalk');

// JavaScript.

const MyOldClass = function () {
  this.property = 'My Property';
}

MyOldClass.prototype.method = function () {
  console.log(chalk.red(this.property));
};

let myOldClass = new MyOldClass();

myOldClass.method();

// ECMAScript.

class MyNewClass {

  static staticMethod () {
    console.log(chalk.yellow('I\'m an static method.'));
  }

  constructor () {
    this.property = 'My Property';
  }

  method () {
    console.log(chalk.cyan(this.property));
  }
}

const myNewClass = new MyNewClass();

myNewClass.method();
MyNewClass.staticMethod();
