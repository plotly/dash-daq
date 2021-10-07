import tinygradient from 'tinygradient';

export const isContiguous = ({ color, min, max }) => {
  const ranges = toOneDArray(Object.values(color.ranges));
  ranges.sort((r1, r2) => r1[0] - r2[0]);

  // color ranges start at min and end at max
  if (ranges[0][0] !== min || ranges[ranges.length - 1][1] !== max) return false;

  // color ranges are contiguous
  for (let i = 0; i < ranges.length - 1; i++) {
    if (ranges[i][1] !== ranges[i + 1][0]) return false;
  }

  return true;
};

export const toOneDArray = ranges => {
  let arr = [];
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i][0] instanceof Array) {
      for (let j = 0; j < ranges[i].length; j++) {
        arr.push(ranges[i][j]);
      }
    } else {
      arr.push(ranges[i]);
    }
  }
  return arr;
};

export const convertInRange = (color, max, min) => {
  /*
   * The function will check color and range attribute.
   * if range attribute is provided, it will check for unequal range values.
   * args: color, max and min props from the gauge component
   * example 1:
   * input: color -> {"red":[1, 10], "green":[10, 50]}, max -> 40, min -> 0
   * output: {"red":[0, 10], "green":[10, 40]}
   * if color is underfined
   */
  if (!color) {
    return color;
  }

  // if ranges is not passed with color
  if (color.ranges == null) {
    return color;
  } else {
    let ranges = { ...color.ranges };
    // get a flat array of ranges
    let rangeArr = getRangeArray(ranges);
    rangeArr.sort((a1, a2) => a1 - a2);
    let maxArr = [];
    let minArr = [];

    manageRange({
      ranges: ranges,
      max: max,
      min: min,
      rangeArr: rangeArr,
      minArr: minArr,
      maxArr: maxArr
    });

    for (let i = 0; i < minArr.length; i++) {
      if (minArr[i]['subKey']) {
        ranges[minArr[i]['subKey']][minArr[i]['key']][minArr[i]['index']] = min;
      } else {
        ranges[minArr[i]['key']][minArr[i]['index']] = min;
      }
    }

    for (let i = 0; i < maxArr.length; i++) {
      if (maxArr[i]['subKey']) {
        ranges[maxArr[i]['subKey']][maxArr[i]['key']][maxArr[i]['index']] = max;
      } else {
        ranges[maxArr[i]['key']][maxArr[i]['index']] = max;
      }
    }

    color.ranges = ranges;
    return { ...color };
  }
};

const manageRange = ({
  ranges,
  subKey = undefined,
  max,
  min,
  rangeArr,
  minArr = [],
  maxArr = []
}) => {
  for (let i in ranges) {
    if (ranges[i][0] instanceof Array) {
      manageRange({
        ranges: ranges[i],
        subKey: i,
        max: max,
        min: min,
        rangeArr: rangeArr,
        minArr: minArr,
        maxArr: maxArr
      });
      continue;
    }

    if (ranges[i][0] > max) {
      maxArr.push({ key: i, subKey: subKey, index: 0 });
    }

    if (ranges[i][1] > max) {
      maxArr.push({ key: i, subKey: subKey, index: 1 });
    }

    if (ranges[i][0] < min) {
      minArr.push({ key: i, subKey: subKey, index: 0 });
    }

    if (ranges[i][1] < min) {
      minArr.push({ key: i, subKey: subKey, index: 1 });
    }

    if (rangeArr[0] == ranges[i][0] && ranges[i][0] > min) {
      ranges[i][0] = min;
    }

    if (rangeArr[0] == ranges[i][1] && ranges[i][1] > min) {
      ranges[i][1] = min;
    }

    if (rangeArr[rangeArr.length - 1] == ranges[i][0] && ranges[i][0] < max) {
      ranges[i][0] = max;
    }

    if (rangeArr[rangeArr.length - 1] == ranges[i][1] && ranges[i][1] < max) {
      ranges[i][1] = max;
    }
  }
};

const getRangeArray = ranges => {
  /*
   * convert range passed in colors to flat array
   * example -> ranges = {"red":[0, 1], "green":[1, 10]}
   * output ->  arr = [0, 1, 1, 10]
   */
  let arr = [];
  for (let i in ranges) {
    if (ranges[i][0] instanceof Array) {
      for (let j in ranges[i]) {
        arr = [...arr, ...ranges[i][j]];
      }
    } else {
      arr = [...arr, ...ranges[i]];
    }
  }
  return arr;
};

export const getSortedEntries = scale => {
  let arr = Object.entries(scale);
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];

    if (arr[i][1][0] instanceof Array) {
      for (let j = 0; j < arr[i][1].length; j++) {
        arr1.push([key, arr[i][1][j]]);
      }
    } else {
      arr1.push([key, arr[i][1]]);
    }
  }
  const entries = arr1;

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
