import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const getGcd = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return getGcd(b, c);
  }
  return a;
};

const generateRound = () => {
  const a = getRandomInRange(0, 100);
  const b = getRandomInRange(0, 100);
  const answer = String(getGcd(a, b));
  const question = `${a} ${b}`;
  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
