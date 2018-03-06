import React from 'react';

import { light } from '../styled/constants';
import { longestString } from '../helpers/util';
import darkGradientDefs from '../styled/shared/DarkGradient';

const RADIAN = Math.PI / 180.0;
const SVG_WIDTH = 224;
const CX = ~~(SVG_WIDTH / 2);
const CY = ~~(SVG_WIDTH / 2);

const GAUGE_RAD = 72;
const OFFSET = 36;
const SCALE_RAD = GAUGE_RAD + OFFSET;
const KNOB_RAD = GAUGE_RAD - 12;

const CIRCLE_CIR = 2 * Math.PI * GAUGE_RAD;
const ARC_LENGTH = 90 / 360 * (2 * Math.PI * GAUGE_RAD);

const defs = progress => (
  <defs>
    {darkGradientDefs}
    <path
      id="base-edge"
      strokeWidth="2px"
      fill="none"
      d={`M-${KNOB_RAD},0a${KNOB_RAD},${KNOB_RAD} 0 1,0 ${KNOB_RAD *
        2},0a${KNOB_RAD},${KNOB_RAD} 0 1,0 -${KNOB_RAD * 2},0`}
    />
    <circle id="base" className="base" cx="0" cy="0" r={KNOB_RAD} />
    <rect id="indent" width="8" height="2" x={KNOB_RAD - 16} y="0" rx="1" />
    <circle
      id="knob-track"
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
      id="knob-track-progress"
      className="track progress"
      cx={CX}
      cy={CY}
      r={GAUGE_RAD}
      fill="none"
      strokeDasharray={CIRCLE_CIR}
      strokeDashoffset={ARC_LENGTH + (1 - progress) * (CIRCLE_CIR - ARC_LENGTH)}
      transform={`rotate(-225 ${CX} ${CY})`}
    />
  </defs>
);

const darkKnob = newAngle => (
  <g transform={`translate(${CX} ${CY})`}>
    <use fill="#141414" xlinkHref="#base" />
    <use fill="url(#l)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#base" />
    <use fill="url(#m)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#base" />
    <use fill="#141414" filter="url(#n)" xlinkHref="#base" />

    <use stroke="#000000" xlinkHref="#base-edge" />
    <use stroke="url(#p)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#base-edge" />
    <use stroke="url(#q)" strokeOpacity=".4" xlinkHref="#base-edge" />

    <g transform={`rotate(${newAngle})`}>
      <use fill="black" filter="url(#r)" xlinkHref="#indent" />
      <use fill="#ABE2FB" xlinkHref="#indent" />
      <use fill="black" filter="url(#t)" xlinkHref="#indent" />
    </g>
  </g>
);

const darkTrack = (
  <g>
    <use stroke="#15181A" filter="url(#a)" xlinkHref="#knob-track" />
    <use stroke="#15181A" xlinkHref="#knob-track" />
    <use stroke="url(#c)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#knob-track" />
    <use stroke="#15181A" filter="url(#d)" xlinkHref="#knob-track" />

    <use stroke="black" filter="url(#e)" xlinkHref="#knob-track-progress" />
    <use stroke="#ABE2FB" xlinkHref="#knob-track-progress" />
    <use stroke="url(#g)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#knob-track-progress" />
  </g>
);

const lightKnob = newAngle => (
  <g transform={`translate(${CX} ${CY}) rotate(${newAngle})`}>
    <circle className="base" cx="0" cy="0" r={KNOB_RAD} fill="#fff" />
    <circle className="indent" cx={KNOB_RAD - 20} cy="0" r={KNOB_RAD / 6} fill="#fff" />
  </g>
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

const KnobSvg = props => {
  const { theme, currentDeg, value, min, max, disabled } = props;

  const normalizedValue = Math.max(Math.min(value, max), min);
  const progress = normalizedValue * 1.0 / max;

  const newAngle = currentDeg - 225;

  return (
    <svg width={SVG_WIDTH} height={SVG_WIDTH} viewBox={`0 0 ${SVG_WIDTH} ${SVG_WIDTH}`}>
      {theme.dark && defs(progress)}
      <g className="scale">{drawScale(props)}</g>
      <g
        ref={props.refFunc}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        className={`knob ${disabled ? 'disabled' : ''}`}
      >
        {theme.dark ? darkKnob(newAngle) : lightKnob(newAngle)}
      </g>
      {theme.dark ? darkTrack : lightTrack(progress)}
    </svg>
  );
};

KnobSvg.defaultProps = {
  theme: light
};

export default KnobSvg;

// private helpers
function drawScale(props) {
  const { max, min, step, marks } = props;
  const numLabels = (max - min) / step;

  const scale = [];

  const offset =
    (marks
      ? longestString(Object.values(marks).map(m => m.label || m)).length
      : max.toString().length) * 2;
  const srT = SCALE_RAD - 24 + offset;

  let label = min;
  for (let sa = -225; sa <= 45; sa += 270.0 / numLabels) {
    let sxT = CX + srT * Math.cos(sa * RADIAN);
    let syT = CY + srT * Math.sin(sa * RADIAN) + 4;

    let mark = (marks && marks[label]) || label;

    if ((marks && marks[label]) || !marks) {
      scale.push(
        <text key={sa} x={sxT} y={syT} textAnchor="middle" style={mark.style}>
          {mark.label || mark}
        </text>
      );
    }

    label += step;
  }

  return scale;
}
