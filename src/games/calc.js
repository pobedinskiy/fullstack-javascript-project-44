import engine from '../index.js';
import getRandomInRange from '../random.js';

const calc = () => {
  const calcGameInfo = 'What is the result of the expression?';
  const calcAim = () => {
    const signs = ['-', '+', '*'];
    const n2 = signs.length - 1;
    const a = getRandomInRange();
    const b = getRandomInRange();
    const i = getRandomInRange(0, n2);
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
    const question = `${a} ${sign} ${b}`;
    const answer = `${result}`;
    return [question, answer];
  };
  engine(calcGameInfo, calcAim);
};

export default calc;
