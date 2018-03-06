import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Bulb, CurrentValueContainer, ThermometerContainer } from '../styled/Thermometer.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { TankContainer, TankFill, TickContainer, Tick, Container } from '../styled/Tank.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import { light } from '../styled/constants';

const WIDTH = 20;

/**
 * A thermometer component that
 * fills to a value between some
 * range
 */
const Thermometer = props => {
  const { min, max, step, id, className, style, marks, showCurrentValue, units, theme } = props;
  const value = Math.max(Math.min(props.value, max), min);

  const renderTicks = () => {
    if (!marks) {
      const values = [];
      for (let i = min; i <= max; i += step) {
        values.unshift(i);
      }

      return values.map((v, i) => {
        return (
          <Tick key={i}>
            <div className="label">{v}</div>
            <div className="tick" />
          </Tick>
        );
      });
    }

    return Object.entries(marks).map(([k, v]) => (
      <Tick key={k} xPosition={(parseInt(k, 10) - min) * 1.0 / (max - min) * 100}>
        <div className="tick" />
        <div className="label" style={v.style}>
          {v.label || v}
        </div>
      </Tick>
    ));
  };

  const marksContainer = <TickContainer xPositioned={marks}>{renderTicks()}</TickContainer>;

  const currentValue = (
    <CurrentValueContainer>
      <CurrentValue units={units} css={'top: 0;'}>
        {value}
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
          <Container thermometer xPositioned={marks}>
            {marksContainer}
            <TankContainer thermometer width={`${WIDTH}px`}>
              <TankFill thermometer height={`${value * 1.0 / (max - min) * 100}%`} />
              {theme.dark ? null : <Bulb on={value !== min} />}
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
  step: 1,
  labelPosition: 'top',
  theme: light
};

Thermometer.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of thermometer
   */
  value: PropTypes.number,

  /**
   * The minimum value of the thermometer
   */
  min: PropTypes.number,

  /**
   * The maximum value of the thermometer
   */
  max: PropTypes.number,

  /**
   * Value by which marks appear
   */
  step: PropTypes.number,

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

export default withTheme(Thermometer);
