'use strict';

import { readFileSync, existsSync } from 'fs';
import { quadraticEquationSolver } from './solver.js';

const initFileMode = () => {
  const pathToFile = process.argv[2];

  if (!existsSync(pathToFile)) {
    console.log('Error. File ${path} does not exist\n');
    process.exit(1);
  }

  
};

export {initFileMode};
