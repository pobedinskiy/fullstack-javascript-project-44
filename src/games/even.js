import readlineSync from 'readline-sync';
import engine from '../index.js';
import getRandom from '../random.js';

const even = () => {
  const evenGameInfo = 'Answer "yes" if the number is even, otherwise answer "no"';
  const evenAim = () => {
    let ans = 'yes';
    const n = 101;
    const number = getRandom(n);
    if (number % 2 !== 0) {
      ans = 'no';
    }
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const list = [answer, ans];
    return list;
  };
  engine(evenGameInfo, evenAim);
};

export default even;
