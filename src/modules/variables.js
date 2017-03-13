const chalk = require('chalk');

// Const.

const thisIsAConstant = '...and will not change';

try {
  thisIsAConstant = 'I don\'t care';
} catch (error) {
  console.log(chalk.red(error.message));
}

// When you declare an object as constant, you make its reference constant, so
// you can modify its contents but not its reference.

try {
  const a = {};
  const b = {};

  a.name = 'John';

  console.log(chalk.yellow('Name:'), chalk.cyan(a.name));

  a.name = 'Jane';

  console.log(chalk.yellow('Name:'), chalk.cyan(a.name));

  a = b;
} catch (error) {
  console.log(chalk.red(error.message));
}

// Let.

var result = 0;

for (var iterator = 0; iterator < 10; iterator++) {
  result += iterator;
}

console.log(chalk.blue(result));

try {
  console.log(chalk.cyan(iterator));
} catch (error) {
  console.log(chalk.red(error.message));
}
