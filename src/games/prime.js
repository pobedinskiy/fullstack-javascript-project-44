import engine from '../index.js';
import getRandomInRange from '../random.js';

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
    const number = getRandomInRange();
    const result = isPrime(number);
    const question = `${number}`;
    const answer = `${result}`;
    return [question, answer];
  };
  engine(primeGameInfo, primeAim);
};

export default prime;
