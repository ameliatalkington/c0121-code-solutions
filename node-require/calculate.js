const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const userX = Number(process.argv[2]);
const userY = Number(process.argv[4]);
const operator = process.argv[3].toLowerCase();

if (operator === 'plus') {
  console.log('Result', add.add(userX, userY));
}
if (operator === 'minus') {
  console.log('Result', subtract.subtract(userX, userY));
}
if (operator === 'times') {
  console.log('Result', multiply.multiply(userX, userY));
}
if (operator === 'divide') {
  console.log('Result', divide.divide(userX, userY));
}
