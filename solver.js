'use strict';

const getDiscriminant = (a, b, c) => b * b - 4 * a * c;

const getRoots = (a, b, discriminant) => {
  const sqrt = Math.sqrt(discriminant);
  const roots = [( - b + sqrt) / ( 2 * a ), (( - b - sqrt) / ( 2 * a ) )];
  return roots;
};

const solver = (a, b, c) => {
  const discriminant = getDiscriminant(a, b, c);
  if (discriminant < 0) {
    return 'There are no roots';
  } else if ( discriminant === 0) {
    console.log('Discriminant = 0. There are one root!');
    const x1 = -b / 2 *a;
    return `x1 = ${x1}`
  }
  console.log('There are two roots!');
  const [x1, x2] = getRoots(a, b, discriminant);
  return `x1 = ${x1}\nx2 = ${x2}`;
}

const quadraticEquationSolver = (a, b, c ) => {
  console.log(`Equation is: ${a} x^2 + (${b}) x + (${c}) = 0`);
  return solver(a, b, c);
};

export {quadraticEquationSolver};
