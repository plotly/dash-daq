import React from 'react';
import PropTypes from 'prop-types';

function noop() {}

const ON = true;
const OFF = false;

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.initiallyOn
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(on = !this.state.on) {
    this.setState({ on }, () => {
      this.props.onToggle(this.state);
    });
  }

  render() {
    return this.props.children({
      on: this.state.on,
      onClick: props => {
        props.onClick && props.onClick();
        this.toggle();
      },
      getUIProps: () => ({
        'aria-expanded': Boolean(this.state.on),
        tabIndex: 0
      }),
      toggle: () => this.toggle(),
      turnOn: () => this.toggle(ON),
      turnOff: () => this.toggle(OFF),
      onKeyUp: event => {
        if (['Enter', ' '].indexOf(event.key) > -1) {
          this.toggle();
        }
      }
    });
  }
}

Toggle.defaultProps = {
  initiallyOn: false,
  onToggle: noop
};

Toggle.propTypes = {
  /**
   * Should this toggle be initially on
   */
  initiallyOn: PropTypes.bool,

  /**
   * Function to be called when toggled.
   */
  onToggle: PropTypes.func,

  /**
   * Function to be called when clicked.
   */
  onClick: PropTypes.func,

  /**
   * Render prop
   */
  children: PropTypes.func
};

export default Toggle;
