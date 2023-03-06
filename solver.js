'use strict';

const discriminant = (a, b, c) => b * b - 4 * a * c;

const getRoots = (a, b, discriminant) => {
  const sqrt = Math.sqrt(discriminant);
  const roots = [( - b + sqrt) / ( 2 * a ),(( - b - sqrt) / ( 2 * a ) )]
  return roots;
};
