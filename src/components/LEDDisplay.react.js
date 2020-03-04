import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Digit } from '../helpers/LEDDisplaySvg.react';
import { LEDContainer } from '../styled/LEDDisplay.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { colors, light } from '../styled/constants';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

const VALID_INPUT = /^(\-)?((\.|:)?[0-9])*$/;
const isValidInput = VALID_INPUT.test.bind(VALID_INPUT);

/**
 * A 7-bar LED display component.
 */
const LEDDisplay = props => {
  const elementName = getClassName('leddisplay', props.theme);
  const digits = isValidInput(props.value) ? extractDigits(props, elementName) : null;
  const led = <LEDContainer backgroundColor={props.backgroundColor}>{digits}</LEDContainer>;

  const filteredProps = getFilteredProps(props);

  return (
    <div
      id={props.id}
      className={elementName + (props.className ? ' ' + props.className : '')}
      style={props.style}
    >
      <LabelContainer {...filteredProps}>{digits ? led : 'Invalid Input'}</LabelContainer>
    </div>
  );
};

function extractDigits({ value, color, backgroundColor, theme, size }, elementName) {
  const digitStack = value
    .toString()
    .split('')
    .reverse();

  const formattedDigits = [];

  addLeadingZeroIfNeeded(digitStack);

  let currKey = 0;
  while (digitStack.length) {
    const currDigit = digitStack.pop();
    const nextDigit = digitStack.pop();

    formattedDigits.push(
      <Digit
        className={elementName + '__digit'}
        theme={theme}
        key={currKey++}
        value={currDigit}
        hasColon={nextDigit === ':'}
        hasDecimal={nextDigit === '.'}
        color={color}
        backgroundColor={backgroundColor}
        size={size}
      />
    );

    if (nextDigit && nextDigit !== '.' && nextDigit !== ':') digitStack.push(nextDigit);
  }

  return formattedDigits;
}

function addLeadingZeroIfNeeded(digits) {
  let isNegative = false;

  if (digits[digits.length - 1] === '-') {
    isNegative = true;
    digits.pop();
  }
  const leadingDigit = digits[digits.length - 1];

  if (['.', ':'].includes(leadingDigit)) digits.push('0');
  if (isNegative) digits.push('-');
}

LEDDisplay.defaultProps = {
  color: colors.PRIMARY,
  backgroundColor: '#fff',
  size: 42,
  theme: light,
  labelPosition: 'top'
};

LEDDisplay.propTypes = {
  /**
   * The ID used to identify the display in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Value to be displayed. A number or a string
   * containing only digits (0-9), periods, and colons,
   * and possibly starting with a minus sign.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Color of the display
   */
  color: PropTypes.string,

  /**
   * Color of the display's background
   */
  backgroundColor: PropTypes.string,

  /**
   * Size of the display
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
   * Where the display label is positioned
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element
   */
  style: PropTypes.object
};

export default withTheme(LEDDisplay);
