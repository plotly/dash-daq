import { decimalify } from './util';

// magic numbers
const DEFAULT_NUM_INTERVALS = 10;
const DEFAULT_LABEL_INTERVAL = 2;

export default function generateScale(input) {
  const config = processInput(input);

  const scale = {
    ...config.custom
  };

  if (config.onlyRenderCustom) {
    return scale;
  }

  scale[config.min] = config.formatter(config.min);
  scale[config.max] = config.formatter(config.max);

  let curr = config.start;
  let markCount = 0;
  while (curr <= config.max) {
    const needsLabel = markCount % config.labelInterval === 0;
    const currValue = Number(decimalify(curr, config.interval));
    const alreadyMarked = typeof scale[currValue] !== 'undefined';

    curr += config.interval;
    markCount++;

    if (alreadyMarked) continue;

    const label = needsLabel ? config.formatter(currValue) : null;
    scale[currValue] = label;
  }

  return scale;
}

// private
function processInput({ min, max, scale = {}, formatter }) {
  const config = {};

  const START_FLAG = scale.start != null;
  const INTERVAL_FLAG = scale.interval != null;
  const LABEL_INTERVAL_FLAG = scale.labelInterval != null;

  config.min = min;
  config.max = max;
  config.start = START_FLAG ? scale.start : min;
  config.interval = INTERVAL_FLAG ? scale.interval : computeInterval(config.start, max);
  config.labelInterval = LABEL_INTERVAL_FLAG ? scale.labelInterval : DEFAULT_LABEL_INTERVAL;
  config.custom = scale.custom || {};
  config.formatter = formatter || identityFunc;

  const noConfigPassed = !START_FLAG && !INTERVAL_FLAG && !LABEL_INTERVAL_FLAG;
  const customTicks = Object.keys(config.custom).length;
  config.onlyRenderCustom = customTicks && noConfigPassed;

  return config;
}

function identityFunc(x) {
  return x;
}

function computeInterval(min, max) {
  const ROUND_TO_WHOLE = Math.ceil;
  const ROUND_TO_FRACTION = x => Number(x.toFixed(2));

  const range = Math.abs(max - min) * 1.0;
  const intervalEstimate = range / DEFAULT_NUM_INTERVALS;
  const interval =
    intervalEstimate > 1 ? ROUND_TO_WHOLE(intervalEstimate) : ROUND_TO_FRACTION(intervalEstimate);

  return interval;
}
