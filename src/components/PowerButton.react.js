import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Container, Button } from '../styled/PowerButton.styled';
import PowerButtonSvg from '../helpers/PowerButtonSvg.react';
import Indicator from '../styled/shared/Indicator.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { light } from '../styled/constants';

/**
 * A power button component can be
 * turned on and off.
 */
class PowerButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: this.props.on
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on });
  }

  onClick() {
    const newOnValue = !this.state.on;

    this.setState({ on: newOnValue });
    if (this.props.setProps) this.props.setProps({ on: newOnValue });
  }

  render() {
    const INDICATOR_SIZE = (this.props.size / 10) * 1.25;

    return (
      <div id={this.props.id} className={this.props.className} style={this.props.style}>
        <LabelContainer {...this.props}>
          <Container>
            <Button
              on={this.state.on}
              color={this.props.color}
              size={this.props.size}
              disabled={this.props.disabled}
              onClick={this.onClick}
            >
              <PowerButtonSvg
                on={this.state.on}
                color={this.props.color}
                size={this.props.size * 0.3}
              />
            </Button>
            <Indicator
              on={this.state.on}
              primary={this.props.color}
              main={true}
              size={INDICATOR_SIZE}
            />
          </Container>
        </LabelContainer>
      </div>
    );
  }
}

PowerButton.defaultProps = {
  on: false,
  theme: light,
  size: 48,
  labelPosition: 'top'
};

PowerButton.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Whether or not the power button is on
   */
  on: PropTypes.bool,

  /**
   * The indicator color to display when power button is on
   */
  color: PropTypes.string,

  /**
   * The size (diameter) of the power button in pixels
   */
  size: PropTypes.number,

  /**
   * If true, power button cannot be clicked
   */
  disabled: PropTypes.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the button. To control styling, pass an object with label and style properties.
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
   * Where the button label is positioned.
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: PropTypes.string,

  /**
   * Style to apply to the root component element.
   */
  style: PropTypes.object,

  /**
   * Dash-assigned callback that gets fired when
   * button is clicked.
   */
  setProps: PropTypes.func
};

export default withTheme(PowerButton);
