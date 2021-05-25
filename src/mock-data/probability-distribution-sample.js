// adapted from https://github.com/transitive-bullshit/random/blob/master/src/distributions/normal.ts
// because was not working with webpack 5
const normal = (mu, sigma) => {
  let x;
  let y;
  let r;

  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    r = x * x + y * y;
  } while (!r || r > 1);

  return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
};

export const getGaussianSample = (mu, sigma, n, min = null, max = null) => {
  const values = Array.from({ length: n }, () => normal(mu, sigma));
  // If we want to bound the sampling
  if (min || max) {
    return values.map((number) => {
      if (min !== null && number < min) {
        return min;
      }
      if (max !== null && number > max) {
        return max;
      }
      return number;
    });
  }
  return values;
};

export const getUniformSample = (min, max, n) =>
  Array.from({ length: n }, () => Math.random() * (max - min) + min);
