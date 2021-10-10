import React from 'react';
import styled from 'styled-components';

import Label from './Label.styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  ${({ fullSize }) => {
    if (fullSize) return 'width: 100%;';
    return '';
  }}
`;

function LabelContainer(props) {
  let labelText = props.label;
  let customLabelStyle = {};
  if (typeof props.label === 'object') {
    labelText = props.label.label;
    customLabelStyle = props.label.style;
  }
  const labelElement = <Label style={customLabelStyle} css={props.labelCSS} position={props.labelPosition}>
    {labelText && labelText.length ? labelText : ''}
  </Label>
  // if (labelText && labelText.length) {
  return (
    <Container className={props.className} id={props.id} labelPosition={props.labelPosition} fullSize={props.fullSize}>
      {props.labelPosition == 'top' && labelElement}
      {props.children}
      {props.labelPosition != 'top' && labelElement}
    </Container>
  );
  // }
  // return <div>{props.children}</div>;
}

LabelContainer.defaultProps = {
  labelPosition: 'bottom'
};

export default LabelContainer;
