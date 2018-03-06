import styled, { css } from 'styled-components';
import { light } from './constants';

const Container = styled.div`
  & svg {
    text-align: center;
  }

  & circle {
    user-select: none;
  }

  & .scale {
    font-size: 12px;
    user-select: none;
  }

  & .knob {
    cursor: pointer;
  }

  & .disabled {
    opacity: ${({ theme }) => (theme.dark ? 1 : 0.65)};
    cursor: not-allowed;
  }

  ${({ theme }) => (theme.dark ? darkTheme : lightTheme)};
`;

const lightTheme = css`
  & .scale {
    fill: #5b6268;
  }

  & .knob .base,
  .knob .indent {
    stroke: #e6e6e6;
    stroke-width: 2;
  }

  & .track {
    stroke: #e6e6e6;
    stroke-width: 6;
  }

  & .track.progress {
    stroke: #abe2fb;
  }
`;

const darkTheme = css`
  & .scale {
    fill: #fff;
  }

  & .knob .base,
  .knob .indent {
    stroke: #e6e6e6;
    stroke-width: 2;
  }

  & .track {
    stroke-width: 6;
  }

  & .track.progress {
    stroke: #abe2fb;
  }
`;

Container.defaultProps = {
  theme: light
};

export default Container;
