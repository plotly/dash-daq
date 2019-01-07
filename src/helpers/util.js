export const longestString = arr =>
  arr.sort(function(a, b) {
    return b.length - a.length;
  })[0];

export const decimalify = (num = 0, step) => {
  if (isNaN(num)) {
    return num;
  }

  // eslint-disable-next-line
  const [characteristic, mantissa] = step.toString().split('.');

  const numDecimalPoints = mantissa ? mantissa.length : 0;

  return num.toFixed(numDecimalPoints);
};

export const sanitizeRangeValue = ({ min, max, value }) => {
  if (value == null) return min;

  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
};

export const computeProgress = ({ min, max, value, progressionTarget = 100 }) => {
  value = Number(value);
  const adjustedValue = Math.abs(value - min) * 1.0;
  const range = Math.abs(max - min);

  return (adjustedValue / range) * progressionTarget;
};

export const roundToDecimal = (value, decimals) =>
  Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);

export const getRandomInt = (min = 0, max = 9999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default {
  decimalify,
  sanitizeRangeValue,
  computeProgress,
  longestString,
  roundToDecimal,
  getRandomInt
};
