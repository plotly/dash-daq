import React from 'react';
import styled, { css } from 'styled-components';

import { light } from './constants';

const ValueContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 32px;
  ${props =>
    props.css
      ? css`
          ${props.css};
        `
      : ''};
`;

export const Value = styled.div`
  font-size: 1em;
  color: ${({ theme, color }) => color || (theme.dark ? '#000' : color || theme.primary)};
  ${({ theme }) =>
    theme.dark
      ? css`
          text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
        `
      : ''};
  ${({ fontSize }) => {
    return fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : '';
  }}
`;

Value.defaultProps = {
  theme: light
};

export const ValueLabel = styled.label`
  margin-top: -4px;
  text-transform: uppercase;
  font-size: 8px;
  color: #535d63;
`;

export default props => (
  <ValueContainer css={props.css}>
    <Value fontSize={props.valueSize} color={props.valueColor} style={props.customStyle}>
      {props.children}
    </Value>
    {props.units ? <ValueLabel>{props.units}</ValueLabel> : null}
  </ValueContainer>
);
