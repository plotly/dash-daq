import styled from 'styled-components';

import { light } from './constants';

const WIDTH = 20;

export const ThermometerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bulb = styled.div`
  width: ${1.5 * WIDTH}px;
  height: ${1.5 * WIDTH}px;
  border-radius: 50%;
  background-color: ${props =>
    props.on ? props.color || props.theme.primary : props.theme.secondary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -${WIDTH}px;
  z-index: -1;
`;

Bulb.defaultProps = {
  theme: light
};

export const CurrentValueContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > div {
    margin-top: 56px;
    line-height: 28px;
  }
`;

CurrentValueContainer.defaultProps = {
  theme: light
};
