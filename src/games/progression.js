import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInRange(0, 100);
  const step = getRandomInRange(1, 10);
  const length = getRandomInRange(5, 10);
  const progArr = generateProgression(start, step, length);
  const missingNumberIndex = getRandomInRange(0, length - 1);
  const answer = String(progArr[missingNumberIndex]);
  progArr[missingNumberIndex] = '..';
  const question = progArr.join(' ');
  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
