import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withTheme } from 'styled-components';
import Color from 'color';

import { colors } from '../styled/constants';
import { Container } from '../styled/ColorPicker.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { defaultProps, propTypes } from '../components/ColorPicker.react';

const DEFAULT_COLOR = colors.PRIMARY;

const parseValue = value => {
  value = value || {};

  if (value.rgb) {
    const rgba = Object.values(value.rgb);
    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
  }

  if (value.hex)
    return Color(value.hex)
      .rgb()
      .string();

  return DEFAULT_COLOR;
};

/**
 * A color picker.
 */
class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.calcHandleGlow = this.calcHandleGlow.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.value !== this.state.value) this.setState({ value: newProps.value });
  }

  calcHandleGlow() {
    return Color(parseValue(this.state.value))
      .fade(0.5)
      .string();
  }

  setValue(value) {
    if (value != null) {
      const { hex, rgb } = value;
      const newValue = { hex, rgb };

      this.setState({ value: newValue });
      if (this.props.setProps) this.props.setProps({ value: newValue });
    }
  }

  render() {
    const { id, className, style } = this.props;

    return (
      <div id={id} className={className} style={style}>
        <LabelContainer {...this.props}>
          <Container {...this.props} glow={this.calcHandleGlow}>
            <ChromePicker color={parseValue(this.state.value)} onChangeComplete={this.setValue} />
          </Container>
        </LabelContainer>
      </div>
    );
  }
}

ColorPicker.defaultProps = defaultProps;
ColorPicker.propTypes = propTypes;

export default withTheme(ColorPicker);
