import React from 'react';
import PropTypes from 'prop-types';

import { TankContainer, TankFill, TickContainer, Tick, Container } from '../styled/Tank.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

/**
 * A Tank component that fills to
 * a value between some range.
 */
const Tank = props => {
  const { min, max, step, showCurrentValue, units, marks, className, id, style } = props;
  const value = Math.max(Math.min(props.value || min, max), min);

  const renderTicks = () => {
    if (!marks) {
      const values = [];
      for (let i = min; i <= max; i += step) {
        values.unshift(i);
        values.unshift(i); // add mini-tick
      }

      values.shift(); // remove bottom mini-tick

      return values.map((v, i) => {
        return (
          <Tick key={i} width={i % 2 === 0 ? 4 : 2}>
            <div className="label">{i % 2 === 0 ? v : null}</div>
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
    <CurrentValue units={units} valueColor="#535D63">
      {value}
    </CurrentValue>
  );

  return (
    <div className={className} id={id} style={style}>
      <LabelContainer {...props}>
        <Container>
          {marksContainer}
          <TankContainer>
            <TankFill height={`${value * 1.0 / (max - min) * 100}%`} />
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
  step: 2,
  labelPosition: 'top'
};

Tank.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of tank
   */
  value: PropTypes.number,

  /**
   * The minimum value of the tank
   */
  min: PropTypes.number,

  /**
   * The maximum value of the tank
   */
  max: PropTypes.number,

  /**
   * Value by which marks appear
   */
  step: PropTypes.number,

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
   *  Ticks on the tank. The key determines the position
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

export default Tank;
