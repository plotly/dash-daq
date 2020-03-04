import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Button } from '../styled/StopButton.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

import { getClassName, getFilteredProps } from '../helpers/classNameGenerator';

/**
 * A Stop button component
 */
const StopButton = props => {
  const { id, className, style, size, disabled, children, n_clicks, buttonText, theme } = props;

  const elementName = getClassName('stopbutton', theme);
  const filteredProps = getFilteredProps(props);

  return (
    <div id={id} className={elementName + (className ? ' ' + className : '')} style={style}>
      <LabelContainer {...filteredProps}>
        <Button
          className={elementName + '__button'}
          size={size}
          disabled={disabled}
          onClick={() => {
            if (props.setProps) props.setProps({ n_clicks: n_clicks + 1 });
          }}
        >
          {children || buttonText}
        </Button>
      </LabelContainer>
    </div>
  );
};

StopButton.defaultProps = {
  buttonText: 'Stop',
  n_clicks: 0,
  size: 92,
  labelPosition: 'top'
};

StopButton.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * The size (width) of the stop button in pixels
   */
  size: PropTypes.number,

  /**
   * Text displayed in the button
   */
  buttonText: PropTypes.string,

  /**
   * Number of times the button was clicked
   */
  n_clicks: PropTypes.number,

  /**
   * If true, button cannot be pressesd.
   */
  disabled: PropTypes.bool,

  /**
   * The children of the button.
   */
  children: PropTypes.node,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the button.
   * To control styling, pass an object with label and
   * style properties.
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
   * Where the  label is positioned.
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
   * Dash-assigned callback that gets fired when the
   * button is clicked.
   */
  setProps: PropTypes.func
};

export default withTheme(StopButton);
