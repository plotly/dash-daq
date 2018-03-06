import React from 'react';
import PropTypes from 'prop-types';

function noop() {}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }

  render() {
    return this.props.children({
      value: this.state.value,
      getUIProps: () => ({
        // 'aria-expanded': Boolean(this.state.on),
        tabIndex: 0
      }),
      setValue: value => this.setState(typeof value === 'function' ? value : { value })
    });
  }
}

Toggle.defaultProps = {
  initialValue: 0,
  onChange: noop
};

Toggle.propTypes = {
  /**
   * Should this toggle be initially on
   */
  initalValue: PropTypes.number,

  /**
   * Function to be called when changed.
   */
  onChange: PropTypes.func,

  /**
   * Render prop
   */
  children: PropTypes.func
};

export default Toggle;
