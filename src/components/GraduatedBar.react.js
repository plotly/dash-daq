import React from 'react';
import PropTypes from 'prop-types';

import { light } from '../styled/constants';
import { getColorValue, isContiguous, getGradientObject } from '../helpers/colorRanges';
import { Container, Block, Value } from '../styled/GraduatedBar.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

const valueColor = (value, color) => {
  const entry = Object.entries(color.ranges).filter(
    ([, range]) => value >= range[0] && value <= range[1]
  )[0];

  return entry && entry[0];
};

/**
 * A graduated bar component that displays
 * a value within some range as a
 * percentage.
 */
const GraduatedBar = props => {
  const {
    step,
    min,
    max,
    label,
    labelPosition,
    id,
    className,
    color,
    size,
    style,
    showCurrentValue,
    vertical
  } = props;
  const value = props.value || min;

  let gradient = null;
  const progressBlocks = [];
  const normalizedValue = Math.max(Math.min(max, value), min);

  if (color.gradient && isContiguous({ color, min, max })) {
    gradient = getGradientObject({ color, min, max });
  }

  for (let i = min; i < normalizedValue; i += step) {
    let blockProps = { ...props, color: getColorValue(color) };

    if (color.ranges && valueColor(i, color)) {
      blockProps = { ...props, color: valueColor(i, color) };
    }

    progressBlocks.push(
      <Block key={i} progress={i / (max - min)} gradient={gradient} {...blockProps} />
    );
  }

  let percent = (normalizedValue / (max - min)) * 100;
  if (!isFinite(percent)) percent = 0;

  return (
    <div id={id} className={className} style={style}>
      <LabelContainer label={label} labelPosition={labelPosition}>
        <Container vertical={vertical} size={size}>
          {progressBlocks}
          {showCurrentValue && <Value vertical={vertical}>{percent.toFixed(0)}%</Value>}
        </Container>
      </LabelContainer>
    </div>
  );
};

GraduatedBar.defaultProps = {
  min: 0,
  max: 10,
  size: 250,
  step: 0.5,
  labelPosition: 'top',
  color: light.primary
};

GraduatedBar.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of the graduated bar
   */
  value: PropTypes.number,

  /**
   * Color configuration for the graduated bar's
   * progress blocks.
   */
  color: PropTypes.oneOfType([
    /**
     * Color used for graduated bar's track/indicator
     */
    PropTypes.string,
    /**
     * Color ranges configuration.
     */
    PropTypes.shape({
      /**
       * Fallback color to use when color.ranges
       * has gaps.
       */
      default: PropTypes.string,
      /**
       * Display ranges as a gradient between given colors.
       * Requires color.ranges to be contiguous along
       * the entirety of the graduated bar's range of values.
       */
      gradient: PropTypes.bool,
      /**
       * Define multiple color ranges on the graduated bar's track.
       * The key determines the color of the range and
       * the value is the start,end of the range itself.
       */
      ranges: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.number)
      })
    })
  ]),

  /**
   * The size (length) of the graduated bar in pixels
   */
  size: PropTypes.number,

  /**
   * If true, will display bar vertically instead of horizontally
   */
  vertical: PropTypes.bool,

  /**
   * The minimum value of the graduated bar
   */
  min: PropTypes.number,

  /**
   * The maximum value of the graduated bar
   */
  max: PropTypes.number,

  /**
   * Value by which progress blocks appear
   */
  step: PropTypes.number,

  /**
   * If true, the current percentage
   *  of the bar will be displayed
   */
  showCurrentValue: PropTypes.bool,

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
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object
};

export default GraduatedBar;
