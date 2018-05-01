import React, { Component } from 'react';
import ReactSlider from 'rc-slider';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { omit } from 'ramda';
import deepEqual from 'deep-equal';

import { getLinearGradientCSS, isContiguous, getColorValue } from '../helpers/colorRanges';
import { light, colors } from '../styled/constants';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import {
  SliderContainer,
  Handle,
  HandleContainer,
  targetStyles,
  Label
} from '../styled/Slider.styled';

const renderHandle = (props, { isTarget, showLabel } = {}) => {
  const label = (
    <Label isTarget={isTarget} {...props}>
      <div className="label">{props.label}</div>
      <div className="value">{props.value}</div>
    </Label>
  );

  return (
    <HandleContainer isTarget={isTarget} {...props}>
      {showLabel && label}
      <Handle isTarget={isTarget} showLabel={showLabel} {...props} />
    </HandleContainer>
  );
};

const getTrackStyle = props => {
  if (!props.color.ranges || !isContiguous(props)) {
    const colorValue = getColorValue(props.color);

    return {
      trackStyle: { backgroundColor: colorValue },
      activeDotStyle: props.theme.dark
        ? { background: colorValue, boxShadow: `0 0 6px 1px ${colorValue}` }
        : { borderColor: colorValue }
    };
  }

  return {
    railStyle: {
      backgroundImage: `${getLinearGradientCSS(props)}, linear-gradient(0deg, #000, #000)`,
      backgroundBlendMode: props.theme.dark ? 'none' : 'overlay'
    },
    trackStyle: { mixBlendMode: 'overlay', background: props.theme.dark ? '#fff' : '#000' },
    dotStyle: { display: 'none' }
  };
};

/**
 * A slider component with support for
 * a target value.
 */
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || props.min, trackStyle: getTrackStyle(props) };

    this.onChange = this.onChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.renderSliderHandle = this.renderSliderHandle.bind(this);
    this.renderTargets = this.renderTargets.bind(this);
    this.calcLabelOffset = this.calcLabelOffset.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const updates = {};

    if (typeof newProps.value !== 'undefined' && newProps.value !== this.state.value) {
      updates.value = newProps.value;
    }

    if (!deepEqual(newProps.color, this.props.color)) {
      updates.trackStyle = getTrackStyle({ ...this.props, ...newProps });
    }

    this.setState(updates);
  }

  onChange(value) {
    const { updatemode, setProps, fireEvent } = this.props;

    if (!this.props.value || updatemode !== 'drag') {
      this.setState({ value });
    }

    if (updatemode === 'drag') {
      if (setProps) setProps({ value });
      if (fireEvent) fireEvent('change');
    }
  }

  onAfterChange(value) {
    const { updatemode, setProps, fireEvent } = this.props;

    if (updatemode === 'mouseup') {
      if (setProps) setProps({ value });
      if (fireEvent) fireEvent('change');
    }
  }

  renderSliderHandle(props) {
    const { handleLabel } = this.props;
    let handleProps = { ...this.props, ...props };

    if (!handleLabel) {
      return renderHandle(handleProps);
    }

    const value = handleLabel.showCurrentValue && this.state.value;
    handleProps = {
      ...handleProps,
      value,
      label: handleLabel.label || handleLabel,
      color: handleLabel.color || getColorValue(this.props.color),
      style: handleLabel.style
    };

    return renderHandle(handleProps, { showLabel: true });
  }

  renderTargets() {
    return Object.entries(this.props.targets).reduce((acc, [k, v]) => {
      const props = {
        ...this.props,
        label: v.label || v,
        value: v.showCurrentValue && k,
        color: v.color,
        style: v.style
      };
      const Handle = renderHandle(props, { isTarget: true, showLabel: !!v });

      // use rc-slider's props.marks format
      acc[k] = { style: targetStyles, label: Handle };

      return acc;
    }, {});
  }

  calcLabelOffset({ vertical, labelPosition, marks, targets, handleLabel }) {
    if (vertical) return null;

    if (labelPosition === 'bottom' && marks) return 'transform: translateY(20px);';

    let showingCurrentValue = false;
    Object.values(targets).map(target => {
      if (target.showCurrentValue) showingCurrentValue = true;
    });

    if (handleLabel && handleLabel.showCurrentValue) {
      showingCurrentValue = true;
    }

    return `transform: translateY(${showingCurrentValue ? -38 : -16}px);`;
  }

  render() {
    const { value } = this.state;

    return (
      <div id={this.props.id} style={this.props.style} className={this.props.className}>
        <LabelContainer
          labelCSS={this.props.label ? this.calcLabelOffset(this.props) : null}
          {...this.props}
        >
          <SliderContainer size={this.props.size} vertical={this.props.vertical}>
            <ReactSlider
              onChange={this.onChange}
              onAfterChange={this.onAfterChange}
              value={value}
              handle={this.renderSliderHandle}
              marks={{ ...this.props.marks, ...this.renderTargets() }}
              {...this.state.trackStyle}
              {...omit(['fireEvent', 'setProps', 'updatemode', 'value', 'marks'], this.props)}
            />
          </SliderContainer>
        </LabelContainer>
      </div>
    );
  }
}

Slider.defaultProps = {
  theme: light,
  targets: {},
  updatemode: 'mouseup',
  color: colors.DARKER_PRIMARY,
  min: 0,
  size: 265,
  labelPosition: 'bottom'
};

Slider.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Marks on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific mark point,
   * the value should be an object which
   * contains style and label properties.
   */
  marks: PropTypes.shape({
    number: PropTypes.oneOfType([
      /**
       * The label of the mark
       */
      PropTypes.string,

      /**
       * The style and label of the mark
       */
      PropTypes.shape({
        style: PropTypes.object,
        label: PropTypes.string
      })
    ])
  }),

  /**
   * Color configuration for the slider's track.
   */
  color: PropTypes.oneOfType([
    /**
     * Color used for slider's track/indicator
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
       * the entirety of the gauge's range of values.
       */
      gradient: PropTypes.bool,
      /**
       * Define multiple color ranges on the slider's track.
       * The key determines the color of the range and
       * the value is the start,end of the range itself.
       */
      ranges: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.number)
      })
    })
  ]),

  /**
   * The value of the input.
   */
  value: PropTypes.number,

  /**
   * Additional CSS class for the root DOM node.
   */
  className: PropTypes.string,

  /**
   * If true, the handles can't be moved.
   */
  disabled: PropTypes.bool,

  /**
   * When the step value is greater than 1,
   * you can set the dots to true if you want to
   * render the slider with dots.
   *
   * Note: dots are disabled automatically when
   * using color.ranges
   */
  dots: PropTypes.bool,

  /**
   * If the value is true, it means a continuous
   * value is included. Otherwise, it is an independent value.
   */
  included: PropTypes.bool,

  /**
   * Minimum allowed value of the slider.
   */
  min: PropTypes.number,

  /**
   * Maximum allowed value of the slider.
   */
  max: PropTypes.number,

  /**
   * Value by which increments or decrements are made.
   */
  step: PropTypes.number,

  /**
   * If true, the slider will be vertical.
   */
  vertical: PropTypes.bool,

  /**
   * Size of the slider in pixels.
   */
  size: PropTypes.number,

  /**
   * Targets on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific target point,
   * the value should be an object which
   * contains style and label properties.
   */
  targets: PropTypes.shape({
    number: PropTypes.oneOfType([
      /**
       * The label of the mark
       */
      PropTypes.string,

      /**
       * The style and label of the mark
       */
      PropTypes.shape({
        showCurrentValue: PropTypes.bool,
        label: PropTypes.string,
        color: PropTypes.string,
        style: PropTypes.object
      })
    ])
  }),

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Configuration of the slider handle's label.
   * Passing falsy value will disable the label.
   */
  handleLabel: PropTypes.oneOfType([
    /**
     * The label of the handle
     */
    PropTypes.string,

    /**
     * The style and label of the handle
     */
    PropTypes.shape({
      showCurrentValue: PropTypes.bool,
      label: PropTypes.string,
      color: PropTypes.string,
      style: PropTypes.object
    })
  ]),

  /**
   * Determines when the component should update
   * its value. If `mouseup`, then the slider
   * will only trigger its value when the user has
   * finished dragging the slider. If `drag`, then
   * the slider will update its value continuously
   * as it is being dragged.
   * Only use `drag` if your updates are fast.
   */
  updatemode: PropTypes.oneOf(['mouseup', 'drag']),

  /**
   * Dash-assigned callback that gets fired when the checkbox item gets selected.
   */
  fireEvent: PropTypes.func,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: PropTypes.func,

  dashEvents: PropTypes.oneOf(['change'])
};

export default withTheme(Slider);
