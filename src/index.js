import readlineSync from 'readline-sync';

const engine = (gameInfo, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameInfo);
  let i = 0;
  while (i < 3) {
    const gameResult = gameFunc();
    const userAnswer = gameResult[0];
    const requiredAnswer = gameResult[1];
    if (userAnswer === requiredAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${requiredAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
