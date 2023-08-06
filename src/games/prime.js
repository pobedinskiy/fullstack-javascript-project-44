import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const calculation = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const number = getRandomInRange(0, 100);
  const question = `${number}`;
  const answer = calculation(number);
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runEngine(rules, generateRound);
};
