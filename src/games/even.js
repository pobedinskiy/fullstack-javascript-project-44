import engine from '../index.js';
import getRandomInRange from '../random.js';

const even = () => {
  const evenGameInfo = 'Answer "yes" if the number is even, otherwise answer "no"';
  const evenAim = () => {
    let ans = 'yes';
    const number = getRandomInRange();
    if (number % 2 !== 0) {
      ans = 'no';
    }
    const question = `${number}`;
    const answer = ans;
    return [question, answer];
  };
  engine(evenGameInfo, evenAim);
};

export default even;
