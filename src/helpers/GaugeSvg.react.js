import React from 'react';

import { light, svg_shared } from '../styled/constants';
import darkGradientDefs from '../styled/shared/DarkGradient';

const { SVG_WIDTH, CY, CX, GAUGE_RAD, SCALE_RAD, CIRCLE_CIR, ARC_LENGTH, RADIAN } = svg_shared;

const lightNeedleKnob = <circle className="needle-knob" cx={CX} cy={CY} r="14" fill="#fff" />;

const darkNeedleKnob = (
  <g>
    <use fill="#141414" xlinkHref="#needle-knob" />
    <use fill="url(#l)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#needle-knob" />
    <use fill="url(#m)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#needle-knob" />
    <use fill="#141414" filter="url(#n)" xlinkHref="#needle-knob" />

    <use stroke="#000000" xlinkHref="#needle-knob-edge" />
    <use stroke="url(#p)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#needle-knob-edge" />
    <use stroke="url(#q)" strokeOpacity=".4" xlinkHref="#needle-knob-edge" />
  </g>
);

const defs = progress => (
  <defs>
    {darkGradientDefs}
    <circle
      id="gauge-track"
      className="track"
      cx={CX}
      cy={CY}
      r={GAUGE_RAD}
      fill="none"
      strokeDasharray={CIRCLE_CIR}
      strokeDashoffset={ARC_LENGTH}
      transform={`rotate(-225 ${CX} ${CY})`}
    />
    <circle
      id="gauge-track-progress"
      className="track progress"
      cx={CX}
      cy={CY}
      r={GAUGE_RAD}
      fill="none"
      strokeDasharray={CIRCLE_CIR}
      strokeDashoffset={ARC_LENGTH + (1 - progress) * (CIRCLE_CIR - ARC_LENGTH)}
      transform={`rotate(-225 ${CX} ${CY})`}
    />
    <circle id="needle-knob-edge" strokeWidth="2px" fill="none" cx={CX} cy={CY} r="14" />
    <circle id="needle-knob" className="needle-knob" cx={CX} cy={CY} r="14" />
  </defs>
);

const lightTrack = progress => (
  <g>
    <circle
      className="track"
      cx={CX}
      cy={CY}
      r={GAUGE_RAD}
      fill="none"
      strokeDasharray={CIRCLE_CIR}
      strokeDashoffset={ARC_LENGTH}
      transform={`rotate(-225 ${CX} ${CY})`}
    />
    <circle
      className="track progress"
      cx={CX}
      cy={CY}
      r={GAUGE_RAD}
      fill="none"
      strokeDasharray={CIRCLE_CIR}
      strokeDashoffset={ARC_LENGTH + (1 - progress) * (CIRCLE_CIR - ARC_LENGTH)}
      transform={`rotate(-225 ${CX} ${CY})`}
    />
  </g>
);

const darkTrack = (
  <g>
    <use stroke="black" filter="url(#a)" xlinkHref="#gauge-track" />
    <use stroke="#15181A" xlinkHref="#gauge-track" />
    <use stroke="url(#c)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#gauge-track" />
    <use stroke="black" filter="url(#d)" xlinkHref="#gauge-track" />

    <use stroke="black" filter="url(#e)" xlinkHref="#gauge-track-progress" />
    <use stroke="#ABE2FB" xlinkHref="#gauge-track-progress" />
    <use stroke="url(#g)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#gauge-track-progress" />
  </g>
);

const GaugeSvg = props => {
  const { progress, min, max, step, marks } = props;
  const scale = drawScale({ min, max, step, marks });

  const needleRotation = 270 * progress - 225;

  return (
    <svg width={SVG_WIDTH} height={SVG_WIDTH} viewBox={`0 0 ${SVG_WIDTH} ${SVG_WIDTH}`}>
      {props.theme.dark && defs(progress)}
      <g className="scale">{scale}</g>
      <line
        className="needle"
        x1={CX}
        y1={CY}
        x2={CX + SCALE_RAD}
        y2={CY}
        transform={`rotate(${needleRotation || 0} ${CX} ${CY})`}
        strokeLinecap="round"
      />
      {props.theme.dark ? darkNeedleKnob : lightNeedleKnob}
      {props.theme.dark ? darkTrack : lightTrack(progress)}
    </svg>
  );
};

GaugeSvg.defaultProps = {
  theme: light
};

export default GaugeSvg;

// private helpers
function drawScale({ min, max, step, marks }) {
  const numLabels = (max - min) / step;
  const scale = [];
  let count = 0;

  const sr1 = SCALE_RAD;
  const sr2 = sr1 - 6;

  const srT = sr2 - 16;

  let label = min;
  for (let sa = -225; sa <= 45; sa += 270.0 / numLabels) {
    let sx1 = CX + sr1 * Math.cos(sa * RADIAN);
    let sy1 = CY + sr1 * Math.sin(sa * RADIAN);
    let sx2 = CX + sr2 * Math.cos(sa * RADIAN);
    let sy2 = CY + sr2 * Math.sin(sa * RADIAN);
    let sxT = CX + srT * Math.cos(sa * RADIAN);
    let syT = CY + srT * Math.sin(sa * RADIAN) + 3;

    const tick = (marks && marks[label]) || label;

    if ((marks && marks[label]) || !marks) {
      scale.push(
        <line
          key={`line${count}`}
          className="tick"
          x1={sx1}
          y1={sy1}
          x2={sx2}
          y2={sy2}
          strokeLinecap="round"
        />,
        <text key={`text${count}`} x={sxT} y={syT} textAnchor="middle" style={tick.style}>
          {tick.label || tick}
        </text>
      );
    }
    count += 1;

    label += step;
  }

  // draw mini-ticks
  if (!marks) {
    const interval = 270.0 / numLabels / 2;
    for (let sa = -225 + interval; sa <= 45 - interval; sa += interval * 2) {
      let sx1 = CX + sr1 * Math.cos(sa * RADIAN);
      let sy1 = CY + sr1 * Math.sin(sa * RADIAN);
      let sx2 = CX + (sr2 + 3) * Math.cos(sa * RADIAN);
      let sy2 = CY + (sr2 + 3) * Math.sin(sa * RADIAN);

      scale.push(
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
      count += 1;
    }
  }

  return scale;
}
