import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange(0, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngine(rules, generateRound);
};
