import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import {
  TankContainer,
  TankFill,
  TickContainer,
  Tick,
  Container,
  ExceededWarning
} from '../styled/Tank.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import log from '../helpers/logarithm';
import { computeProgress, sanitizeRangeValue } from '../helpers/util';
import generateScale from '../helpers/scale';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';
import { light } from '../styled/constants';

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
    height,
    width,
    theme
  } = props;

  const warningPara = useRef(null);

  const dirtyValue = logarithmic ? log.compute(props.value, base) : props.value;
  const currentDisplayValue = dirtyValue;
  const value = sanitizeRangeValue({ min, max, value: dirtyValue });
  const colorValue = props.textColor || color;
  const percentageFill = computeProgress({ min, max, value });

  const formatter = logarithmic ? log.generateLogFormatter({ base }) : null;
  const scale = generateScale({ ...props, formatter });

  const elementName = getClassName('tank', theme);

  const currentValueStyle =
    props.currentValueStyle || (theme.dark ? { color: 'white' } : { color: 'black' });

  const renderTicks = () => {
    return Object.entries(scale).map(([k, v]) => (
      <Tick
        className={elementName + '__tick'}
        key={k}
        color={colorValue}
        xPosition={computeProgress({ min, max, value: k })}
      >
        <div className="tick" />
        <div className="label">
          <div style={v && v.style ? v.style : null}>{(v && v.label) || v}</div>
        </div>
      </Tick>
    ));
  };

  const scaleContainer = <TickContainer xPositioned={scale}>{renderTicks()}</TickContainer>;
  const currentValue = (
    <CurrentValue units={units} valueColor={colorValue} customStyle={currentValueStyle}>
      {logarithmic ? log.formatValue(currentDisplayValue, base) : currentDisplayValue}
    </CurrentValue>
  );

  const filteredProps = getFilteredProps(props);

  useEffect(() => {
    let currValue = logarithmic ? Math.pow(base || 10, currentDisplayValue) : currentDisplayValue;
    let maximum = logarithmic ? Math.pow(base || 10, max) : max;
    let minimum = logarithmic ? Math.pow(base || 10, min) : min;
    if (currValue > maximum) {
      let str = '';
      warningPara.current.innerHTML = props.exceedMessage
        ? typeof props.exceedMessage == 'string'
          ? props.exceedMessage
          : props.exceedMessage(currValue, maximum) || str
        : str;
    } else if (currValue < minimum) {
      let str = '';
      warningPara.current.innerHTML = props.lagingMessage
        ? typeof props.lagingMessage == 'string'
          ? props.lagingMessage
          : props.lagingMessage(currValue, minimum) || str
        : str;
    } else {
      warningPara.current.innerHTML = '';
    }
  }, [currentDisplayValue]);

  return (
    <div className={elementName + (className ? ' ' + className : '')} id={id} style={style}>
      <ExceededWarning ref={warningPara} />
      <LabelContainer className={elementName + '__label'} {...filteredProps}>
        <Container>
          {scaleContainer}
          <TankContainer className={elementName + '__container'} height={height} width={width}>
            <TankFill
              className={elementName + '__fill'}
              color={color}
              height={`${percentageFill}%`}
            />
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
  height: 192,
  width: 112,
  base: 10,
  labelPosition: 'top',
  theme: light
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
   * The height of the tank in pixels
   */
  height: PropTypes.number,

  /**
   * The width of the tank in pixels
   */
  width: PropTypes.number,

  /**
   * The color of tank fill
   */
  color: PropTypes.string,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * text style of current value
   */
  currentValueStyle: PropTypes.object,

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
  style: PropTypes.object,

  /**
   * Warning message when value exceed max
   */
  exceedMessage: PropTypes.oneOfType([PropTypes.string]),

  /**
   * Warning message when value is laging from min
   */
  lagingMessage: PropTypes.oneOfType([PropTypes.string]),

  /**
   * text color
   */
  textColor: PropTypes.string
};

export default withTheme(Tank);
