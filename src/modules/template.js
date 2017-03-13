const chalk = require('chalk');

const profile = {
  name: 'John',
  surname: 'Doe',
  age: 34
}

console.log(chalk.cyan(`Happy birthday ${ profile.name } ${ profile.surname } for turning ${ profile.age }!`));

console.log(chalk.red(`
Here is
a multiline
text.
`));

console.log(chalk.yellow(`And here is
another multiline
text without
the initial and end "\\n".`));
