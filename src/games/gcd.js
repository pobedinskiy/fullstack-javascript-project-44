import readlineSync from 'readline-sync';
import engine from '../index.js';
import getRandom from '../random.js';

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
    const n = 101;
    const a = getRandom(n);
    const b = getRandom(n);
    const result = nod(a, b);
    console.log(`Question: ${a} ${b}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const list = [answer, result];
    return list;
  };
  engine(gcdGameInfo, gcdAim);
};

export default gcd;
