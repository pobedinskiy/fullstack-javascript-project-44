import readlineSync from 'readline-sync';
import engine from '../index.js';
import getRandom from '../random.js';

const calc = () => {
  const calcGameInfo = 'What is the result of the expression?';
  const calcAim = () => {
    const signs = ['-', '+', '*'];
    const n1 = 101;
    const n2 = signs.length;
    const a = getRandom(n1);
    const b = getRandom(n1);
    const i = getRandom(n2);
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
    const answer = Number(readlineSync.question('Your answer: '));
    const list = [answer, result];
    return list;
  };
  engine(calcGameInfo, calcAim);
};

export default calc;
