const validateArr = (arr) => {
  const res = [];

  arr.forEach((elem) => res.push(Number(elem).toFixed(1)));

  if (Number(arr[0]) === 0) {
    console.error('Error. \'a\' can\'t be 0');
    process.exit(1);
  }

  return res;
};

const solveFunc = (arr) => {
  const validArr = validateArr(arr);
  const [firstValue, secondValue, thirdValue] = validArr;

  console.log(`Equation is: (${firstValue}) x^2 + (${secondValue}) x + (${thirdValue}) = 0`);

  const discrValue = secondValue * secondValue - (4 * firstValue * thirdValue);

  if (discrValue > 0) {
    const rootOfDiscr = Math.sqrt(discrValue);
    const firstResult = (-secondValue - rootOfDiscr) / (2 * firstValue);
    const secondResult = (-secondValue + rootOfDiscr) / (2 * firstValue);
    const message = `x1 = ${firstResult.toFixed(1)}, x2 = ${secondResult.toFixed(1)}`;
    return message;
  }

  if (discrValue === 0) {
    console.log('There is 1 root');
    const result = -secondValue / (2 * firstValue);
    const message = `x = ${result.toFixed(1)}`;
    return message;
  }

  return 'There are 0 roots';
};

module.exports = solveFunc;
