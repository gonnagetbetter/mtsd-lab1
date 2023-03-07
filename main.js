'use strict';

import {initInteractiveMode} from './interactiveMode.js';
import {initFileMode} from './filemode.js';

if (process.argv.length < 3) {
  initInteractiveMode();
} else {
  initFileMode();
}