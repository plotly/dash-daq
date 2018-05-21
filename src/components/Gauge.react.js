import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import GaugeSVG from '../helpers/GaugeSvg.react';
import Container from '../styled/Gauge.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import { light } from '../styled/constants';

import { sanitizeRangeValue, computeProgress } from '../helpers/util';
import log from '../helpers/logarithm';
import generateScale from '../helpers/scale';
import { getColorValue } from '../helpers/colorRanges';

/**
 * A Gauge component that points to
 * a value between some range.
 */
class Gauge extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    require('conic-gradient');
  }

  render() {
    const {
      color,
      max,
      min,
      showCurrentValue,
      units,
      logarithmic,
      base,
      id,
      className,
      style
    } = this.props;

    const colorValue = getColorValue(color);

    const rawValue = this.props.value != null ? this.props.value : min;
    const dirtyValue = logarithmic ? log.compute(rawValue) : rawValue;
    const value = sanitizeRangeValue({ min, max, value: dirtyValue });

    const formatter = logarithmic ? log.generateLogFormatter({ base, isSVG: true }) : null;
    const scale = generateScale({ ...this.props, formatter });

    const progress = computeProgress({ min, max, value, progressionTarget: 1 });

    const currentValue = (
      <CurrentValue
        valueColor={colorValue}
        units={units}
        css={'transform: translateY(-150%); top: 0;'}
      >
        {logarithmic ? log.formatValue(value, base) : value.toFixed(1)}
      </CurrentValue>
    );

    return (
      <div id={id} className={className} style={style}>
        <LabelContainer
          {...this.props}
          labelCSS={this.props.labelPosition === 'top' ? null : 'transform: translateY(-80px);'}
        >
          <Container color={colorValue}>
            <GaugeSVG {...{ ...this.props, scale }} progress={progress} />
            {showCurrentValue && currentValue}
          </Container>
        </LabelContainer>
      </div>
    );
  }
}

Gauge.defaultProps = {
  min: 0,
  max: 10,
  base: 10,
  theme: light,
  labelPosition: 'top'
};

Gauge.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of gauge. If logarithmic, the displayed
   * value will be the logarithm of the inputted value.
   */
  value: PropTypes.number,

  /**
   * The size (diameter) of the gauge in pixels
   */
  size: PropTypes.number,

  /**
   * The minimum value of the gauge. If logarithmic,
   * represents the minimum exponent.
   */
  min: PropTypes.number,

  /**
   * The maximum value of the gauge. If logarithmic,
   * represents the maximum exponent.
   */
  max: PropTypes.number,

  /**
   * Base to be used in logarithmic scale.
   */
  base: PropTypes.number,

  /**
   * If set to true, a logarithmic scale will be
   * used.
   */
  logarithmic: PropTypes.bool,

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
   * Configuration for the component scale.
   */
  scale: PropTypes.shape({
    /**
     * Value to start the scale from. Defaults
     * to min.
     */
    start: PropTypes.number,

    /**
     * Interval by which the scale goes up. Attempts
     * to dynamically divide min-max range by
     * default.
     */
    interval: PropTypes.number,

    /**
     * Interval by which labels are added to
     * scale marks. Defaults to 2 (every other
     * mark has a label).
     */
    labelInterval: PropTypes.number,

    /**
     * Custom scale marks. The key determines the position
     * and the value determines what will show. If you want
     * to set the style of a specific mark point, the value
     * should be an object which contains style and label
     * properties
     */
    custom: PropTypes.oneOfType([
      /**
       * Label for the mark
       */
      PropTypes.number,

      /**
       * Style object with label
       */
      PropTypes.shape({
        style: PropTypes.string,
        label: PropTypes.string
      })
    ])
  }),

  /**
   * Color configuration for the gauge's track.
   */
  color: PropTypes.oneOfType([
    /**
     * Color used for gauge's track/indicator
     */
    PropTypes.string,
    /**
     * Color ranges configuration.
     */
    PropTypes.shape({
      /**
       * Color used for current value text and other minor accents
       */
      default: PropTypes.string,
      /**
       * Display ranges as a gradient between given colors.
       */
      gradient: PropTypes.bool,
      /**
       * Define multiple color ranges on the gauge's track.
       * The key determines the color of the range and
       * the value is the start,end of the range itself.
       * Ranges must be contiguous along the entirety
       * of the gauge's range of values.
       */
      ranges: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.number)
      })
    })
  ]),

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
