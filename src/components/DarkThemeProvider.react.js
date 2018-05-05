import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { dark } from '../styled/constants';

/**
 * DarkThemeProvider is a component that is placed at the root of
 * the component tree to make all components match the dark theme
 */
function DarkThemeProvider(props) {
  return (
    <ThemeProvider theme={props.theme || dark}>
      <div>{props.children}</div>
    </ThemeProvider>
  );
}

DarkThemeProvider.propTypes = {
  /**
   * The children of this component
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Theme object to override with a custom theme
   */
  theme: PropTypes.shape({
    /**
     * Highlight color
     */
    primary: PropTypes.string,
    /**
     * Supporting color
     */
    secondary: PropTypes.string,
    /**
     * Color used for UI details, like borders
     */
    detail: PropTypes.string,
    /**
     * True for Dark mode, false for Light
     */
    dark: PropTypes.bool
  })
};

export default DarkThemeProvider;
