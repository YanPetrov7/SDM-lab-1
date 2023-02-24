const readlineSync = require('readline-sync');

const result = [];

const firstVariable = readlineSync.question('Enter variable (a):');
const seccondVariable = readlineSync.question('Enter variable (b):');
const thirdVariable = readlineSync.question('Enter variable (c):');

const arr = [firstVariable, seccondVariable, thirdVariable];

for (const elem of arr) {
  if (elem !== '') {
    result.push(Number(elem));
  }
}

module.exports = result;