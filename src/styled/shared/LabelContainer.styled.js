import React from 'react'
import styled from 'styled-components';

import Label from './Label.styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${props => {
    switch (props.labelPosition) {
      case 'top': return 'column-reverse'
      case 'bottom': return 'column'
    }
  }};
`

const DefaultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

function LabelContainer(props) {
  let labelText = props.label;
  let customLabelStyle = {}
  if (typeof props.label === 'object') {
    labelText = props.label.label;
    customLabelStyle = props.label.style;
  }

  if (labelText && labelText.length) {
    return (
      <Container className={props.className} id={props.id} labelPosition={props.labelPosition}>
        {props.children}
        <Label style={customLabelStyle} css={props.labelCSS} position={props.labelPosition}>{labelText}</Label>
      </Container>
    )
  }
  return <DefaultContainer>{props.children}</DefaultContainer>;
}

LabelContainer.defaultProps = {
  labelPosition: 'bottom'
}

export default LabelContainer
