import React from 'react';

import { light } from '../styled/constants';
import darkGradientDefs from '../styled/shared/DarkGradient';
import { getRandomInt } from './util';
import { drawScale, colorRangesTrack, lightTrack } from './shared/TrackSvg';
import { getColorValue } from './colorRanges';

const START_ANGLE_OFFSET = -225;

const lightKnob = (newAngle, { CX, CY, KNOB_RAD }) => (
  <g transform={`translate(${CX} ${CY}) rotate(${newAngle})`}>
    <circle className="base" cx="0" cy="0" r={KNOB_RAD} fill="#fff" />
    <circle className="indent" cx={KNOB_RAD * (2 / 3)} cy="0" r={KNOB_RAD / 6} fill="#fff" />
  </g>
);

const darkKnob = (color, newAngle, { CX, CY, KNOB_RAD }) => {
  const id = getRandomInt();

  return (
    <g transform={`translate(${CX} ${CY})`}>
      <defs>
        <path
          id={`base-edge-${id}`}
          strokeWidth="2px"
          fill="none"
          d={`M-${KNOB_RAD},0a${KNOB_RAD},${KNOB_RAD} 0 1,0 ${KNOB_RAD *
            2},0a${KNOB_RAD},${KNOB_RAD} 0 1,0 -${KNOB_RAD * 2},0`}
        />
        <circle id={`base-${id}`} className="base" cx="0" cy="0" r={KNOB_RAD} />
        <rect id={`indent-${id}`} width="8" height="2" x={KNOB_RAD - 16} y="0" rx="1" />
      </defs>
      <use fill="#141414" xlinkHref={`#base-${id}`} />
      <use fill="url(#l)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#base-${id}`} />
      <use fill="url(#m)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#base-${id}`} />
      <use fill="#141414" filter="url(#n)" xlinkHref={`#base-${id}`} />

      <use stroke="#000000" xlinkHref={`#base-edge-${id}`} />
      <use stroke="url(#p)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#base-edge-${id}`} />
      <use stroke="url(#q)" strokeOpacity=".4" xlinkHref={`#base-edge-${id}`} />

      <g transform={`rotate(${newAngle})`}>
        <use fill="black" filter="url(#r)" xlinkHref={`#indent-${id}`} />
        <use fill={getColorValue(color) || '#ABE2FB'} xlinkHref={`#indent-${id}`} />
        <use fill="black" filter="url(#t)" xlinkHref={`#indent-${id}`} />
      </g>
    </g>
  );
};

const darkTrack = (props, dimensions) => {
  const { progress } = props;
  const { CX, CY, GAUGE_RAD, CIRCLE_CIR, GAP_ARC_LENGTH, TRACK_ARC_LENGTH } = dimensions;
  const id = getRandomInt();

  const hasColorRanges = props.color && props.color.ranges;

  return (
    <g>
      <defs>
        <circle
          id={`knob-track-${id}`}
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
          id={`knob-track-progress-${id}`}
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
      </defs>
      <use stroke="#15181A" filter="url(#a)" xlinkHref={`#knob-track-${id}`} />
      {hasColorRanges && <use stroke="#15181A" xlinkHref={`#knob-track-${id}`} />}
      <use stroke="url(#c)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#knob-track-${id}`} />
      <use stroke="#15181A" filter="url(#d)" xlinkHref={`#knob-track-${id}`} />

      {!hasColorRanges && (
        <use stroke="black" filter="url(#e)" xlinkHref={`#knob-track-progress-${id}`} />
      )}
      <use
        stroke="url(#g)"
        style={{ mixBlendMode: 'overlay' }}
        xlinkHref={`#knob-track-progress-${id}`}
      />
      <use
        stroke={getColorValue(props.color) || '#ABE2FB'}
        xlinkHref={`#knob-track-progress-${id}`}
      />

      {props.color && props.color.ranges && colorRangesTrack(props, dimensions)}
    </g>
  );
};

const KnobSvg = props => {
  const { theme, currentDeg, disabled, color } = props;

  const newAngle = currentDeg + START_ANGLE_OFFSET;
  const dimensions = calcDimensions(props);

  const knob = theme.dark ? darkKnob(color, newAngle, dimensions) : lightKnob(newAngle, dimensions);
  const track = theme.dark ? darkTrack(props, dimensions) : lightTrack(props, dimensions);

  return (
    <svg
      width={dimensions.SVG_WIDTH}
      height={dimensions.SVG_WIDTH}
      viewBox={`0 0 ${dimensions.SVG_WIDTH} ${dimensions.SVG_WIDTH}`}
    >
      {theme.dark && darkGradientDefs}
      <g className="scale">{drawScale(props, dimensions)}</g>
      <g
        ref={props.refFunc}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        className={`knob ${disabled ? 'disabled' : ''}`}
      >
        {knob}
      </g>
      {track}
    </svg>
  );
};

KnobSvg.defaultProps = {
  theme: light,
  size: 144
};

export default KnobSvg;

// private helpers
function calcDimensions({ size }) {
  const OFFSET = 36;
  const d = {};

  d.SVG_WIDTH = size + 80;
  d.CY = ~~(d.SVG_WIDTH / 2);
  d.CX = ~~(d.SVG_WIDTH / 2);

  d.GAUGE_RAD = size / 2;
  d.SCALE_RAD = d.GAUGE_RAD + OFFSET;
  d.KNOB_RAD = d.GAUGE_RAD - 12;

  d.CIRCLE_CIR = 2 * Math.PI * d.GAUGE_RAD;
  d.GAP_ARC_LENGTH = (90 / 360) * (2 * Math.PI * d.GAUGE_RAD);
  d.TRACK_ARC_LENGTH = d.CIRCLE_CIR - d.GAP_ARC_LENGTH;

  d.SCALE_TICK_OUTER_RAD = d.SCALE_RAD - 27;
  d.SCALE_TICK_INNER_RAD = d.SCALE_TICK_OUTER_RAD - 0.5;
  d.SCALE_TEXT_RAD = d.SCALE_RAD - 20;

  return d;
}
