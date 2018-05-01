import styled, { css } from 'styled-components';
import { light } from '../styled/constants';

const Container = styled.div`
  & svg {
    text-align: center;
  }

  & circle {
    user-select: none;
  }

  & .scale {
    font-size: 12px;

    fill: ${({ theme }) => (theme.dark ? '#fff' : '#5b6268')};
    user-select: none;
  }

  & .track {
    stroke-width: 6;
  }

  & .tick {
    stroke: ${props => props.theme.detail};
    stroke-width: 2;
  }

  & .tick.small {
    stroke: #2b2f32;
  }

  & .needle {
    stroke: ${({ theme }) => (theme.dark ? '#fff' : '#5b6268')};
    stroke-width: 3;
  }

  ${({ theme }) => (theme.dark ? darkTheme : lightTheme)};
`;

const lightTheme = css`
  & .needle-knob {
    stroke: ${({ theme }) => theme.secondary};
    stroke-width: 2;
  }

  & .track {
    stroke: ${props => props.theme.secondary};
    stroke-width: 6;
  }

  & .track.progress {
    stroke: ${({ color, theme }) => color || theme.primary};
  }
`;

const darkTheme = css`
  & .color-ranges {
    mix-blend-mode: color;
  }
`;

Container.defaultProps = {
  theme: light
};

export default Container;
