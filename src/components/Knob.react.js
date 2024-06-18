import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import KnobSvg from '../helpers/KnobSvg.react';
import Container from '../styled/Knob.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import CurrentValue from '../styled/CurrentValue.styled';
import { light, TRACK_TOTAL_DEG } from '../styled/constants';
import { computeProgress, roundToDecimal } from '../helpers/util';
import { getColorValue } from '../helpers/colorRanges';
import generateScale from '../helpers/scale';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

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
    this.getValue = this.getValue.bind(this);
  }

  noop() {}

  getValue(value) {
    return value >= this.props.min && value <= this.props.max
      ? value
      : this.props.min > value
      ? this.props.min
      : this.props.max;
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (typeof newProps.value !== 'undefined') this.setState({ value: newProps.value });
    if (this.state.max != newProps.max) {
      this.setState({ max: newProps.max instanceof Number ? newProps.max : this.state.max });
    }
    if (this.state.min != newProps.min) {
      this.setState({ min: newProps.min instanceof Number ? newProps.min : this.state.min });
    }
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
    const { min, max, value = this.props.min } = this.props;
    const { id, className, labelPosition, color, style, disabled, theme, textColor } = this.props;
    const progress = computeProgress({
      min,
      max,
      value: this.getValue(value),
      progressionTarget: 1
    });

    const colorValue = textColor || getColorValue(color);

    const elementName = getClassName('knob', theme);
    const filteredProps = getFilteredProps(this.props);

    const currentValue = (
      <>
        <CurrentValue
          className={elementName + '__current-value'}
          valueColor={colorValue}
          valueSize={Math.min(((this.props.size + 32) * 13.3333) / 100, 32)}
          units={false}
          css={'transform: translateY(0%); top: 0;'}
        >
          {value.toFixed(this.props.digits)}
        </CurrentValue>
      </>
    );

    return (
      <div id={id} className={elementName + (className ? ' ' + className : '')} style={style}>
        <LabelContainer
          className={elementName + '__label'}
          {...filteredProps}
          labelCSS={labelPosition === 'top' ? null : 'transform: translateY(-40px);'}
        >
          <Container
            className={elementName + '__container'}
            colorValue={colorValue}
            color={getColorValue(color)}
          >
            {this.props.showCurrentValue && currentValue}
            <KnobSvg
              progress={progress}
              {...filteredProps}
              {...this.state}
              min={this.props.min != this.state.min ? this.props.min : this.state.min}
              max={this.props.max != this.state.max ? this.props.max : this.state.max}
              value={this.getValue(value)}
              scale={generateScale(this.props)}
              currentDeg={valueToDeg({
                min: this.props.min,
                max: this.props.max,
                value: this.getValue(value)
              })}
              refFunc={ele => (this.knobElement = ele)}
              onMouseDown={disabled ? this.noop : this.onMouseDown}
              onMouseUp={disabled ? this.noop : this.onMouseUp}
              onMouseMove={disabled ? this.noop : this.onMouseMove}
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
  labelPosition: 'top',
  persisted_props: ['value'],
  persistence_type: 'local',
  size: 114
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
  setProps: PropTypes.func,

  /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
  persistence: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),

  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),

  /**

   * show current value of knob
   */
  showCurrentValue: PropTypes.bool,

  /**
   * text color of scale
   */
  textColor: PropTypes.string,

  /**
   * number of digits to show after decimal places
   */
  digits: PropTypes.number
};

const ThemedKnob = withTheme(Knob);
ThemedKnob.defaultProps = Knob.defaultProps;
export default ThemedKnob;
