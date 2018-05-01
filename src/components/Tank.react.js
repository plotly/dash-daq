import React from 'react';
import PropTypes from 'prop-types';

import { TankContainer, TankFill, TickContainer, Tick, Container } from '../styled/Tank.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import log from '../helpers/logarithm';
import { computeProgress, sanitizeRangeValue } from '../helpers/util';
import generateScale from '../helpers/scale';

/**
 * A Tank component that fills to
 * a value between some range.
 */
const Tank = props => {
  const {
    min,
    max,
    showCurrentValue,
    units,
    className,
    id,
    style,
    color,
    logarithmic,
    base,
    size
  } = props;

  const dirtyValue = logarithmic ? log.compute(props.value, base) : props.value;
  const value = sanitizeRangeValue({ min, max, value: dirtyValue });
  const percentageFill = computeProgress({ min, max, value });

  const formatter = logarithmic ? log.generateLogFormatter({ base }) : null;
  const scale = generateScale({ ...props, formatter });

  const renderTicks = () => {
    return Object.entries(scale).map(([k, v]) => (
      <Tick key={k} xPosition={computeProgress({ min, max, value: k })}>
        <div className="tick" />
        <div className="label">
          <div style={v && v.style ? v.style : null}>{(v && v.label) || v}</div>
        </div>
      </Tick>
    ));
  };

  const scaleContainer = <TickContainer xPositioned={scale}>{renderTicks()}</TickContainer>;
  const currentValue = (
    <CurrentValue units={units} valueColor="#535D63">
      {logarithmic ? log.formatValue(value, base) : value}
    </CurrentValue>
  );

  return (
    <div className={className} id={id} style={style}>
      <LabelContainer {...props}>
        <Container>
          {scaleContainer}
          <TankContainer size={size}>
            <TankFill color={color} height={`${percentageFill}%`} />
            {showCurrentValue && currentValue}
          </TankContainer>
        </Container>
      </LabelContainer>
    </div>
  );
};

Tank.defaultProps = {
  min: 0,
  max: 10,
  size: 192,
  base: 10,
  labelPosition: 'top'
};

Tank.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of tank. If logarithmic, the displayed value
   * will be the logarithm of the inputted value.
   */
  value: PropTypes.number,

  /**
   * The size (height) of the tank in pixels
   */
  size: PropTypes.number,

  /**
   * The color of tank fill
   */
  color: PropTypes.string,

  /**
   * The minimum value of the tank. If logarithmic,
   * represents minimum exponent.
   */
  min: PropTypes.number,

  /**
   * The maximum value of the tank. If logarithmic,
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
   * If true, the current value of the tank
   * will be displayed
   */
  showCurrentValue: PropTypes.bool,

  /**
   * Label for the current value
   */
  units: PropTypes.string,

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
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object
};

export default Tank;
