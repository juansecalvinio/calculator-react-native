import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  divide,
  multiply,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const buildNumber = (value: string) => {
    if (number.includes('.') && value === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (value === '.') {
        setNumber(number + value);
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number);
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const buildLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }

    setNumber('0');
  };

  const cleanAll = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const positiveOrNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteNumber = () => {
    let negativeChar = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negativeChar = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negativeChar + tempNumber.slice(0, -1));
    }
  };

  const divideNumber = () => {
    buildLastNumber();
    lastOperation.current = Operators.divide;
  };

  const multiplyNumber = () => {
    buildLastNumber();
    lastOperation.current = Operators.multiply;
  };

  const substractNumber = () => {
    buildLastNumber();
    lastOperation.current = Operators.substract;
  };

  const addNumber = () => {
    buildLastNumber();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const firstNumber = Number(number);
    const secondNumber = Number(lastNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${firstNumber + secondNumber}`);
        break;
      case Operators.substract:
        setNumber(`${secondNumber - firstNumber}`);
        break;
      case Operators.multiply:
        setNumber(`${firstNumber * secondNumber}`);
        break;
      case Operators.divide:
        setNumber(`${secondNumber / firstNumber}`);
        break;
      default:
        break;
    }

    setLastNumber('0');
  };
  return {
    number,
    lastNumber,
    buildNumber,
    cleanAll,
    positiveOrNegative,
    deleteNumber,
    divideNumber,
    multiplyNumber,
    substractNumber,
    addNumber,
    calculate,
  };
};
