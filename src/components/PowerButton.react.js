import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Container, Button } from '../styled/PowerButton.styled';
import PowerButtonSvg from '../helpers/PowerButtonSvg.react';
import Indicator from '../styled/shared/Indicator.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';
import { light } from '../styled/constants';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

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

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on });
  }

  onClick() {
    const newOnValue = !this.state.on;

    this.setState({ on: newOnValue });
    if (this.props.setProps) this.props.setProps({ on: newOnValue });
  }

  render() {
    const { id, size, className, color, disabled, style, theme } = this.props;

    const INDICATOR_SIZE = (size / 10) * 1.25;

    const elementName = getClassName('powerbutton', theme);
    const filteredProps = getFilteredProps(this.props);
    return (
      <div id={id} className={elementName + ' ' + (className || '')} style={style}>
        <LabelContainer className={elementName + '__label'} {...filteredProps}>
          <Container className={elementName + '__container'}>
            <Button
              className={elementName + '__button'}
              on={this.state.on}
              color={color}
              size={size}
              disabled={disabled}
              onClick={this.onClick}
            >
              <PowerButtonSvg on={this.state.on} color={color} size={size * 0.3} />
            </Button>
            <Indicator
              className={elementName + '__indicator'}
              on={this.state.on}
              primary={color}
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
