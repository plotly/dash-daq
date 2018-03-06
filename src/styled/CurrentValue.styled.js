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
  color: ${({ theme, color }) => (theme.dark ? '#fff' : color || theme.primary)};
  ${({ theme }) =>
    theme.dark
      ? css`
          text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
        `
      : ''};
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
    <Value color={props.valueColor}>{props.children}</Value>
    {props.units ? <ValueLabel>{props.units}</ValueLabel> : null}
  </ValueContainer>
);
