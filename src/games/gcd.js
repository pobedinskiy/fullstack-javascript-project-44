import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const calculation = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return calculation(b, c);
  }
  return a;
};

const generateRound = () => {
  const a = getRandomInRange(0, 100);
  const b = getRandomInRange(0, 100);
  const answer = calculation(a, b);
  const question = `${a} ${b}`;
  return [question, String(answer)];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
