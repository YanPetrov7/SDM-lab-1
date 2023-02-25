const readlineSync = require('readline-sync');

const questions = {
  a: 'a:',
  b: 'b:',
  c: 'c:',
};

const question = (text) => {
  let value = readlineSync.question(text);
  if (isNaN(Number(value)) === true || value === '') {
    console.error(`Error. Expected a valid real number, got '${value}' instead`);
    value = question(text);
  }
  return value;
};

const interStart = () => {
  const firstValue = question(questions.a);
  const secondValue = question(questions.b);
  const thirdValue = question(questions.c);

  const arr = [firstValue, secondValue, thirdValue];

  return arr;
};

module.exports = interStart;
