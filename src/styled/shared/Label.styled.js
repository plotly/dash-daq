import styled, { css } from 'styled-components';

export default styled.label`
  display: block;
  font-size: 14px;
  ${ ({position}) => {
    switch (position) {
      case 'top' : return css`margin-bottom: 8px;`
      case 'bottom' : return css`margin-top: 8px;`
      case 'left' : return css`margin-right: 8px;`
      case 'right' : return css`margin-left: 8px;`
    }
  }}
  ${props => css`${props.css}`}
`;
