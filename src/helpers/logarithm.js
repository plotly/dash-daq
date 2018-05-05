import React from 'react';
import styled from 'styled-components';

import { roundToDecimal } from './util';

function compute(value, base = 10) {
  if (base === 'e') base = Math.exp(1);

  return Math.log(value) / Math.log(base);
}

function generateLogFormatter({ base = 10, isSVG = false }) {
  return value =>
    isSVG ? (
      <tspan>
        {base}
        <tspan dy="-6px">{value}</tspan>
      </tspan>
    ) : (
      <span>
        {base}
        <sup>{value}</sup>
      </span>
    );
}

function genLogMarks({ min, max, step = 1, base = 10, marks }, isSVG) {
  // if no marks given, compute default marks
  if (!marks) {
    let curr = min;
    marks = {};

    while (curr <= max) {
      marks[curr] = true;
      curr += step;
    }
  }

  Object.keys(marks).forEach(key => {
    if (typeof marks[key] !== 'boolean') {
      // custom mark label, do not format
      return;
    }

    marks[key] = isSVG ? (
      <tspan>
        {base}
        <tspan dy="-6px">{key}</tspan>
      </tspan>
    ) : (
      <span>
        {base}
        <sup>{key}</sup>
      </span>
    );
  });

  return marks;
}

function formatValue(value, base) {
  return (
    <Value>
      ~{base}
      <sup>{roundToDecimal(value, 2)}</sup>
    </Value>
  );
}

const Value = styled.div`
  font-size: 0.9em;
  margin-left: -10px;

  & sup {
    font-size: 0.6em;
  }
`;

export default {
  compute,
  generateLogFormatter,
  formatValue,
  genLogMarks
};
