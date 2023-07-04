import * as index from '../index.js';

const calc = () => {
  const name = index.welcomeMessage();
  let j = 0;
  const signs = ['-', '+', '*'];
  const n1 = 101;
  const n2 = signs.length;
  while (j < 3) {
    const a = index.getRandom(n1);
    const b = index.getRandom(n1);
    const i = index.getRandom(n2);
    const sign = signs[i];
    let result = 0;
    switch (sign) {
      case '-':
        result = a - b;
        break;
      case '+':
        result = a + b;
        break;
      case '*':
        result = a * b;
        break;
      default:
        break;
    }
    console.log(`Question: ${a} ${sign} ${b}`);
    const answer = index.getAnswer();
    if (Number(answer) === result) {
      console.log('Correct!');
      if (j < 2) {
        j += 1;
      } else {
        index.successMessage(name);
        break;
      }
    } else {
      index.failureMessage(answer, result, name);
      break;
    }
  }
};

export default calc;
