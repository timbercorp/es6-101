const chalk = require('chalk');
const request = require('superagent');

function API () {
  this.uri = 'https://jsonplaceholder.typicode.com';
}

API.prototype.getKO = function (resource) {
  return new Promise(function (resolve, reject) {
		request.get(this.uri + resource)
      .then(function (response) {
        console.log(chalk.cyan(response.body.title));
      })
      .catch(function (error) {
        console.log(chalk.red(error.message));
      });
  });
};

API.prototype.getOK = function (resource) {
  return new Promise((resolve, reject) => {
		request.get(this.uri + resource)
      .then(response => {
        console.log(chalk.cyan(response.body.title));
      })
      .catch(error => {
        console.log(chalk.red(error.message));
      });
  });
};

var api = new API();

api.getKO('/posts/1').then(data => console.log(data));
api.getOK('/posts/1').then(data => console.log(data));
