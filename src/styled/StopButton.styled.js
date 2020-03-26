import styled, { css } from 'styled-components';

import { light } from './constants';

export const Button = styled.button`
  outline: none;
  transition: all 0.1s ease-in;
  ${({ theme }) => (theme.dark ? darkButton : lightButton)};

  &:disabled {
    opacity: ${({ theme }) => (theme.dark ? 1 : 0.65)};
    cursor: not-allowed;
  }
`;
Button.defaultProps = {
  theme: light
};

const lightButton = css`
  color: white;
  background-color: #ff5e5e;

  display: block;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size * 0.42}px`};
  text-align: center;
  cursor: pointer;
  letter-spacing: 0.1;
  line-height: 1;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }

  &:hover {
    background-color: #ff8585;
  }

  &:active {
    background-color: #e64545;
  }
`;

const darkButton = css`
  color: #ff6e6e;
  background-color: #22272a;

  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9), 0 0 9px #ff6e6e;

  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);

  display: block;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size * 0.42}px`};
  text-align: center;
  cursor: pointer;
  letter-spacing: 0.1;
  line-height: 1;

  background-color: #22272a;
  color: #ff1a1a;

  &::before,
  &::after {
    transition: all 0.1s ease-in;
    background-color: #e03a3a;
  }

  &:hover::before,
  &:hover::after {
    background-color: #e64545;
  }

  &:active::before,
  &:active::after {
    background-color: #c72121;
  }

  &:hover::after,
  &:active::after,
  &:focus::after {
    box-shadow: none;
  }
`;

export default Button;
