import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../styled/StopButton.styled';
import LabelContainer from '../styled/shared/LabelContainer.styled';

/**
 * A Stop button component
 */
const StopButton = props => {
  return (
    <div id={props.id} className={props.className} style={props.style}>
      <LabelContainer {...props}>
        <Button
          size={props.size}
          disabled={props.disabled}
          onClick={() => {
            if (props.setProps) props.setProps({ n_clicks: props.n_clicks + 1 });
          }}
        >
          {props.children || props.buttonText}
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

export default StopButton;
