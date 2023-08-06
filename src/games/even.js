import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const calculation = (number) => {
  let ans = 'yes';
  if (number % 2 !== 0) {
    ans = 'no';
  }
  return ans;
};

const generateRound = () => {
  const number = getRandomInRange(0, 100);
  const question = `${number}`;
  const answer = calculation(number);
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngine(rules, generateRound);
};
