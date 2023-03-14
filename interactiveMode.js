'use strict';

import {quadraticEquationSolver} from './solver.js';
import readline from 'readline';


const ask = (question) => {
  const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rlInterface.question(question, (answer) => {
      resolve(answer);
      rlInterface.close();
    });
  });
};


const questions = [
  'Enter value for a: ',
  'Enter value for b: ',
  'Enter value for c: ',
];

const isNumber = ( value ) => {
  let isValid = 0;
  if ( !isNaN(value) && ! /^0x[0-9a-fA-F]+$/.test(value) ) isValid = 1;
  return isValid;
};

const getArgs = async (qID = 0) => {
  const args = [];
  for ( const question of questions.slice(qID) ) {
    const answer = await ask(question);
    const value = parseFloat(answer);
    const qIndex = questions.indexOf(question);
    if (!isNumber(value)) {
      process.stdout.write(`Error. Expected a valid real number, got ${answer} instead\n`);
      process.exit(0);
    } else if (qIndex === 0 && value === 0) {
      process.stdout.write('Error. Value a cannot be 0\n');
      process.exit(0);
    }
    args.push(value);
  }
  return args;
};

const initInteractiveMode = async () => {
  const args = await getArgs();
  const roots = quadraticEquationSolver(...args);
  console.log(roots);
};

export {initInteractiveMode};
