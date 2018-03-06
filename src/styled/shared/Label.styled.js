import styled, { css } from 'styled-components';

export default styled.label`
  display: block;
  font-size: 14px;
  ${ ({position}) => position === 'top' ? css`margin-bottom: 8px;` : css`margin-top: 8px;` }
  ${props => css`${props.css}`}
`;
