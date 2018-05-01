import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import { withTheme } from 'styled-components';

import IndicatorLight from '../styled/shared/Indicator.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { colors, light } from '../styled/constants';

/**
 * A boolean indicator LED.
 */
const Indicator = props => {
  const bg = color(props.color)
    .desaturate(0.2)
    .lighten(0.2)
    .rgb()
    .toString();

  return (
    <div id={props.id} className={props.className} style={props.style}>
      <LabelContainer {...props}>
        <IndicatorLight
          size={props.size}
          width={props.width}
          height={props.height}
          rectangular={props.width && props.height}
          main={true}
          on={props.value}
          primary={props.color}
          secondary={!props.theme.dark && bg}
        />
      </LabelContainer>
    </div>
  );
};

Indicator.defaultProps = {
  color: colors.DARKER_PRIMARY,
  size: 15,
  theme: light,
  labelPosition: 'top'
};

Indicator.propTypes = {
  /**
   * The ID used to identify the indicator in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * If true, indicator is illuminated
   */
  value: PropTypes.bool,

  /**
   * Color of the indicator
   */
  color: PropTypes.string,

  /**
   * Size of the component. Either use this or width and height
   */
  size: PropTypes.number,

  /**
   * Width of the component. Set both width and height for a rectangular indicator
   */
  width: PropTypes.number,

  /**
   * Height of the component. Set both width and height for a rectangular indicator
   */
  height: PropTypes.number,

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
  labelPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),

  /**
   * Class to apply to the root component element
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element
   */
  style: PropTypes.object
};

export default withTheme(Indicator);
