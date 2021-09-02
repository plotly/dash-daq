import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Container, Digit, ExponentialDigit } from '../styled/PrecisionInput.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { light, colors } from '../styled/constants';
import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';
import Input from './../helpers/NumericInput';

const defaultRootStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
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

  UNSAFE_componentWillReceiveProps(newProps) {
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
    const { id, className, style, size, theme, disabled, precision, min, max } = this.props;

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
      width: size || 56 + precision * 20,
      height: 36,
      backgroundColor: theme.dark ? '#22272a' : '#fff',
      color: theme.dark ? '#fff' : '#000',
      fontSize: 14,
      lineHeight: 14,
      boxSizing: 'border-box'
    };

    const elementName = getClassName('precisioninput', theme.dark);

    const filteredProps = getFilteredProps(this.props);

    let precisionElement;

    if (this.state.isInput) {
      precisionElement = (
        <Input
          autoFocus
          className={elementName + '__input'}
          disabled={disabled}
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
          min={min}
          max={max}
          value={this.state.tempValue}
          onChange={this.setTempValue}
          onBlur={this.blur}
        />
      );
    } else {
      precisionElement = (
        <PrecisionOutput
          elementName={elementName + '__output'}
          value={this.state.value}
          size={size}
          onClick={this.toggleInput}
          color={theme.dark ? '#fff' : colors.OFF_WHITE}
        />
      );
    }

    return (
      <div
        id={id}
        className={elementName + (className ? ' ' + className : '')}
        style={Object.assign({}, defaultRootStyles, style)}
      >
        <LabelContainer className={elementName + '__label'} {...filteredProps}>
          {precisionElement}
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

const PrecisionOutput = ({ value, onClick, size, elementName }) => {
  const [characteristic, mantissa] = toScientificNotation(value).split('e');
  const characteristicDigits = mergeLeadingNegative(characteristic.split(''));
  const mantissaDigits = mergeLeadingNegative(mantissa.split(''));

  return (
    <Container size={size} onClick={onClick} className={elementName}>
      {characteristicDigits.map((digit, i) => (
        <Digit className={elementName + '__digit'} key={`d${i}`}>
          {digit}
        </Digit>
      ))}
      <ExponentialDigit className={elementName + '__exp'}>E</ExponentialDigit>
      {mantissaDigits.map((digit, i) => (
        <ExponentialDigit className={elementName + '__expdigit'} key={`e${i}`}>
          {digit}
        </ExponentialDigit>
      ))}
    </Container>
  );
};

PrecisionInput.defaultProps = {
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  theme: light,
  labelPosition: 'top',
  precision: 2,
  persisted_props: ['value'],
  persistence_type: 'local'
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
  setProps: PropTypes.func,

  /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
  persistence: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),

  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

const ThemedPrecisionInput = withTheme(PrecisionInput);
ThemedPrecisionInput.defaultProps = PrecisionInput.defaultProps;
export default ThemedPrecisionInput;
