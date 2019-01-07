import styled, { css } from 'styled-components';

import { light } from './constants';

export const Container = styled.div`
  ${({ disabled, theme }) =>
    disabled &&
    css`
      opacity: ${theme.dark ? 1 : 0.65};
      cursor: not-allowed !important;
      & .chrome-picker {
        pointer-events: none !important;
      }
    `} & .chrome-picker {
    font-family: unset !important;
    box-shadow: none !important;
    ${({ size }) =>
      css`
        width: ${size}px !important;
      `};
  }

  & .chrome-picker svg {
    background: unset !important;
  }

  & .chrome-picker svg:hover path {
    fill: ${({ theme, color }) => color || theme.primary};
  }

  ${({ theme }) => (theme.dark ? darkContainer : lightContainer)};
`;

const lightKnobs = css`
  & .chrome-picker .hue-horizontal > div > div,
  .chrome-picker
    > div:nth-child(2)
    > div:nth-child(1)
    > div:nth-child(2)
    > div:nth-child(2)
    > div
    > div:nth-child(3)
    > div
    > div {
    box-shadow: none !important;
    background-color: #fff;
    border-radius: 100% !important;
    ${({ theme }) =>
      css`
        border: 1px solid ${theme.detail} !important;
      `};
  }
`;

const lightContainer = css`
  border-radius: 3px !important;

  ${lightKnobs} ${({ theme }) =>
    css`
      border: 1px solid ${theme.detail};
    `};
`;

const darkKnobs = css`
  & .chrome-picker .hue-horizontal > div > div,
  .chrome-picker
    > div:nth-child(2)
    > div:nth-child(1)
    > div:nth-child(2)
    > div:nth-child(2)
    > div
    > div:nth-child(3)
    > div
    > div {
    border-radius: 100% !important;
    border: none !important;
    background: #101010 !important;
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) -50%,
      rgba(0, 0, 0, 0.7) 100%
    ) !important;
    transition: all 0.3s ease-in !important;
    ${({ glow }) =>
      css`
        box-shadow: inset 0 0 1px 0 rgba(52, 52, 52, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.2),
          0 0 12px 4px ${glow} !important;
      `};
  }
`;

const darkAlpha = css`
  .chrome-picker .flexbox-fix div:nth-child(2) > div:nth-child(2) > div {
    background: #fff !important;
  }
`;

const darkInput = css`
  & .chrome-picker input {
    font-family: unset !important;
    color: #fff !important;
    border-radius: 0px !important;
    background-color: #22272a !important;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ) !important;
    box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
      -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1) !important;
  }

  & .chrome-picker input:focus {
    outline: 0 !important;
    border: none !important;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ) !important;
    box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.6), inset 0 0 4px 0 rgba(0, 0, 0, 0.6),
      -1px -1px 0px 0px rgba(0, 0, 0, 0.6), 1px 1px 0px 0px rgba(255, 255, 255, 0.1) !important;
  }
`;

const darkContainer = css`
  box-shadow: 0px 0px 8px 2px rgba(100,100,100,0.075),
              0px 0px 32px 2px rgba(255,255,255,0.05),
              1px 1px 0px 0px rgba(25,25,25,0.6),
              -1px -1px 0px 0px rgba(255,255,255,0.2) !important;

  & .chrome-picker > div:first-child {
    border-radius: 0 !important;
  }

  & .chrome-picker > div:nth-child(2) {
    background: #0a0a0a !important;
    border-top: 1px solid rgba(255,255,255,0.075);
  }

  ${darkKnobs}
  ${darkInput}
  ${darkAlpha}
`;

Container.defaultProps = {
  theme: light
};

export default Container;
