import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import KnobSvg from '../helpers/KnobSvg.react';
import Container from '../styled/Knob.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { light } from '../styled/constants';

const RESET_START_ANGLE = -1;

/**
 * A knob component that can be turned
 * to a value between some range.
 */
class Knob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: props.min,
      max: props.max,
      step: props.step,
      value: props.value || props.min,
      isDragging: false,
      startAngle: RESET_START_ANGLE,
      rotation: 0,
      currentDeg: this.valueToDeg(props.value || props.min)
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.setValue = this.setValue.bind(this);
    this.valueToDeg = this.valueToDeg(this);
  }

  noop() {}

  componentWillReceiveProps(newProps) {
    if (typeof newProps.value !== 'undefined') this.setState({ value: newProps.value });
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp, false);
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
    tmp = Math.min(tmp, 270);
    tmp = Math.max(tmp, 0);

    this.setState({ currentDeg: tmp });
    this.setValue(Math.round((max - min) * (tmp / 270.0) * 100) / 100);
  }

  valueToDeg(value) {
    return value / (this.props.max * 1.0) * 270;
  }

  setValue(value) {
    this.setState({ value });
    if (this.props.setProps) this.props.setProps({ value });
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <LabelContainer
          {...this.props}
          labelCSS={this.props.labelPosition === 'top' ? null : 'transform: translateY(-40px);'}
        >
          <Container>
            <KnobSvg
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
  step: 1,
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
   * The minimum value of the knob
   */
  min: PropTypes.number,

  /**
   * The maximum value of the knob
   */
  max: PropTypes.number,

  /**
   * Value by which marks are added
   */
  step: PropTypes.number,

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
   *  Marks on the knob. The key determines the position,
   * and the value determines what will show. If you want
   * to set the style of a specific mark point, the value
   * should be an object which contains `style` and `label`
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
  style: PropTypes.object,

  /**
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: PropTypes.func
};

export default withTheme(Knob);
