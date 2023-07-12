import readlineSync from 'readline-sync';
import engine from '../index.js';
import getRandom from '../random.js';

const progression = () => {
  const progressionGameInfo = 'What number is missing in the progression?';
  const progressionAim = () => {
    const progElemCount = getRandom(6) + 5;
    const startNumber = getRandom(101);
    const interval = getRandom(11) + 1;
    const missingNumberIndex = getRandom(progElemCount - 1) + 1;
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
    console.log(`Question: ${progStr}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const list = [answer, result];
    return list;
  };
  engine(progressionGameInfo, progressionAim);
};

export default progression;
