import React from 'react';

import { longestString, getRandomInt, computeProgress } from '../../helpers/util';
import { isContiguous, getSortedEntries } from '../../helpers/colorRanges';
import { RADIAN, TRACK_TOTAL_DEG } from '../../styled/constants';

export const colorRangesTrack = (props, dimensions) => {
  const { color, max } = props;
  const { CX, CY, GAUGE_RAD, CIRCLE_CIR, GAP_ARC_LENGTH } = dimensions;
  const TRACK_ARC_DEG = 270;
  const GAP_ARC_DEG = 90;
  const GRADIENT_BLEND = 25;

  if (!isContiguous(props)) return null;

  // calculate stops
  const stops = getSortedEntries(color.ranges).map(([colorValue, range], i) => {
    const startDeg = range[0] * 1.0 / max * TRACK_ARC_DEG + GAP_ARC_DEG;
    const endDeg = range[1] * 1.0 / max * TRACK_ARC_DEG + GAP_ARC_DEG;

    if (color.gradient) {
      // no transition between black band and first color
      if (i === 0) {
        return `${colorValue} 0`
      }

      return `${colorValue} ${startDeg + GRADIENT_BLEND}deg, ${colorValue} ${endDeg - GRADIENT_BLEND}deg`;
    }

    return `${colorValue} ${startDeg}deg, ${colorValue} ${endDeg}deg`;
  });

  stops.unshift([`black ${GAP_ARC_DEG}deg`]) // add black band for bottom gap

  if (typeof window === 'undefined') {
    return null
  }

  if (!window.ConicGradient) {
    // eslint-disable-next-line
    require('conic-gradient'); // globally sets ConicGradient
  }
  const ConicGradient = window.ConicGradient
  const gradient = new ConicGradient({
    stops: stops.join(', '),
    size: 400
  });

  // unique id for each track
  const id = `colorRangesImage-${getRandomInt()}`
  return (
    <g>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlinkHref={gradient.dataURL} width="100%" height="100%" />
        </pattern>
      </defs>
      <circle
        className="color-ranges"
        cx={CX}
        cy={CY}
        r={GAUGE_RAD}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="6px"
        strokeDasharray={CIRCLE_CIR}
        strokeDashoffset={GAP_ARC_LENGTH}
        transform={`rotate(-225 ${CX} ${CY})`}
      />
    </g>
  );
};

export const lightTrack = (props, dimensions) => {
  const { color, progress } = props;
  const { CX, CY, GAUGE_RAD, CIRCLE_CIR, GAP_ARC_LENGTH, TRACK_ARC_LENGTH } = dimensions;

  return (
    <g>
      <circle
        className="track"
        cx={CX}
        cy={CY}
        r={GAUGE_RAD}
        fill="none"
        strokeDasharray={CIRCLE_CIR}
        strokeDashoffset={GAP_ARC_LENGTH}
        strokeWidth="6"
        transform={`rotate(-225 ${CX} ${CY})`}
      />
      <circle
        className="track progress"
        cx={CX}
        cy={CY}
        r={GAUGE_RAD}
        fill="none"
        strokeDasharray={CIRCLE_CIR}
        strokeDashoffset={GAP_ARC_LENGTH + (1 - progress) * TRACK_ARC_LENGTH}
        strokeWidth="6"
        transform={`rotate(-225 ${CX} ${CY})`}
      />
      {color && color.ranges && colorRangesTrack(props, dimensions)}
    </g>
  );
};

const getScaleString = v => {
  if (!v) return '';

  // is jsx element?
  if (v.props) return v.props.children[0] + ' '

  return v && v.label || v;
}

export const drawScale = ({ min, max, step, scale }, { CX, CY, SCALE_TICK_OUTER_RAD, SCALE_TICK_INNER_RAD, SCALE_TEXT_RAD, IS_GAUGE }) => {
  const START_ANGLE_OFFSET = -225;
  const DEFAULT_LONGEST_STRING = 3;

  const scaleItems = [];
  let count = 0;

  const offset =
    Math.max(
      longestString(Object.values(scale).map(getScaleString)).length,
      DEFAULT_LONGEST_STRING
    ) * 2;

  const sr1 = SCALE_TICK_OUTER_RAD;
  const sr2 = SCALE_TICK_INNER_RAD;
  const srT = IS_GAUGE ? SCALE_TEXT_RAD - offset : SCALE_TEXT_RAD + offset;

  Object.keys(scale).forEach(key => {
    const markValue = scale[key];
    const degreesProgressed = computeProgress({
      min,
      max,
      value: key,
      progressionTarget: TRACK_TOTAL_DEG
    });
    const markAngle = START_ANGLE_OFFSET + degreesProgressed;

    if (markValue !== null) {
      // draw full mark
      let sx1 = CX + sr1 * Math.cos(markAngle * RADIAN);
      let sy1 = CY + sr1 * Math.sin(markAngle * RADIAN);
      let sx2 = CX + sr2 * Math.cos(markAngle * RADIAN);
      let sy2 = CY + sr2 * Math.sin(markAngle * RADIAN);
      let sxT = CX + srT * Math.cos(markAngle * RADIAN);
      let syT = CY + srT * Math.sin(markAngle * RADIAN) + 4;

      scaleItems.push(
        <line
          key={`line${count}`}
          className="tick"
          x1={sx1}
          y1={sy1}
          x2={sx2}
          y2={sy2}
          strokeLinecap="round"
        />,
        <text
          key={`text${count}`}
          x={sxT}
          y={syT}
          textAnchor="middle"
          style={markValue && markValue.style ? markValue.style : null}
        >
          { (markValue && markValue.label) || markValue }
        </text>
      );
    } else {
      // draw mini mark
      let sx1 = CX + sr1 * Math.cos(markAngle * RADIAN);
      let sy1 = CY + sr1 * Math.sin(markAngle * RADIAN);
      let sx2 = CX + (sr2 + 3) * Math.cos(markAngle * RADIAN);
      let sy2 = CY + (sr2 + 3) * Math.sin(markAngle * RADIAN);

      scaleItems.push(
        <line
          key={`line${count}`}
          className="tick"
          x1={sx1}
          y1={sy1}
          x2={sx2}
          y2={sy2}
          strokeLinecap="round"
        />
      );
    }

    count++;
  });

  return scaleItems;
}
