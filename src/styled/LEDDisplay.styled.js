import styled, { css } from 'styled-components';

import { light } from './constants';

export const LEDContainer = styled.div`
  display: inline-flex;

  ${({ theme }) => (theme.dark ? darkLEDContainer : lightLEDContainer)};
`;

const darkLEDContainer = css`
  padding: 12px 8px 4px 16px;
  background-color: #22272a;
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

const lightLEDContainer = css`
  border-radius: 3px;
  padding: 12px 8px 12px 14px;
  border: 1px solid ${({ theme }) => theme.detail};
  background: ${({ backgroundColor }) => backgroundColor};
`;

LEDContainer.defaultProps = {
  theme: light
};

export const DarkDigitContainer = styled.div`
  & .darkLED-fill {
    fill: ${({ color }) => color};
  }
`;

export default LEDContainer;
