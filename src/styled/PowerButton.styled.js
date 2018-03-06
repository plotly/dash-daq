import styled, { css } from 'styled-components';
import { light } from '../styled/constants';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & svg {
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: ${({ theme }) => (theme.dark ? 1 : 0.65)};
    cursor: not-allowed;
  }

  ${({ theme }) => (theme.dark ? darkTheme : lightTheme)};
`;

const lightTheme = css`
  border-radius: 50%;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid ${props => props.theme.secondary};
  width: 48px;
  height: 48px;
  margin-bottom: 3px;
  padding: 0;

  &:focus,
  &:hover {
    border-color: ${props => props.theme.secondary};
  }
`;

const darkTheme = css`
  height: 48px;
  width: 48px;
  border-radius: 100%;
  padding: 0;
  margin-bottom: 8px;

  &::before,
  &::after {
    left: 4%;
    border-radius: 100%;
    transition: all 0.1s ease-in;
  }

  &::before {
    top: 8%;
    width: 86%;
    height: 86%;
  }

  &::after {
    top: 4%;
    width: 92%;
    height: 92%;

    ${({ on }) => (on ? 'box-shadow: 0 0 8px 2px rgb(168, 220, 240);' : '')};
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:hover::after {
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.66);
  }

  &:focus::after,
  &:active::after {
    box-shadow: ${({ on }) =>
      on ? '0 0 8px 2px rgb(168, 220, 240)' : '0 0 3px 0 rgba(0,0,0,0.66)'};
  }
`;

Button.defaultProps = {
  theme: light
};
