const validateArr = (arr) => {
  const res = [];

  arr.forEach((elem) => res.push(Number(elem).toFixed(2)));

  if (Number(arr[0]) === 0) {
    console.error('Error. \'a\' can\'t be 0');
    process.exit(1);
  }

  return res;
};

const solveFunc = (arr) => {
  const validArr = validateArr(arr);
  const [firstValue, seccondValue, thirdValue] = validArr;

  console.log(`Equation is: (${firstValue}) x^2 + (${seccondValue}) x + (${thirdValue}) = 0`);

  const discrValue = seccondValue * seccondValue - (4 * firstValue * thirdValue);

  if (discrValue > 0) {
    const rootOfDiscr = Math.sqrt(discrValue);
    const firstResult = (-seccondValue - rootOfDiscr) / (2 * firstValue);
    const seccondResult = (-seccondValue + rootOfDiscr) / (2 * firstValue);
    const message = `x1 = ${firstResult.toFixed(2)}, x2 = ${seccondResult.toFixed(2)}`;
    return message;
  }

  if (discrValue === 0) {
    console.log('There is 1 root');
    const result = -seccondValue / (2 * firstValue);
    const message = `x = ${result.toFixed(2)}`;
    return message;
  }

  return 'There are 0 roots';
};

module.exports = solveFunc;
