import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import KnobSvg from '../helpers/KnobSvg.react';
import Container from '../styled/Knob.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { light, TRACK_TOTAL_DEG } from '../styled/constants';
import { computeProgress, roundToDecimal } from '../helpers/util';
import { getColorValue } from '../helpers/colorRanges';
import generateScale from '../helpers/scale';

const RESET_START_ANGLE = -1;

const valueToDeg = ({ min, max, value }) =>
  computeProgress({ min, max, value, progressionTarget: TRACK_TOTAL_DEG });
const degToValue = ({ min, max, deg }) =>
  computeProgress({ min: 0, max: TRACK_TOTAL_DEG, value: deg, progressionTarget: max - min }) + min;

/**
 * A knob component that can be turned
 * to a value between some range.
 */
class Knob extends Component {
  constructor(props) {
    super(props);

    const currentDeg = valueToDeg({
      min: props.min,
      max: props.max,
      value: props.value != null ? props.value : props.min
    });

    this.state = {
      min: props.min,
      max: props.max,
      value: props.value || props.min,
      scale: generateScale(props),
      isDragging: false,
      startAngle: RESET_START_ANGLE,
      rotation: currentDeg,
      currentDeg
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  noop() {}

  componentWillReceiveProps(newProps) {
    if (typeof newProps.value !== 'undefined') this.setState({ value: newProps.value });
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp, false);
    // eslint-disable-next-line
    require('conic-gradient');
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp, false);
  }

  onMouseDown() {
    this.setState({ isDragging: true });
  }

  onMouseUp() {
    if (this.state.isDragging) {
      this.setState(state => ({
        rotation: state.currentDeg,
        isDragging: false,
        startAngle: RESET_START_ANGLE
      }));
    }
  }

  onMouseMove(e) {
    if (!this.state.isDragging) {
      return;
    }

    const { min, max } = this.props;
    const { rotation } = this.state;
    let { startAngle } = this.state;

    if (e.touches) {
      e = e.touches[0];
    }

    const rect = this.knobElement.getBoundingClientRect();
    const centerX = rect.width / 2 + rect.left;
    const centerY = rect.height / 2 + rect.top;
    const radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
    let angle = radians * (180 / Math.PI);

    if (e.clientX - centerX >= 0) {
      angle = Math.abs(360 - angle) + 180;
    } else {
      angle = angle - 180;
    }

    angle = Math.abs(angle);

    if (startAngle === RESET_START_ANGLE) {
      startAngle = angle;
      this.setState({ startAngle });
    }

    let tmp = Math.floor(angle - startAngle + rotation);
    tmp = Math.min(tmp, TRACK_TOTAL_DEG);
    tmp = Math.max(tmp, 0);

    this.setState({ currentDeg: tmp });
    this.setValue(roundToDecimal(degToValue({ min, max, deg: tmp }), 2));
  }

  setValue(value) {
    this.setState({ value });
    if (this.props.setProps) this.props.setProps({ value });
  }

  render() {
    const { min, max, value } = this.state;
    const progress = computeProgress({ min, max, value, progressionTarget: 1 });

    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <LabelContainer
          {...this.props}
          labelCSS={this.props.labelPosition === 'top' ? null : 'transform: translateY(-40px);'}
        >
          <Container color={getColorValue(this.props.color)}>
            <KnobSvg
              progress={progress}
              {...this.props}
              {...this.state}
              refFunc={ele => (this.knobElement = ele)}
              onMouseDown={this.props.disabled ? this.noop : this.onMouseDown}
              onMouseUp={this.props.disabled ? this.noop : this.onMouseUp}
              onMouseMove={this.props.disabled ? this.noop : this.onMouseMove}
            />
          </Container>
        </LabelContainer>
      </div>
    );
  }
}

Knob.defaultProps = {
  min: 0,
  max: 10,
  theme: light,
  labelPosition: 'top'
};

Knob.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The value of knob
   */
  value: PropTypes.number,

  /**
   * Color configuration for the knob's track.
   */
  color: PropTypes.oneOfType([
    /**
     * Color used for knob's track/indicator
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
       * Define multiple color ranges on the knob's track.
       * The key determines the color of the range and
       * the value is the start,end of the range itself.
       * Ranges must be contiguous along the entirety
       * of the knob's range of values.
       */
      ranges: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.number)
      })
    })
  ]),

  /**
   * The size (diameter) of the knob in pixels
   */
  size: PropTypes.number,

  /**
   * The minimum value of the knob
   */
  min: PropTypes.number,

  /**
   * The maximum value of the knob
   */
  max: PropTypes.number,

  /**
   * If true, knob cannot be moved.
   */
  disabled: PropTypes.bool,

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
   * Where the knob label is positioned.
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
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: PropTypes.func
};

export default withTheme(Knob);
