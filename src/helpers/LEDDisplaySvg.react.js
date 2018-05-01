import React from 'react';
import Color from 'color';

import { DarkDigitContainer } from '../styled/LEDDisplay.styled';
import { darkLEDDefs, DARK_SEGMENTS, darkColon, darkDecimal } from '../styled/shared/DarkGradient';

const DIGITS = {
  0: ['A', 'B', 'C', 'D', 'E', 'F'],
  1: ['B', 'C'],
  2: ['A', 'B', 'G', 'E', 'D'],
  3: ['A', 'B', 'G', 'C', 'D'],
  4: ['F', 'G', 'B', 'C'],
  5: ['A', 'F', 'G', 'C', 'D'],
  6: ['A', 'F', 'G', 'C', 'D', 'E'],
  7: ['A', 'B', 'C'],
  8: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  9: ['A', 'B', 'C', 'D', 'F', 'G']
};

// See the following link for segment mappings:
// https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_segment_display_labeled.svg
const LIGHT_SEGMENTS = {
  A: {
    base: 'M3.778 3.778L6.555 1h16.667L26 3.778l-2.778 2.778H6.555L3.778 3.778z',
    stroke: 'M3.778 3.778L6.555 1h16.667L26 3.778l-2.778 2.778H6.555L3.778 3.778z'
  },
  B: {
    base: 'M26 3.778l2.778 2.777v16.667L26 26l-2.778-2.778V6.555L26 3.778z',
    stroke: 'M26 3.778l2.778 2.777v16.667L26 26l-2.778-2.778V6.555L26 3.778z'
  },
  C: {
    base: 'M26 26l2.778 2.778v16.666L26 48.222l-2.778-2.778V28.778L26 26z',
    stroke: 'M26 26l2.778 2.778v16.666L26 48.222l-2.778-2.778V28.778L26 26z'
  },
  D: {
    base: 'M26 48.222L23.222 51H6.555l-2.777-2.778 2.777-2.778h16.667L26 48.222z',
    stroke: 'M26 48.222L23.222 51H6.555l-2.777-2.778 2.777-2.778h16.667L26 48.222z'
  },
  E: {
    base: 'M3.778 48.222L1 45.444V28.778L3.778 26l2.778 2.778v16.666l-2.778 2.778z',
    stroke: 'M3.778 48.222L1 45.444V28.778L3.778 26l2.778 2.778v16.666l-2.778 2.778z'
  },
  F: {
    base: 'M3.778 26L1 23.222V6.555l2.778-2.777 2.778 2.777v16.667L3.778 26z',
    stroke: 'M3.778 26L1 23.222V6.555l2.778-2.777 2.778 2.777v16.667L3.778 26z'
  },
  G: {
    base: 'M3.778 26l2.777-2.778h16.667L26 26l-2.778 2.778H6.555L3.778 26z',
    stroke: 'M3.778 26l2.777-2.778h16.667L26 26l-2.778 2.778H6.555L3.778 26z'
  }
};

const LightSegment = ({ paths: { base, stroke }, fillColor, strokeColor }) => (
  <g>
    <path fill={fillColor} fillRule="evenodd" d={base} clipRule="evenodd" />
    <path stroke={strokeColor} strokeWidth=".75" d={stroke} />
  </g>
);

const LightDecimal = ({ fillColor, strokeColor }) => (
  <g transform="translate(29 46)">
    <circle cx="3" cy="3" r="3" fill={fillColor} />
    <circle cx="3" cy="3" r="3" stroke={strokeColor} strokeWidth=".75" />
  </g>
);

const LightColon = ({ fillColor, strokeColor }) => (
  <g>
    <g transform="translate(32 36)">
      <circle cx="3" cy="3" r="3" fill={fillColor} />
      <circle cx="3" cy="3" r="3" stroke={strokeColor} strokeWidth=".75" />
    </g>
    <g transform="translate(32 9)">
      <circle cx="3" cy="3" r="3" fill={fillColor} />
      <circle cx="3" cy="3" r="3" stroke={strokeColor} strokeWidth=".75" />
    </g>
  </g>
);

const LightDigit = ({ value, hasColon, hasDecimal, color, backgroundColor, size }) => {
  const inactiveSegmentFill = Color(backgroundColor)
    .darken(0.2)
    .fade(0.85);

  const activeSegments = DIGITS[value].map(letter => (
    <LightSegment
      key={letter}
      fillColor={color}
      strokeColor={backgroundColor}
      paths={LIGHT_SEGMENTS[letter]}
    />
  ));
  const inactiveSegments = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
    <LightSegment
      key={letter}
      fillColor={inactiveSegmentFill}
      strokeColor={backgroundColor}
      paths={LIGHT_SEGMENTS[letter]}
    />
  ));

  const width = hasColon ? size : size * (6 / 7);
  const height = size * (9 / 7);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g fill="none" style={{ transform: `scale(${Number(size) / 42})` }}>
        {inactiveSegments}
        {activeSegments}
        {hasColon && <LightColon fillColor={color} strokeColor={backgroundColor} />}
        {hasDecimal && <LightDecimal fillColor={color} strokeColor={backgroundColor} />}
      </g>
    </svg>
  );
};

const DarkDigit = ({ value, hasColon, hasDecimal, color, size }) => {
  const segments = DIGITS[value].map(letter => DARK_SEGMENTS[letter]);

  const width = hasColon ? size : size * (6 / 7);
  const height = size * (9 / 7);

  return (
    <DarkDigitContainer color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
      >
        {darkLEDDefs}
        <g
          fill="none"
          fillRule="evenodd"
          filter="url(#darkLED-a)"
          style={{ transform: `scale(${Number(size) / 42})` }}
        >
          {segments}
          {hasColon && darkColon}
          {hasDecimal && darkDecimal}
        </g>
      </svg>
    </DarkDigitContainer>
  );
};

export const Digit = props =>
  props.theme.dark ? <DarkDigit {...props} /> : <LightDigit {...props} />;

export default Digit;
