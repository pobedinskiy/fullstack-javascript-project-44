import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const calculation = (progElemCount, startNumber, interval, missingNumberIndex) => {
  const array = [];
  array[0] = startNumber;
  for (let i = 0; i < progElemCount; i += 1) {
    if (i !== 0) {
      array[i] = array[i - 1] + interval;
    }
  }
  const result = array[missingNumberIndex];
  array[missingNumberIndex] = '..';
  const progStr = array.join(' ');
  return [progStr, result];
};

const generateRound = () => {
  const progElemCount = getRandomInRange(5, 10);
  const startNumber = getRandomInRange(0, 100);
  const interval = getRandomInRange(1, 10);
  const missingNumberIndex = getRandomInRange(1, progElemCount - 1);
  const [question, answer] = calculation(progElemCount, startNumber, interval, missingNumberIndex);
  return [question, String(answer)];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
