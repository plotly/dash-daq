import styled from 'styled-components';

const SvgContainer = styled.div`
  & .scale-text {
    ${({ scaleTextSize }) => `font-size: ${scaleTextSize}px;`}
    ${({ theme }) => (theme.dark ? `fill: ${theme.detail};` : null)}
  }
`;

export default SvgContainer;
