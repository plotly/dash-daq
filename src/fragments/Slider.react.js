import React, { Component } from 'react';
import ReactSlider from 'rc-slider';
import { withTheme } from 'styled-components';
import { omit } from 'ramda';
import deepEqual from 'deep-equal';

import { getLinearGradientCSS, isContiguous, getColorValue } from '../helpers/colorRanges';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import 'rc-slider/assets/index.css';

import {
  SliderContainer,
  Handle,
  HandleContainer,
  targetStyles,
  Label
} from '../styled/Slider.styled';

import { defaultProps, propTypes } from '../components/Slider.react';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

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
    this.state = {
      value: props.value != null ? props.value : props.min,
      trackStyle: getTrackStyle(props)
    };

    this.onChange = this.onChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.renderSliderHandle = this.renderSliderHandle.bind(this);
    this.renderTargets = this.renderTargets.bind(this);
    this.calcLabelOffset = this.calcLabelOffset.bind(this);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const updates = {};
    const filteredProps = getFilteredProps(this.props);

    if (typeof newProps.value !== 'undefined' && newProps.value !== this.state.value) {
      updates.value = newProps.value;
    }

    if (!deepEqual(newProps.color, this.props.color)) {
      updates.trackStyle = getTrackStyle({ ...filteredProps, ...newProps });
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
    const filteredProps = getFilteredProps(this.props);

    let handleProps = { ...filteredProps, ...props };

    if (!handleLabel) {
      return renderHandle(handleProps);
    }

    const value = handleLabel.showCurrentValue && this.state.value;
    handleProps = {
      ...handleProps,
      value,
      label: handleLabel.label || (handleLabel instanceof Object ? '  ' : handleLabel),
      color: handleLabel.color || getColorValue(this.props.color),
      style: handleLabel.style
    };

    return renderHandle(handleProps, { showLabel: true });
  }

  renderTargets() {
    const filteredProps = getFilteredProps(this.props);

    return Object.entries(this.props.targets).reduce((acc, [k, v]) => {
      const props = {
        ...filteredProps,
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
    const { className, id, theme, label, size, vertical, style, marks } = this.props;

    const elementName = getClassName('slider', theme.dark);
    const filteredProps = getFilteredProps(this.props);
    let cssStyle = this.props.vertical
      ? { ...style, marginLeft: '45px' }
      : { ...style, marginTop: '45px' };
    cssStyle = this.props.fullSize
      ? this.props.vertical
        ? { ...cssStyle, height: '100%' }
        : { ...cssStyle, width: '100%' }
      : cssStyle;
    return (
      <div id={id} style={cssStyle} className={elementName + (className ? ' ' + className : '')}>
        <LabelContainer
          className={elementName + '__label'}
          labelCSS={label ? this.calcLabelOffset(this.props) : null}
          {...filteredProps}
        >
          <SliderContainer fullSize={this.props.fullSize} size={size} vertical={vertical}>
            <ReactSlider
              className={elementName + '__slider'}
              onChange={this.onChange}
              onAfterChange={this.onAfterChange}
              value={value}
              handle={this.renderSliderHandle}
              marks={{ ...marks, ...this.renderTargets() }}
              {...this.state.trackStyle}
              {...omit(['setProps', 'updatemode', 'value', 'marks'], filteredProps)}
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
