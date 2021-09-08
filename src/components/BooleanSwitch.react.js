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

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on });
  }

  setPropsOverride({ value }) {
    this.setState({ on: value });
    if (this.props.setProps) this.props.setProps({ on: value });
  }

  render() {
    const { color, theme } = this.props;
    return (
      <ToggleSwitch
        {...this.props}
        value={this.state.on}
        setProps={this.setPropsOverride}
        booleanSwitch={true}
        color={color || theme.primary}
      />
    );
  }
}

BooleanSwitch.defaultProps = {
  on: false,
  vertical: false,
  theme: light,
  labelPosition: 'top',
  persisted_props: ['on'],
  persistence_type: 'local'
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
   * component or the page. Since only `on` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['on'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),

  /**
   * size of the switch
   */
  size: PropTypes.number
};

const ThemedBooleanSwitch = withTheme(BooleanSwitch);
ThemedBooleanSwitch.defaultProps = BooleanSwitch.defaultProps;
export default ThemedBooleanSwitch;
