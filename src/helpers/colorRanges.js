import tinygradient from 'tinygradient';

export const isContiguous = ({ color, min, max }) => {
  const ranges = Object.values(color.ranges);
  ranges.sort((r1, r2) => r1[0] - r2[0]);

  // color ranges start at min and end at max
  if (ranges[0][0] !== min || ranges[ranges.length - 1][1] !== max) return false;

  // color ranges are contiguous
  for (let i = 0; i < ranges.length - 1; i++) {
    if (ranges[i][1] !== ranges[i + 1][0]) return false;
  }

  return true;
};

export const getSortedEntries = scale => {
  const entries = Object.entries(scale);
  entries.sort(([, r1], [, r2]) => r1[0] - r2[0]);

  return entries;
};

export const getGradientObject = ({ color, min, max }) => {
  let currentPos = 0;
  const stops = getSortedEntries(color.ranges).map(([colorValue, range]) => {
    const rangeLength = ((range[1] - range[0]) * 1.0) / (max - min);
    const start = currentPos;
    const end = currentPos + rangeLength;

    currentPos = end;

    return { color: colorValue, pos: start };
  });

  return tinygradient(stops);
};

export const getLinearGradientCSS = ({ color, min, max, vertical = false }) => {
  let currentPercentage = 0;
  const stops = getSortedEntries(color.ranges).map(([colorValue, range], i) => {
    const rangeLength = (((range[1] - range[0]) * 1.0) / (max - min)) * 100;
    const start = currentPercentage;
    const end = currentPercentage + rangeLength;

    currentPercentage = end;

    if (color.gradient) {
      return i === 0 ? colorValue : `${colorValue} ${start}%`;
    }

    return i === 0
      ? `${colorValue}, ${colorValue} ${end}%`
      : `${colorValue} ${start}%, ${colorValue} ${end}%`;
  });

  stops.unshift(vertical ? 'to top' : 'to right');

  return `linear-gradient(${stops.join(', ')})`;
};

export const getColorValue = color => color && (typeof color === 'string' ? color : color.default);

export default {
  isContiguous,
  getSortedEntries,
  getLinearGradientCSS,
  getColorValue
};
