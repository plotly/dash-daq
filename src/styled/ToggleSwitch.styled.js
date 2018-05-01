import styled, { css } from 'styled-components';

import { light } from './constants';
import Label from './shared/Label.styled';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ rotate }) => css`
    transform: rotate(${parseInt(rotate, 10)}deg);
  `};
`;

export const ButtonContainer = styled('div')`
  height: auto;
  display: flex;
  transition: all 0.1s ease-in;

  ${({ size }) => css`
    width: ${size}px;
    cursor: pointer;
    padding: ${0.05 * size}px;
    border-radius: ${size}px;
    margin-left: ${0.05 * size}px;
    margin-right: ${0.05 * size}px;
  `} ${({ theme }) => (theme.dark ? darkContainer : lightContainer)};
`;
ButtonContainer.defaultProps = {
  theme: light
};

const lightContainer = css`
  background: ${({ on, theme, color }) => (on ? color || theme.secondary : theme.secondary)};
`;

const darkContainer = css`
  background: ${({ on, theme, color }) => (on ? color || theme.secondary : '#22272a')};
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%);
  box-shadow: inset 0 0 8px -1px #000000, inset 0 0 8px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.9), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

export const Button = styled.button`
  background: white;
  border-radius: 50%;
  display: block;
  padding: 0;
  margin: 0;
  transition: all 100ms ease-in-out;
  outline: none;
  ${({ size, on, theme }) => css`
    border: none;
    border: 1px solid ${theme.dark ? 'none' : theme.detail};
    width: ${size / 2}px;
    height: ${size / 2}px;
    transform: translateX(${on ? size - size / 2 : 0}px);
  `} &:focus, &:active, &:hover {
    border: none;
    border: ${({ theme }) => (theme.dark ? 'none' : `1px solid ${theme.detail}`)};
  }

  &:disabled {
    opacity: ${({ theme }) => (theme.dark ? 1 : 0.65)};
    cursor: not-allowed;
  }

  ${({ theme }) => (theme.dark ? darkButton : null)};
`;

Button.defaultProps = {
  theme: light
};

const darkButton = css`
  background-color: #141414;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.5) -20%, rgba(0, 0, 0, 0.7) 100%);
  box-shadow: inset 0 0 1px 0 rgba(52, 52, 52, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.2),
    1px 1px 2px 0px rgba(0, 0, 0, 0.7);

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &::before,
  &::after {
    content: none;
  }
`;

export const DarkSwitchContainer = styled.div`
  display: flex;
  padding: 2px 4px;
  cursor: pointer;
  border-radius: 1px;
  margin: 0 8px;

  background: #22272a;
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%);
  box-shadow: inset 0 0 8px -1px #000000, inset 0 0 8px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.9), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

export const DarkSwitch = styled.button`
  display: block;
  position: relative;
  margin: 0;
  transition: all 100ms ease-in-out;
  outline: none;
  background: #161616;
  height: ${({ size }) => `${size * 0.72}px`};
  width: ${({ size }) => `${size * 1.44}px`};
  background-blend-mode: overlay;
  background-color: #111;
  background-image: ;
  background-image: ${({ on }) =>
    on
      ? css`radial-gradient(farthest-corner at 0px 0px, rgba(256,255,255,1) 5%, rgba(0,0,0,0.6) 90%)`
      : css`radial-gradient(farthest-corner at 0px 0px, rgba(256,255,255,1) 5%, rgba(0,0,0,0.6) 90%)`};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.9);
  border-radius: 2px;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover::after,
  &:active::after,
  &:focus::after {
    box-shadow: none;
  }

  &::before {
    content: none;
  }

  &::after {
    transition: all 100ms ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 4%;
    height: 92%;
    width: 92%;
    margin: 0 auto;
    ${({ size, on }) => {
      const margin = size * 0.08;
      return on
        ? css`
            margin-left: ${margin}px;
          `
        : css`
            margin-right: ${margin}px;
          `;
    }} background-color: #161616;
    background-blend-mode: overlay;
    background-image: ${({ on }) =>
      on
        ? css`linear-gradient(135deg, rgba(255,255,255,0.7) 20%, rgba(0,0,0,0) 100%),
          linear-gradient(90deg, rgba(255,255,255,0) 40%, rgba(0,0,0,0.8) 100%)`
        : css`linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%),
          linear-gradient(90deg, rgba(0,0,0,0.6) 40%, rgba(255,255,255,0) 100%)`};
    border-radius: 2px;
  }

  &:hover::after {
    background-color: #181818;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${props => (props.vertical ? 'column-reverse' : 'row')};
`;

export const RowLabel = styled(Label)`
  margin: 0;
  ${({ position, theme }) => (position === 'right' ? `margin-left: ${theme.dark ? 12 : 8}px;` : '')}
  ${({ position, theme }) => (position === 'left' ? `margin-right: ${theme.dark ? 12 : 8}px;` : '')}
  ${({ position, theme }) =>
    position === 'top' ? `margin-bottom: ${theme.dark ? 34 : 20}px;` : ''}
  ${({ position, theme }) =>
    position === 'bottom' ? `margin-top: ${theme.dark ? 34 : 20}px;` : ''}
`;

RowLabel.defaultProps = {
  theme: light
};
