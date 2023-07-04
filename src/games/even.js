import * as index from '../index.js';

const even = () => {
  const name = index.welcomeMessage();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  const n = 101;
  while (i < 3) {
    let ans = 'yes';
    const number = index.getRandom(n);
    if (number % 2 !== 0) {
      ans = 'no';
    }
    console.log(`Question: ${number}`);
    const answer = index.getAnswer();
    if (answer === ans) {
      index.correctMessage();
      if (i < 2) {
        i += 1;
      } else {
        index.successMessage(name);
        break;
      }
    } else {
      index.failureMessage(answer, ans, name);
      break;
    }
  }
};

export default even;
