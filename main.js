const solveFunc = require('./solve');
const interStart = require('./interactive');
const nonInterStart = require('./non-interactive');

let result;
if (process.argv[2] !== undefined) {
  result = nonInterStart();
} else {
  result = interStart();
}
console.log(solveFunc(result));
