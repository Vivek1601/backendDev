const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.blue("Hello"));

// console.log(chalk.blue.underline.inverse("Hello"));

const res = validator.isEmail('techincalthappa.com');
// const res = validator.isEmail('techincal.com');
// console.log(res);

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));