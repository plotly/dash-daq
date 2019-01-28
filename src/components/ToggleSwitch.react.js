import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Indicator from '../styled/shared/Indicator.styled';
import {
  Wrapper,
  ButtonContainer,
  Button,
  DarkSwitchContainer,
  DarkSwitch,
  RowContainer,
  RowLabel
} from '../styled/ToggleSwitch.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { light } from '../styled/constants';

function getLabelProps(label) {
  if (typeof label === 'object') {
    return {
      children: label.label,
      style: label.style
    };
  }
  return {
    children: label,
    style: {}
  };
}
/**
 * A switch component that toggles between
 * two values.
 */
class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.click = this.click.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.state.value) this.setState({ value: newProps.value });
  }

  click() {
    if (!this.props.disabled) {
      const newValue = !this.state.value;

      this.setState({ value: newValue });
      if (this.props.setProps) this.props.setProps({ value: newValue });
    }
  }

  render() {
    const { id, className, style, label, labelPosition, booleanSwitch, theme, color } = this.props;
    const size = this.props.size || 45;

    let SwitchContainer = ButtonContainer;
    let Switch = Button;

    if (theme.dark && !booleanSwitch) {
      SwitchContainer = DarkSwitchContainer;
      Switch = DarkSwitch;
    }

    const indicatorSize = (size / 10) * 1.25;

    const doubleLabel = Array.isArray(label);

    const switchCore = (
      <Wrapper rotate={this.props.vertical ? -90 : 0} size={size}>
        {!booleanSwitch && <Indicator on={this.state.value} size={indicatorSize} primary={color} />}
        <SwitchContainer
          onClick={this.click}
          size={size}
          color={color}
          on={this.state.value}
          booleanSwitch={booleanSwitch}
        >
          <Switch
            disabled={this.props.disabled}
            on={this.state.value}
            size={size}
            booleanSwitch={booleanSwitch}
          />
        </SwitchContainer>
        {!booleanSwitch && (
          <Indicator main={true} on={this.state.value} size={indicatorSize} primary={color} />
        )}
      </Wrapper>
    );

    return (
      <div id={id} className={className} style={style}>
        {doubleLabel ? (
          <RowContainer {...this.props}>
            <RowLabel
              position={this.props.vertical ? 'bottom' : 'left'}
              {...getLabelProps(label[0])}
            />
            {switchCore}
            <RowLabel
              position={this.props.vertical ? 'top' : 'right'}
              {...getLabelProps(label[1])}
            />
          </RowContainer>
        ) : (
          <LabelContainer label={label} labelPosition={labelPosition}>
            {switchCore}
          </LabelContainer>
        )}
      </div>
    );
  }
}

ToggleSwitch.defaultProps = {
  value: false,
  vertical: false,
  theme: light,
  labelPosition: 'top'
};

ToggleSwitch.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The state of the switch
   */
  value: PropTypes.bool,

  /**
   * The size of the switch
   */
  size: PropTypes.number,

  /**
   * Color to highlight button/indicator
   */
  color: PropTypes.string,

  /**
   * If true, switch will be vertical instead
   * of horizontal
   */
  vertical: PropTypes.bool,

  /**
   * If true, switch cannot be clicked
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
    }),

    /**
     * Multiple labels for both toggle states. The label at index 0 will be left
     * (or bottom if the switch is vertical), and the label at index 0 will be
     * on the right (or top if vertical)
     */
    PropTypes.arrayOf(
      PropTypes.oneOfType([
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
      ])
    )
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
   * Style to apply to the root object.
   */
  style: PropTypes.object,

  /**
   * Dash-assigned callback that gets fired when
   * switch is toggled.
   */
  setProps: PropTypes.func
};

export default withTheme(ToggleSwitch);
