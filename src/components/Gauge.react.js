import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import GaugeSVG from '../helpers/GaugeSvg.react';
import Container from '../styled/Gauge.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import { light } from '../styled/constants';

/**
 * A Gauge component that points to
 * a value between some range.
 */
const Gauge = props => {
  const { max, min, step, marks, showCurrentValue, units, theme, id, className, style } = props;
  const value = props.value || min;

  const normalizedValue = Math.max(Math.min(value, max), min);
  const progress = normalizedValue * 1.0 / max;

  const currentValue = (
    <CurrentValue units={units} css={'transform: translateY(-150%); top: 0;'}>
      {normalizedValue.toFixed(1)}
    </CurrentValue>
  );

  return (
    <div id={id} className={className} style={style}>
      <LabelContainer
        {...props}
        labelCSS={props.labelPosition === 'top' ? null : 'transform: translateY(-80px);'}
      >
        <Container>
          <GaugeSVG
            min={min}
            max={max}
            step={step}
            marks={marks}
            progress={progress}
            theme={theme}
          />
          {showCurrentValue && currentValue}
        </Container>
      </LabelContainer>
    </div>
  );
};

Gauge.defaultProps = {
  min: 0,
  max: 10,
  step: 1,
  theme: light,
  labelPosition: 'top'
};

Gauge.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of gauge
   */
  value: PropTypes.number,

  /**
   * The minimum value of the gauge
   */
  min: PropTypes.number,

  /**
   * The maximum value of the gauge
   */
  max: PropTypes.number,

  /**
   * Interval by which marks appear
   */
  step: PropTypes.number,

  /**
   * If true, the current value of the gauge
   * will be displayed
   */
  showCurrentValue: PropTypes.bool,

  /**
   * Label for the current value
   */
  units: PropTypes.string,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
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
   * Where the component label is positioned.
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   *  Ticks on the gauge. The key determines the position
   * and the value determines what will show. If you want
   * to set the style of a specific mark point, the value
   * should be an object which contains style and label
   * properties.
   */
  marks: PropTypes.shape({
    number: PropTypes.oneOfType([
      /**
       * label for the mark
       */
      PropTypes.string,

      /**
       * style object and label for the mark
       */
      PropTypes.shape({
        style: PropTypes.object,
        label: PropTypes.string
      })
    ])
  }),

  /**
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object
};

export default withTheme(Gauge);
