import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { default as Input } from 'react-numeric-input';

import LabelContainer from '../styled/shared/LabelContainer.styled';

import { light, colors } from '../styled/constants';

/**
 * A numeric input component that can be
 * set to a value between some range.
 */
class NumericInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || props.min
    };

    this.setValue = this.setValue.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.state.value) this.setState({ value: newProps.value });
  }

  setValue(value) {
    if (value != null && value >= this.props.min && value <= this.props.max) {
      this.setState({ value });
      if (this.props.setProps) this.props.setProps({ value });
    }
  }

  render() {
    const { size, theme } = this.props;

    const buttonStyle = {
      background: 'none',
      boxShadow: 'none',
      border: 'none',
      color: theme.secondary,
      cursor: 'pointer'
    };

    const padding = Math.max(
      this.state.value ? 16 - 2 * this.state.value.toString().length : 16,
      10
    );

    const inputStyle = {
      borderRadius: 3,
      border: theme.dark ? 'none' : `1px solid ${colors.GREY}`,
      outline: 'none',
      paddingRight: padding,
      paddingLeft: padding,
      paddingTop: 8,
      paddingBottom: 8,
      width: size || 56,
      color: theme.dark ? '#fff' : colors.OFF_WHITE,
      fontSize: 14,
      boxSizing: 'border-box'
    };

    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <LabelContainer {...this.props}>
          <Input
            disabled={this.props.disabled}
            style={{
              input: inputStyle,
              'input:not(.form-control)': inputStyle,
              btn: buttonStyle,
              'btn:hover': buttonStyle,
              'btn:active': buttonStyle,
              'input:disabled': {
                opacity: 0.65,
                cursor: 'not-allowed'
              }
            }}
            min={this.props.min}
            max={this.props.max}
            value={this.state.value}
            onChange={this.setValue}
            mobile={false}
          />
        </LabelContainer>
      </div>
    );
  }
}

NumericInput.defaultProps = {
  min: 0,
  max: 10,
  theme: light,
  labelPosition: 'top'
};

NumericInput.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of numeric input
   */
  value: PropTypes.number,

  /**
   * The size (length) of the numeric input in pixels
   */
  size: PropTypes.number,

  /**
   * The minimum value of the numeric input
   */
  min: PropTypes.number,

  /**
   * The maximum value of the numeric input
   */
  max: PropTypes.number,

  /**
   * If true, numeric input cannot changed.
   */
  disabled: PropTypes.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties.
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
   * Where the numeric input label is positioned.
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object,

  /**
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: PropTypes.func
};

export default withTheme(NumericInput);
