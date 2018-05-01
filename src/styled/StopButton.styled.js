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
  display: block;
  box-sizing: border-box;
  color: white;
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
  background-color: #ff5e5e;
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
  display: inline-flex;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size * 0.42}px`};
  line-height: ${({ size }) => `${size * 0.42}px`};

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
