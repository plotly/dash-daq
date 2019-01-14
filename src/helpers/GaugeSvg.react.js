import React from 'react';

import { light } from '../styled/constants';
import darkGradientDefs from '../styled/shared/DarkGradient';
import { getRandomInt } from '../helpers/util';
import { drawScale, colorRangesTrack, lightTrack } from './shared/TrackSvg';

const lightNeedleKnob = ({ CX, CY }) => (
  <circle className="needle-knob" cx={CX} cy={CY} r="14" fill="#fff" />
);

const darkNeedleKnob = ({ CX, CY }) => {
  const id = getRandomInt();

  return (
    <g>
      <defs>
        <circle
          id={`needle-knob-edge-${id}`}
          strokeWidth="2px"
          fill="none"
          cx={CX}
          cy={CY}
          r="14"
        />
        <circle id={`needle-knob-${id}`} className="needle-knob" cx={CX} cy={CY} r="14" />
      </defs>
      <use fill="#141414" xlinkHref={`#needle-knob-${id}`} />
      <use fill="url(#l)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#needle-knob-${id}`} />
      <use fill="url(#m)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#needle-knob-${id}`} />
      <use fill="#141414" filter="url(#n)" xlinkHref={`#needle-knob-${id}`} />

      <use stroke="#000000" xlinkHref={`#needle-knob-edge-${id}`} />
      <use
        stroke="url(#p)"
        style={{ mixBlendMode: 'overlay' }}
        xlinkHref={`#needle-knob-edge-${id}`}
      />
      <use stroke="url(#q)" strokeOpacity=".4" xlinkHref={`#needle-knob-edge-${id}`} />
    </g>
  );
};

const darkTrack = (props, dimensions) => {
  const { progress } = props;
  const { CX, CY, GAUGE_RAD, CIRCLE_CIR, GAP_ARC_LENGTH, TRACK_ARC_LENGTH } = dimensions;
  const id = getRandomInt();

  const colorValue =
    props.color && (typeof props.color === 'string' ? props.color : props.color.default);

  return (
    <g>
      <defs>
        <circle
          id={`gauge-track-${id}`}
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
          id={`gauge-track-progress-${id}`}
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
      <use stroke="black" filter="url(#a)" xlinkHref={`#gauge-track-${id}`} />
      {props.color && props.color.ranges && (
        <use stroke="#15181A" xlinkHref={`#gauge-track-${id}`} />
      )}
      <use stroke="url(#c)" style={{ mixBlendMode: 'overlay' }} xlinkHref={`#gauge-track-${id}`} />
      <use stroke="black" filter="url(#d)" xlinkHref={`#gauge-track-${id}`} />

      <use stroke="black" filter="url(#e)" xlinkHref={`#gauge-track-progress-${id}`} />
      <use stroke={colorValue || '#ABE2FB'} xlinkHref={`#gauge-track-progress-${id}`} />
      <use
        stroke="url(#g)"
        style={{ mixBlendMode: 'overlay' }}
        xlinkHref={`#gauge-track-progress-${id}`}
      />
      {props.color && props.color.ranges && colorRangesTrack(props, dimensions)}
    </g>
  );
};

const needle = (needleRotation, { CX, CY, SCALE_RAD }) => (
  <line
    className="needle"
    x1={CX}
    y1={CY}
    x2={CX + SCALE_RAD}
    y2={CY}
    transform={`rotate(${needleRotation || 0} ${CX} ${CY})`}
    strokeLinecap="round"
  />
);

const defs = <defs>{darkGradientDefs}</defs>;

const GaugeSvg = props => {
  const { progress, min, max, step, scale } = props;
  const dimensions = calcDimensions(props);

  const scaleItems = drawScale({ min, max, step, scale }, dimensions);
  const knob = props.theme.dark ? darkNeedleKnob(dimensions) : lightNeedleKnob(dimensions);
  const track = props.theme.dark ? darkTrack(props, dimensions) : lightTrack(props, dimensions);

  const needleRotation = 270 * progress - 225;

  return (
    <svg
      width={dimensions.SVG_WIDTH}
      height={dimensions.SVG_WIDTH}
      viewBox={`0 0 ${dimensions.SVG_WIDTH} ${dimensions.SVG_WIDTH}`}
    >
      {props.theme.dark && defs}
      <g className="scale">{scaleItems}</g>
      {needle(needleRotation, dimensions)}
      {knob}
      {track}
    </svg>
  );
};

GaugeSvg.defaultProps = {
  theme: light,
  size: 208
};

export default GaugeSvg;

// private helpers
function calcDimensions({ size }) {
  const OFFSET = 8;
  const d = {};

  d.SVG_WIDTH = size + 32;
  d.CY = ~~(d.SVG_WIDTH / 2);
  d.CX = ~~(d.SVG_WIDTH / 2);

  d.GAUGE_RAD = size / 2;
  d.SCALE_RAD = d.GAUGE_RAD - OFFSET;

  d.CIRCLE_CIR = 2 * Math.PI * d.GAUGE_RAD;
  d.GAP_ARC_LENGTH = (90 / 360) * (2 * Math.PI * d.GAUGE_RAD);
  d.TRACK_ARC_LENGTH = d.CIRCLE_CIR - d.GAP_ARC_LENGTH;

  d.SCALE_TICK_OUTER_RAD = d.SCALE_RAD;
  d.SCALE_TICK_INNER_RAD = d.SCALE_TICK_OUTER_RAD - 6;
  d.SCALE_TEXT_RAD = d.SCALE_TICK_INNER_RAD - 8;

  d.IS_GAUGE = true;

  return d;
}
