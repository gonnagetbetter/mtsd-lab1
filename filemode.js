'use strict';

import { readFileSync, existsSync } from 'fs';
import { quadraticEquationSolver } from './solver.js';

const initFileMode = () => {
  const pathToFile = process.argv[2];

  if (!existsSync(pathToFile)) {
    console.log('Error. File ${path} does not exist\n');
    process.exit(1);
  }

  const data = readFileSync(pathToFile, 'utf8');

  if (!/^-?\d+(.\d+)? -?\d+(.\d+)? -?\d+(.\d+)?\r?\n$/g.test(data)) {
    process.stdout.write('Error. Invalid file structure\n');
    process.exit(1);
  };

  const [a, b, c] = data.split(' ').map((value) => parseFloat(value));

  if (a === 0) {
    process.stdout.write('Error. Value a cannot be 0\n');
    process.exit(1);
  
};

export {initFileMode};
