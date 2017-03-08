const chalk = require('chalk');

const gol = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.ceil(Math.random() * 1000) % 2 === 0) {
      resolve(chalk.cyan("Gooooooool!"));
    } else {
      reject(chalk.red("You missed :("));
    }
  }, Math.random() * 5000);
});

const chut = async () => {
  try {
    let result = await gol;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

chut();

/* const chut = async () => {
  let result = await gol;
  console.log(result);
}

chut().catch(error => console.log(error)); */
