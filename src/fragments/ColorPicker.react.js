import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withTheme } from 'styled-components';
import Color from 'color';

import { colors } from '../styled/constants';
import { Container } from '../styled/ColorPicker.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { defaultProps, propTypes } from '../components/ColorPicker.react';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

const DEFAULT_COLOR = colors.PRIMARY;

const parseValue = value => {
  value = value || {};

  if (value.rgb) {
    const rgba = value.rgb;
    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  }

  if (value.hex)
    return Color(value.hex)
      .rgb()
      .string();

  return DEFAULT_COLOR;
};

const componentToHex = c => {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

// converts color from rgb to hexadecimal.
const rgbToHex = ({ r, g, b, a }) => {
  return (
    '#' +
    componentToHex(r) +
    componentToHex(g) +
    componentToHex(b) +
    (Math.round(a * 255) + 0x10000)
      .toString(16)
      .substr(-2)
      .toUpperCase()
  );
};

/**
 * A color picker.
 */
class ColorPicker extends Component {
  constructor(props) {
    super(props);

    let newValue = props.value;
    if (props.value && !props.value.hex && props.value.rgb) {
      const value = rgbToHex(props.value.rgb);
      newValue = { hex: value, rgb: props.value.rgb };
      if (this.props.setProps) this.props.setProps({ value: newValue });
    }
    this.state = {
      value: newValue
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
    const { id, className, style, theme } = this.props;

    const elementName = getClassName('colorpicker', theme);

    const filteredProps = getFilteredProps(this.props);

    return (
      <div id={id} className={elementName + (className ? ' ' + className : '')} style={style}>
        <LabelContainer className={elementName + '__label'} {...filteredProps}>
          <Container
            className={elementName + '__container'}
            {...filteredProps}
            glow={this.calcHandleGlow}
          >
            <ChromePicker
              className={elementName + '__chromepicker'}
              color={parseValue(this.state.value)}
              onChangeComplete={this.setValue}
            />
          </Container>
        </LabelContainer>
      </div>
    );
  }
}

ColorPicker.defaultProps = defaultProps;
ColorPicker.propTypes = propTypes;

export default withTheme(ColorPicker);
