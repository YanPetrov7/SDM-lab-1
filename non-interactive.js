const fs = require('fs');

const limit = 3;
const sepatator = ' ';

const nonInterStart = () => {
  const path = process.argv[2];
  const text = fs.readFileSync(path, 'utf8');
  const arr = text.split(sepatator, limit);

  return arr;
};

module.exports = nonInterStart;
