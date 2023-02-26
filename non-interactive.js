const { readFileSync, existsSync } = require('fs');

const limit = 3;
const sepatator = ' ';

const nonInterStart = () => {
  const path = process.argv[2];
  if (!existsSync(path)) {
    console.log(`file ${path} does not exist`);
    process.exit(1);
  }
  const text = readFileSync(path, 'utf8');
  const arr = text.split(sepatator, limit);

  arr.forEach((elem) => {
    if (isNaN(Number(elem)) === true || elem === '') {
      console.error('invalid file format');
      process.exit(1);
    }
  });

  return arr;
};

module.exports = nonInterStart;
