const chalk = require('chalk');
const fetch = require('node-fetch');

const options = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
};

fetch('https://jsonplaceholder.typicode.com/posts/1', options)
  .then(raw => raw.json())
  .then(response => {
    console.log(chalk.cyan('User Id:'), chalk.yellow(response.userId));
    console.log(chalk.cyan('Id:'), chalk.yellow(response.id));
    console.log(chalk.cyan('Title:'), chalk.yellow(response.title));
    console.log(chalk.cyan('Body:'), chalk.yellow(response.body));
  })
  .catch(error => {
    console.log(chalk.red(error.message));
  });
