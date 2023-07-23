import engine from '../index.js';
import getRandomInRange from '../random.js';

const progression = () => {
  const progressionGameInfo = 'What number is missing in the progression?';
  const progressionAim = () => {
    const progElemCount = getRandomInRange(5, 10);
    const startNumber = getRandomInRange();
    const interval = getRandomInRange(1, 10);
    const missingNumberIndex = getRandomInRange(1, progElemCount - 1);
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
    const question = `${progStr}`;
    const answer = `${result}`;
    return [question, answer];
  };
  engine(progressionGameInfo, progressionAim);
};

export default progression;
