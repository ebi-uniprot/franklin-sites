import random from 'random';

export const getGaussianSample = (mu, sigma, n, min = null, max = null) => {
  const normal = Array.from({ length: n }, random.normal(mu, sigma));
  // If we want to bound the sampling
  if (min || max) {
    return normal.map((number) => {
      if (min !== null && number < min) {
        return min;
      }
      if (max !== null && number > max) {
        return max;
      }
      return number;
    });
  }
  return normal;
};

export const getUniformSample = (min, max, n) =>
  Array.from({ length: n }, random.uniform(min, max));
