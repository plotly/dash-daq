import styled, { css } from 'styled-components';
import { light } from './constants';

const TOTAL_WIDTH = 250;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: ${TOTAL_WIDTH}px;
  height: 30px;

  ${({ theme }) => (theme.dark ? darkContainer : lightContainer)};
`;
Container.defaultProps = {
  theme: light
};

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
  height: 100%;
  box-sizing: border-box;
  ${props => {
    const boxWidth = TOTAL_WIDTH / ((props.max - props.min) / props.step);
    return css`
      width: ${boxWidth * 0.9}px;
      margin: 0 ${boxWidth * 0.05}px;
    `;
  }} ${({ theme }) => (theme.dark ? darkBlock : lightBlock)};
`;

Block.defaultProps = {
  theme: light
};

const darkBlock = css`
  margin: 0 1px;
  background-color: rgb(168, 220, 240);
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.4) 100%);
  background-blend-mode: overlay;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.45), inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3),
    inset 0 0 12px 0 rgba(255, 255, 255, 0.5), 1px 1px 1px 0px rgba(0, 0, 0, 0.6),
    0 0 3px 0px rgb(168, 220, 240);
`;

const lightBlock = css`
  background-color: ${props => props.theme.primary};
`;

export const Value = styled.div`
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
`;
