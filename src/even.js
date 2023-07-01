import readlineSync from 'readline-sync';

const welcomeFunc = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

const answerFunc = () => {
  const name = welcomeFunc();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  while (i < 3) {
    let even = 'yes';
    const number = Math.floor(Math.random() * 101);
    if (number % 2 !== 0) {
      even = 'no';
    }
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === even) {
      console.log('Correct!');
      if (i < 2) {
        i += 1;
      } else {
        console.log(`Congratulations, ${name}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default answerFunc;
