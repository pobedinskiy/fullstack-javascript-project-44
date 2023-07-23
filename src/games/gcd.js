import engine from '../index.js';
import getRandomInRange from '../random.js';

const nod = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return nod(b, c);
  }
  return a;
};

const gcd = () => {
  const gcdGameInfo = 'Find the greatest common divisor of given numbers.';
  const gcdAim = () => {
    const a = getRandomInRange();
    const b = getRandomInRange();
    const result = nod(a, b);
    const question = `${a} ${b}`;
    const answer = `${result}`;
    return [question, answer];
  };
  engine(gcdGameInfo, gcdAim);
};

export default gcd;
