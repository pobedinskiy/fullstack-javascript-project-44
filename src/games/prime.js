import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const generateRound = () => {
  const number = getRandomInRange(0, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runEngine(rules, generateRound);
};
