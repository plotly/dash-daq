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

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

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

  UNSAFE_componentWillReceiveProps(newProps) {
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
    const {
      id,
      className,
      style,
      label,
      labelPosition,
      booleanSwitch,
      theme,
      color,
      vertical,
      disabled
    } = this.props;

    const size = this.props.size || 45;

    let SwitchContainer = ButtonContainer;
    let Switch = Button;

    if (theme.dark && !booleanSwitch) {
      SwitchContainer = DarkSwitchContainer;
      Switch = DarkSwitch;
    }

    const indicatorSize = (size / 10) * 1.25;

    const doubleLabel = Array.isArray(label);

    const elementName = getClassName(booleanSwitch ? 'booleanswitch' : 'toggleswitch', theme.dark);
    const filteredProps = getFilteredProps(this.props);

    const switchCore = (
      <Wrapper className={elementName} rotate={vertical ? -90 : 0} size={size}>
        {!booleanSwitch && (
          <Indicator
            className={elementName + '__indicator' + (this.state.value ? '--off' : '--on')}
            on={this.state.value}
            size={indicatorSize}
            primary={color}
          />
        )}
        <SwitchContainer
          className={elementName + '__background'}
          onClick={this.click}
          size={size}
          color={color}
          on={this.state.value}
          booleanSwitch={booleanSwitch}
        >
          <Switch
            className={elementName + '__button'}
            disabled={disabled}
            on={this.state.value}
            size={size}
            booleanSwitch={booleanSwitch}
          />
        </SwitchContainer>
        {!booleanSwitch && (
          <Indicator
            className={elementName + '__indicator' + (this.state.value ? '--on' : '--off')}
            main={true}
            on={this.state.value}
            size={indicatorSize}
            primary={color}
          />
        )}
      </Wrapper>
    );

    return (
      <div id={id} className={className} style={style}>
        {doubleLabel ? (
          <RowContainer {...filteredProps}>
            <RowLabel
              className={elementName + '__label'}
              position={vertical ? 'bottom' : 'left'}
              {...getLabelProps(label[0])}
            />
            {switchCore}
            <RowLabel
              className={elementName + '__label'}
              position={vertical ? 'top' : 'right'}
              {...getLabelProps(label[1])}
            />
          </RowContainer>
        ) : (
          <LabelContainer
            className={elementName + '__label'}
            label={label}
            labelPosition={labelPosition}
          >
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
  labelPosition: 'top',
  persisted_props: ['value'],
  persistence_type: 'local'
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
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

export default withTheme(ToggleSwitch);
