import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { light } from '../styled/constants';
import ToggleSwitch from './ToggleSwitch.react';

/**
 * A switch component that toggles
 * between on and off.
 */
class BooleanSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: props.on
    };

    this.setPropsOverride = this.setPropsOverride.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on });
  }

  setPropsOverride({ value }) {
    this.setState({ on: value });
    if (this.props.setProps) this.props.setProps({ on: value });
  }

  render() {
    return (
      <ToggleSwitch
        {...this.props}
        value={this.state.on}
        setProps={this.setPropsOverride}
        booleanSwitch={true}
        color={this.props.color || this.props.theme.primary}
      />
    );
  }
}

BooleanSwitch.defaultProps = {
  on: false,
  vertical: false,
  theme: light,
  labelPosition: 'top'
};

BooleanSwitch.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Whether or not the switch is on
   */
  on: PropTypes.bool,

  /**
   * Color to highlight active switch background
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

export default withTheme(BooleanSwitch);
