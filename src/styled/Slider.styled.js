import React from 'react';
import styled, { css } from 'styled-components';

import { UnstyledDarkHandle } from './shared/DarkGradient';
import { colors } from './constants';

export const SliderContainer = styled.div`
  ${({ vertical, size }) => {
    if (size) return vertical ? `height: ${size}px;` : `width: ${size}px`;
  }};

  & .rc-slider-disabled,
  .rc-slider-disabled .rc-slider-handle {
    background-color: unset !important;
  }

  & .rc-slider-track {
    ${({ theme }) =>
      theme.dark &&
      css`
        box-shadow: none !important;
      `};
  }
`;

export const HandleContainer = styled.div`
  position: absolute;

  /* remove rc-slider-handle styles */
  width: auto;
  height: auto;
  border-radius: unset;
  border: none;
  background: none;
  margin: 0 !important;

  ${({ isTarget }) => (isTarget ? targetHandleContainer : sliderHandleContainer)};
`;

const targetHandleContainer = css`
  ${({ vertical }) =>
    vertical
      ? css`
          right: 9px;
        `
      : css`
          bottom: 12px;
        `};
`;

const sliderHandleContainer = css`
  z-index: 1;

  ${({ vertical, offset }) =>
    vertical
      ? css`
          left: 3px;
          bottom: ${offset}%;
        `
      : css`
          left: ${offset}%;
        `};
`;

const UnstyledLightHandle = ({ className }) => (
  <svg
    className={className}
    width="6"
    height="18"
    viewBox="0 0 6 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M 4.61171 15.9753L 5.33436 2.96765C 5.40881 1.62753 4.34219 0.5 3 0.5C 1.65781 0.5 0.591189 1.62753 0.66564 2.96765L 1.38829 15.9753C 1.43581 16.8307 2.14329 17.5 3 17.5C 3.85671 17.5 4.56419 16.8307 4.61171 15.9753Z"
      strokeMiterlimit="8"
      fill="#fff"
    />
  </svg>
);

export const Handle = props =>
  props.theme.dark ? <DarkHandle {...props} /> : <LightHandle {...props} />;

const LightHandle = styled(UnstyledLightHandle)`
  /* remove rc-slider-handle styles */
  width: auto;
  height: auto;
  border-radius: unset;
  border: none;
  background: none;
  margin: 0 !important;

  ${({ isTarget }) => (isTarget ? targetHandle : sliderHandle)};
`;

const DarkHandle = styled(UnstyledDarkHandle)`
  /* remove rc-slider-handle styles */
  width: auto;
  height: auto;
  border-radius: unset;
  border: none;
  background: none !important;
  margin: 0 !important;

  /* remove rc-slider-handle styles */
  box-shadow: none !important;

  ${({ isTarget }) => (isTarget ? targetHandle : sliderHandle)};
`;

const targetHandle = css`
  position: absolute;

  ${({ theme, color }) =>
    theme.dark
      ? css`
          & .dark-handle-custom-fill {
            fill: ${color || theme.detail};
          }
        `
      : css`
          & path {
            stroke: ${color || theme.detail};
          }
        `}

  ${({ vertical }) =>
    vertical
      ? css`
          top: 0;
          right: 0;
        `
      : css`
          bottom: 0;
          left: 0;
        `}

  ${({ vertical, theme }) => {
    let deltaX = -50;
    let deltaY = 55;
    let rotation = 0;

    if (vertical) {
      deltaX = theme.dark ? 40 : 0;
      deltaY = -50;
      rotation = 270;
    }

    return css`
      transform: translate(${deltaX}%, ${deltaY}%) rotate(${rotation}deg);
    `;
  }};
`;

const sliderHandle = css`
  ${({ theme, color }) =>
    theme.dark
      ? css`
          & .dark-handle-custom-fill {
            fill: ${color || theme.primary};
          }
        `
      : css`
          & path {
            stroke: ${color || theme.primary};
          }
        `} ${({ vertical }) => {
    let deltaX = -50;
    let deltaY = -40;
    let rotation = 0;

    if (vertical) {
      deltaX = -2;
      deltaY = -50;
      rotation = 270;
    }

    return css`
      transform: translate(${deltaX}%, ${deltaY}%) rotate(${rotation}deg);
    `;
  }};
`;

export const targetStyles = {
  width: 'auto',
  marginLeft: 0,
  marginBottom: 0,
  textAlign: 'center'
};

export const Label = styled.div`
  /* remove rc-slider-handle styles */
  margin: 0 !important;
  width: auto;
  height: auto;

  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;

  & .label {
    font-size: 8px;
    font-weight: 600;
  }

  & .value {
    font-size: 20px;
    line-height: 1.1;
  }

  ${({ theme }) => (theme.dark ? darkLabel : lightLabel)} ${({ isTarget }) =>
    isTarget ? targetLabel : sliderLabel};
`;

const darkLabel = css`
  /* remove dark-gradient.css styles */
  box-shadow: none !important;

  background: #101010;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.3) -50%, rgba(0, 0, 0, 0.7) 100%);
`;

const lightLabel = css`
  border: 1px solid ${colors.GREY};

  &:hover {
    border: 1px solid ${colors.GREY};
  }
`;

const targetLabel = css`
  color: ${({ color, theme }) => color || theme.detail};

  ${({ vertical }) => {
    let offset = vertical ? -9 : -5;
    return vertical
      ? css`
          transform: translate(${offset}px, -50%);
        `
      : css`
          transform: translate(-50%, ${offset}px);
        `;
  }};
`;

const sliderLabel = css`
  color: ${({ color, theme }) => color || theme.primary};

  ${({ vertical }) =>
    vertical
      ? css`
          right: 0;
        `
      : css`
          top: 0;
        `} ${({ vertical, label, value }) => {
    let offset = label && (value || value === 0) ? -44 : -22;

    if (vertical) {
      offset = -3;
    }

    return vertical
      ? css`
          transform: translate(${offset}px, -50%);
        `
      : css`
          transform: translate(-50%, ${offset}px);
        `;
  }};
`;

export default {
  SliderContainer,
  Handle,
  targetStyles,
  Label
};
