// adapted from https://github.com/transitive-bullshit/random/blob/master/src/distributions/normal.ts
// because was not working with webpack 5
const normal = (mu: number, sigma: number) => {
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

export const getGaussianSample = (
  mu: number,
  sigma: number,
  n: number,
  min?: number,
  max?: number
) => {
  const values = Array.from({ length: n }, () => normal(mu, sigma));
  // If we want to bound the sampling
  if (min !== undefined || max !== undefined) {
    return values.map((number) => {
      if (min !== undefined && number < min) {
        return min;
      }
      if (max !== undefined && number > max) {
        return max;
      }
      return number;
    });
  }
  return values;
};

export const getUniformSample = (min: number, max: number, n: number) =>
  Array.from({ length: n }, () => Math.random() * (max - min) + min);
