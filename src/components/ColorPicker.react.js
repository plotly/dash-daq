import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { withTheme } from 'styled-components';
import Color from 'color';

import { colors, light } from '../styled/constants';
import { Container } from '../styled/ColorPicker.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

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

  componentWillReceiveProps(newProps) {
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

ColorPicker.defaultProps = {
  size: 225,
  theme: light,
  labelPosition: 'top'
};

ColorPicker.propTypes = {
  /**
   * The ID used to identify the color picker in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Color value of the picker
   */
  value: PropTypes.shape({
    /**
     * Hex string
     */
    hex: PropTypes.string,

    /**
     * RGB/RGBA object
     */
    rbg: PropTypes.shape({
      r: PropTypes.number,
      g: PropTypes.number,
      b: PropTypes.number,
      a: PropTypes.number
    })
  }),

  /**
   * If true, color cannot be picked.
   */
  disabled: PropTypes.bool,

  /**
   * Size (width) of the component in pixels
   */
  size: PropTypes.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
   */
  label: PropTypes.oneOfType([
    /**
     * Label to be displayed
     */
    PropTypes.string,

    /**
     * The style and label
     */
    PropTypes.shape({
      style: PropTypes.object,
      label: PropTypes.string
    })
  ]),

  /**
   * Where the indicator label is positioned
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: PropTypes.string,

  /**
   * Dash-assigned callback that gets fired when
   * the color picker's value changes
   */
  setProps: PropTypes.func,

  /**
   * Style to apply to the root component element
   */
  style: PropTypes.object
};

export default withTheme(ColorPicker);
