import React from 'react';
import PropTypes from 'prop-types';

import { Container, Block, Value } from '../styled/GraduatedBar.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

/**
 * A graduated bar component that displays
 * a value within some range as a
 * percentage.
 */
const GraduatedBar = props => {
  const { step, min, max, label, labelPosition, id, className, style, showCurrentValue } = props;
  const value = props.value || min;

  const progressBlocks = [];
  const normalizedValue = Math.max(Math.min(max, value), min);

  for (let i = min; i < normalizedValue; i += step) {
    progressBlocks.push(<Block key={i} {...props} />);
  }

  let percent = normalizedValue / (max - min) * 100;
  if (!isFinite(percent)) percent = 0;

  return (
    <div id={id} className={className} style={style}>
      <LabelContainer label={label} labelPosition={labelPosition}>
        <Container>
          {progressBlocks}
          {showCurrentValue && <Value>{percent.toFixed(0)}%</Value>}
        </Container>
      </LabelContainer>
    </div>
  );
};

GraduatedBar.defaultProps = {
  min: 0,
  max: 10,
  step: 0.5,
  labelPosition: 'top'
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
