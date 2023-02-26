const readlineSync = require('readline-sync');

const askUser = (text) => {
  let value = readlineSync.question(text);
  if (isNaN(Number(value)) === true || value === '') {
    console.error(`Error. Expected a valid real number, got '${value}' instead`);
    value = askUser(text);
  }
  return value;
};

const interStart = () => {
  const questions = ['a: ','b: ','c: '];
  const answers = questions.map(elem => askUser(elem));
  return answers;
};

module.exports = interStart;
