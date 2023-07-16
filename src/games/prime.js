import readlineSync from 'readline-sync';
import engine from '../index.js';
import getRandom from '../random.js';

const prime = () => {
  const primeGameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const primeAim = () => {
    const isPrime = (number) => {
      if (number > 1) {
        for (let i = 2; i < number; i += 1) {
          if (number % i === 0) {
            return 'no';
          }
        }
        return 'yes';
      }
      return 'no';
    };
    const number = getRandom(101);
    const result = isPrime(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const list = [answer, result];
    return list;
  };
  engine(primeGameInfo, primeAim);
};

export default prime;
