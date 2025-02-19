import React from 'react';
import PropTypes from 'prop-types';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';
import DirectionCompassSVG from '../helpers/DirectionCompassSVG';
import { light } from '../styled/constants';
import CurrentValue from '../styled/CurrentValue.styled';
import LabelContainer from './../styled/shared/LabelContainer.styled';

const DirectionCompass = props => {
  const { id, size, direction, showCurrentValue } = props;

  const filteredProps = getFilteredProps(props);

  const elementName = getClassName('direction-compass');

  const currentValue = (
    <CurrentValue
      className={elementName + '__current-value'}
      valueSize={((size + 32) * 13.3333) / 100}
      css={'transform: translateY(0%); top: 0;'}
    >
      {direction}
    </CurrentValue>
  );

  return (
    <div id={id} className={elementName}>
      <LabelContainer
        {...filteredProps}
        labelCSS={props.labelPosition === 'top' ? null : 'transform: translateY(-50%);'}
      >
        <DirectionCompassSVG size={size} {...filteredProps} />
        {showCurrentValue && currentValue}
      </LabelContainer>
    </div>
  );
};

DirectionCompass.defaultProps = {
  size: 150,
  direction: 0,
  label: '',
  labelPosition: 'bottom',
  theme: light
};

DirectionCompass.propTypes = {
  /**
   * id of root element
   */
  id: PropTypes.string,

  /**
   * size of compass
   */
  size: PropTypes.number,

  /**
   * position of label either top or bottom
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * label text
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ label: PropTypes.string, style: PropTypes.object })
  ]),

  /**
   * angle(degrees) of needle of compass
   */
  direction: PropTypes.number,

  /**
   * theme provider
   */
  theme: PropTypes.shape({
    /**
     * Highlight color
     */
    primary: PropTypes.string,
    /**
     * Supporting color
     */
    secondary: PropTypes.string,
    /**
     * Color used for UI details, like borders
     */
    detail: PropTypes.string,
    /**
     * True for Dark mode, false for Light
     */
    dark: PropTypes.bool
  }),

  /**
   * show current value
   */
  showCurrentValue: PropTypes.bool
};

export default DirectionCompass;
