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

  & .tick {
    stroke: ${props => props.theme.detail};
    stroke-width: 2;
  }

  & .knob {
    cursor: pointer;
  }

  & .disabled {
    opacity: ${({ theme }) => (theme.dark ? 1 : 0.65)};
    cursor: not-allowed;
  }

  & .track.progress {
    stroke: ${({ color, theme }) => color || theme.primary};
  }

  ${({ theme }) => (theme.dark ? darkTheme : lightTheme)};
`;

const lightTheme = css`
  & .scale {
    fill: #5b6268;
  }

  & .track {
    stroke: #e6e6e6;
  }

  & .knob .base,
  .knob .indent {
    stroke: #e6e6e6;
    stroke-width: 2;
  }
`;

const darkTheme = css`
  & .scale {
    fill: #fff;
  }
`;

Container.defaultProps = {
  theme: light
};

export default Container;
