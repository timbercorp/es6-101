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

// Those are the different ways to use an arrow function (consodering there is
// by default a return if there is only one line):

// No params:

let myArrow1 = () => console.log('Just a message.');

// One param:

let myArrow2 = message => console.log(message);

// Two params:

let myArrow3 = (title, message) => console.log(title, message);

// More than one statement:

let myArrow4 = (title, message) => {
  console.log(title);
  console.log(message);
};

// Returning an object:

let myArrow5 = (title, message) => ({ title, message });

myArrow1();
myArrow2('Another message.');
myArrow3('Message:', 'Message with title.');
myArrow4('Message:', 'Message with title.');
console.log(myArrow5('Message:', 'Message with title.'));
