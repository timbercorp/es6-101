const chalk = require('chalk');

// Const.

const thisIsAConstant = '...and will not change';

try {
  thisIsAConstant = 'I don\'t care';
} catch (error) {
  console.log(chalk.red(error.message));
}

// Let.

var result = 0;

for (let iterator = 0; iterator < 10; iterator++) {
  result += iterator;
}

console.log(chalk.blue(result));

try {
  console.log(chalk.cyan(iterator));
} catch (error) {
  console.log(chalk.red(error.message));
}
