const readlineSync = require('readline-sync');

const questions = {
  a: 'a:',
  b: 'b:',
  c: 'c:',
};

const question = (text) => readlineSync.question(text);

const interStart = () => {
  const firstValue = question(questions.a);
  const seccondValue = question(questions.b);
  const thirdValue = question(questions.c);

  const arr = [firstValue, seccondValue, thirdValue];

  return arr;
};

module.exports = interStart;
