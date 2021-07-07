export const getRandomInteger = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('min is > max');
  }
  if (min < 0) {
    throw new Error('min is < 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
