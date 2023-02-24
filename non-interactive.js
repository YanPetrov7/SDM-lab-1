const fs = require('fs');

const result = [];

const text = fs.readFileSync('./numbers.txt', 'utf8');
const arr = text.split('\n');

for (const elem of arr) {
  result.push(Number(elem));
}

module.exports = result;