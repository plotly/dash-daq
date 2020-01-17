import React, { Component } from 'react';
import ReactSlider from 'rc-slider';
import { withTheme } from 'styled-components';
import { omit } from 'ramda';
import deepEqual from 'deep-equal';

import { getLinearGradientCSS, isContiguous, getColorValue } from '../helpers/colorRanges';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import '../css/rc-slider@6.1.2.css';

import {
  SliderContainer,
  Handle,
  HandleContainer,
  targetStyles,
  Label
} from '../styled/Slider.styled';

import { defaultProps, propTypes } from '../components/Slider.react';

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

  UNSAFE_componentWillReceiveProps(newProps) {
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
    const { updatemode, setProps } = this.props;

    if (!this.props.value || updatemode !== 'drag') {
      this.setState({ value });
    }

    if (updatemode === 'drag') {
      if (setProps) setProps({ value });
    }
  }

  onAfterChange(value) {
    const { updatemode, setProps } = this.props;

    if (updatemode === 'mouseup') {
      if (setProps) setProps({ value });
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

    if (labelPosition === 'bottom') {
      return `transform: translateY(${marks ? 20 : 0}px);`;
    }

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
              {...omit(['setProps', 'updatemode', 'value', 'marks'], this.props)}
            />
          </SliderContainer>
        </LabelContainer>
      </div>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default withTheme(Slider);
