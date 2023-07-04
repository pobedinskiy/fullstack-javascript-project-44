import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const getRandom = (n) => Math.floor(Math.random() * n);

const getAnswer = () => readlineSync.question('Your answer: ');

const failureMessage = (a, b, name) => {
  console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
  console.log(`Let's try again, ${name}!`);
};

const successMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const correctMessage = () => console.log('Correct!');

export { welcomeMessage, getRandom, getAnswer };
export { failureMessage, successMessage, correctMessage };
