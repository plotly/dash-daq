import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { default as Input } from 'react-numeric-input';

import { Container, Digit, ExponentialDigit } from '../styled/PrecisionInput.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { light, colors } from '../styled/constants';

const defaultRootStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
};

/**
 * A numeric input component that converts
 * an input value to the desired precision.
 */
class PrecisionInput extends Component {
  constructor(props) {
    super(props);

    this.formatPrecision = this.formatPrecision.bind(this);
    this.setTempValue = this.setTempValue.bind(this);
    this.blur = this.blur.bind(this);
    this.setValue = this.setValue.bind(this);
    this.toggleInput = this.toggleInput.bind(this);

    this.state = {
      value:
        props.value != null ? this.formatPrecision(props.value) : this.formatPrecision(props.min),
      isInput: false,
      tempValue: null
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value != null && newProps.value !== this.state.value)
      this.setState({ value: this.formatPrecision(newProps.value) });
  }

  formatPrecision(value) {
    return Number(Number(value.toPrecision(this.props.precision)));
  }

  setValue(value) {
    if (value != null && value >= this.props.min && value <= this.props.max) {
      const newValue = this.formatPrecision(value);
      this.setState({ value: newValue });
      if (this.props.setProps) {
        this.props.setProps({ value: newValue });
      }
    }
  }

  toggleInput() {
    if (this.props.disabled) return;

    const isInput = !this.state.isInput;
    this.setState({ isInput });

    if (isInput) {
      this.setState({ tempValue: this.state.value });
    }
  }

  setTempValue(tempValue) {
    this.setState({ tempValue });
  }

  blur() {
    if (this.state.tempValue != null) {
      this.setValue(this.state.tempValue);
    }
    this.setState({ tempValue: null });

    this.toggleInput();
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

    const MINIMUM_PADDING = 10;
    const dynamicPadding = this.state.value ? 16 - 2 * this.state.value.toString().length : 16;
    const padding = Math.max(dynamicPadding, MINIMUM_PADDING);

    const inputStyle = {
      borderRadius: 3,
      border: theme.dark ? 'none' : `1px solid ${colors.GREY}`,
      outline: 'none',
      paddingRight: padding,
      paddingLeft: padding,
      paddingTop: 4,
      paddingBottom: 4,
      width: size || 56 + this.props.precision * 20,
      height: 36,
      color: theme.dark ? '#fff' : colors.OFF_WHITE,
      fontSize: 14,
      lineHeight: 14,
      boxSizing: 'border-box'
    };

    const precisionInput = (
      <Input
        autoFocus
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
        value={this.state.tempValue}
        onChange={this.setTempValue}
        onBlur={this.blur}
      />
    );

    const precisionOutput = (
      <PrecisionOutput value={this.state.value} size={this.props.size} onClick={this.toggleInput} />
    );

    return (
      <div
        id={this.props.id}
        className={this.props.className}
        style={Object.assign(defaultRootStyles, this.props.style)}
      >
        <LabelContainer {...this.props}>
          {this.state.isInput ? precisionInput : precisionOutput}
        </LabelContainer>
      </div>
    );
  }
}

const toScientificNotation = value => {
  const scientificNum = Number(value).toExponential();
  return scientificNum.replace('+', '');
};

const mergeLeadingNegative = digits => {
  if (digits[0] === '-') {
    digits.shift();
    const leading = digits.shift();
    digits.unshift(`-${leading}`);
  }

  return digits;
};

const PrecisionOutput = ({ value, onClick, size }) => {
  const [characteristic, mantissa] = toScientificNotation(value).split('e');
  const characteristicDigits = mergeLeadingNegative(characteristic.split(''));
  const mantissaDigits = mergeLeadingNegative(mantissa.split(''));

  return (
    <Container size={size} onClick={onClick}>
      {characteristicDigits.map((digit, i) => (
        <Digit key={`d${i}`}>{digit}</Digit>
      ))}
      <ExponentialDigit>E</ExponentialDigit>
      {mantissaDigits.map((digit, i) => (
        <ExponentialDigit key={`e${i}`}>{digit}</ExponentialDigit>
      ))}
    </Container>
  );
};

PrecisionInput.defaultProps = {
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  theme: light,
  labelPosition: 'top'
};

PrecisionInput.propTypes = {
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
   * Number of significant figures
   */
  precision: PropTypes.number.isRequired,

  /**
   * If true, numeric input cannot be changed.
   */
  disabled: PropTypes.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the scientific notation. To control styling,
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

export default withTheme(PrecisionInput);
