import getRandomInRange from '../getRandomInRange.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculation(num1, num2, operator));
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
