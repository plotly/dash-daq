import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  width: ${({ size }) => `${size}px` || 'auto'};
  cursor: text;

  ${({ theme }) => (theme.dark ? darkContainer : lightContainer)};
`;

const darkContainer = css`
  background-color: #22272a;
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),
    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);
`;

const lightContainer = css`
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #d3d3d3;
`;

export const Digit = styled.div`
  padding: 8px 6px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  ${({ theme }) => (theme.dark ? darkDigit : lightDigit)};
`;

const darkDigit = css`
  border-right: 1px solid rgba(0, 0, 0, 0.4);
`;

const lightDigit = css`
  color: #15181a;
  border-right: 1px solid #f2f2f2;
`;

export const ExponentialDigit = styled(Digit)`
  border: none;
  ${({ theme }) =>
    theme.dark
      ? css`
          color: ${({ color, theme }) => color || theme.primary};
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.9),
            0 0 9px ${({ color, theme }) => color || theme.primary};
        `
      : css`
          background: #f2f2f2;
        `};
`;
