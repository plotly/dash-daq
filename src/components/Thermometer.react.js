import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Bulb, CurrentValueContainer, ThermometerContainer } from '../styled/Thermometer.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { TankContainer, TankFill, TickContainer, Tick, Container } from '../styled/Tank.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import { light } from '../styled/constants';

import log from '../helpers/logarithm';
import { sanitizeRangeValue, computeProgress } from '../helpers/util';
import generateScale from '../helpers/scale';

const WIDTH = 20;

/**
 * A thermometer component that
 * fills to a value between some
 * range
 */
const Thermometer = props => {
  const {
    min,
    max,
    id,
    className,
    style,
    logarithmic,
    base,
    showCurrentValue,
    units,
    theme,
    color,
    size
  } = props;

  const dirtyValue = logarithmic ? log.compute(props.value, base) : props.value;
  const value = sanitizeRangeValue({ min, max, value: dirtyValue });

  const formatter = logarithmic ? log.generateLogFormatter({ base }) : null;
  const scale = generateScale({ ...props, formatter });

  const renderTicks = () => {
    return Object.entries(scale).map(([k, v]) => (
      <Tick key={k} xPosition={computeProgress({ min, max, value: k })}>
        <div className="tick" />
        <div className="label" style={v && v.style ? v.style : null}>
          {(v && v.label) || v}
        </div>
      </Tick>
    ));
  };

  const scaleContainer = <TickContainer xPositioned={scale}>{renderTicks()}</TickContainer>;

  const currentValue = (
    <CurrentValueContainer>
      <CurrentValue valueColor={color} units={units} css={'top: 0;'}>
        {logarithmic ? log.formatValue(value, base) : value.toFixed(1)}
      </CurrentValue>
    </CurrentValueContainer>
  );

  return (
    <div id={id} className={className} style={style}>
      <LabelContainer
        {...props}
        labelCSS={props.labelPosition === 'top' ? null : 'transform: translateY(-30px);'}
      >
        <ThermometerContainer>
          <Container thermometer xPositioned={scale}>
            {scaleContainer}
            <TankContainer thermometer size={size} width={`${WIDTH}px`}>
              <TankFill
                thermometer
                color={color}
                height={`${computeProgress({ min, max, value })}%`}
              />
              {theme.dark ? null : <Bulb on={value !== min} color={color} />}
            </TankContainer>
          </Container>
          {showCurrentValue && currentValue}
        </ThermometerContainer>
      </LabelContainer>
    </div>
  );
};

Thermometer.defaultProps = {
  min: 0,
  max: 10,
  size: 192,
  base: 10,
  labelPosition: 'top',
  theme: light
};

Thermometer.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of thermometer. If logarthmic, the value
   * displayed will be the logarithm of the inputted value.
   */
  value: PropTypes.number,

  /**
   * The size (height) of the thermometer in pixels
   */
  size: PropTypes.number,

  /**
   * The color of the thermometer fill/current value text
   */
  color: PropTypes.string,

  /**
   * The minimum value of the thermometer. If logarithmic,
   * represents the minimum exponent.
   */
  min: PropTypes.number,

  /**
   * The maximum value of the thermometer. If logarithmic,
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
   * If true, the current value of the
   * thermometer will be displayed
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
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object
};

export default withTheme(Thermometer);
