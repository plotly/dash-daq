import styled, { css } from 'styled-components';
import Color from 'color';

import { light } from './constants';

export const TankContainer = styled.div`
  position: relative;
  width: ${props => props.width || '112px'};
  height: ${({ size }) => `${size}px`};
  z-index: 2;
  border-radius: ${({ thermometer }) => (thermometer ? '40px' : '0')};

  ${({ theme }) => (theme.dark ? darkTankContainer : lightTankContainer)};
`;
TankContainer.defaultProps = {
  theme: light
};

const darkTankContainer = css`
  background-color: #22272a;
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

const lightTankContainer = css`
  background: ${props => props.theme.secondary};
`;

export const TankFill = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => height || 0};

  border-radius: ${({ thermometer }) => (thermometer ? '40px' : '0')};

  ${({ theme }) => (theme.dark ? darkTankFill : lightTankFill)};
`;
TankFill.defaultProps = {
  theme: light
};

const darkTankFill = css`
  background: ${({ color, theme }) => color || theme.primary};
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 30%, rgba(255, 255, 255, 0.7) 100%);
  background-blend-mode: overlay;
  box-shadow: 0 0 6px 1px
    ${({ color, theme }) =>
      Color(color || theme.primary)
        .alpha(0.7)
        .string()};
`;

const lightTankFill = css`
  background: ${({ color, theme }) => color || theme.primary};
`;

export const TickContainer = styled.div`
  position: relative;
  ${({ xPositioned }) =>
    xPositioned &&
    css`
      direction: rtl;
    `} display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4px;
  margin-top: -6px;
  margin-bottom: -6px;
`;

export const Tick = styled.div`
  ${({ xPosition }) =>
    xPosition || xPosition === 0
      ? css`
          position: absolute;
          bottom: ${`calc(${xPosition}% - ${(xPosition / 100.0) * 18}px)`};
        `
      : ''} display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 18px;

  & .label {
    font-size: 12px;
    text-align: right;
    margin-right: 4px;
    white-space: nowrap;
  }

  & .tick {
    height: 1px;
    width: ${props => props.width || 4}px;
    background: ${props => props.theme.detail};
  }
`;

Tick.defaultProps = {
  theme: light
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${({ thermometer }) =>
    thermometer
      ? css`
          margin-top: 8px;
          margin-left: ${({ xPositioned }) => (xPositioned ? '-4px' : '-24px')};
        `
      : ''};
`;
