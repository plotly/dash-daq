import styled, { css } from 'styled-components';
import { light } from './constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ vertical }) => (vertical ? verticalContainer : horizontalContainer)};
  ${({ theme }) => (theme.dark ? darkContainer : lightContainer)};
`;

Container.defaultProps = {
  theme: light
};

const verticalContainer = css`
  flex-direction: column-reverse;
  width: 30px;
  height: ${({ size }) => `${size}px`};
`;

const horizontalContainer = css`
  flex-direction: row;
  width: ${({ size }) => `${size}px`};
  height: 30px;
`;

const darkContainer = css`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  padding: 3px;
  color: #fff;
  border: none;
  border-radius: 0px;
  background-color: #22272a;
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

const lightContainer = css`
  background-color: ${props => props.theme.secondary};
`;

export const Block = styled.div`
  display: block;
  box-sizing: border-box;

  ${({ gradient, progress, color, theme, max, min, step, size, vertical }) => {
    if (gradient) {
      const TOTAL_STEPS = (max - min) / step;
      const STEP_SIZE = size / TOTAL_STEPS;
      const STEP_SIZE_PERCENT = STEP_SIZE / size;

      const start = gradient.rgbAt(progress).toString();
      const end = gradient.rgbAt(progress + STEP_SIZE_PERCENT).toString();

      return css`
        background-image: linear-gradient(${vertical ? 'to top' : 'to right'}, ${start}, ${end});
      `;
    }

    return css`
      background-color: ${color || theme.primary};
    `;
  }}

  ${props => {
    const TOTAL_STEPS = (props.max - props.min) / props.step;
    const STEP_SIZE = props.size / TOTAL_STEPS;
    const MARGIN = STEP_SIZE >= 10 ? STEP_SIZE * 0.05 : 0.5;
    const BOX_SIZE = STEP_SIZE - 2 * MARGIN;
    return css`
      height: ${props.vertical ? `${BOX_SIZE}px` : '100%'};
      width: ${props.vertical ? '100%' : `${BOX_SIZE}px`};
      margin: ${props.vertical ? `${MARGIN}px 0` : `0 ${MARGIN}px`};
    `;
  }}

  ${({ theme }) => theme.dark && darkBlock};
`;

Block.defaultProps = {
  theme: light
};

const darkBlock = css`
  ${({ color, theme, gradient }) => {
    if (gradient) return;

    return css`
      background-color: ${color || theme.primary};
      background-image: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
      background-blend-mode: overlay;
    `;
  }} box-shadow: ${({ color, theme }) =>
  `2px 2px 6px 1px rgba(0, 0, 0, 0.45), inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3),
      1px 1px 1px 0px rgba(0, 0, 0, 0.6), 0 0 3px 0px ${color || theme.primary}`};
`;

export const Value = styled.div`
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);

  ${({ vertical }) =>
    vertical
      ? css`
          font-size: 11px;
          right: auto;
        `
      : ''};
`;
