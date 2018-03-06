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
    primary: PropTypes.string,
    secondary: PropTypes.string,
    dark: PropTypes.bool
  })
};

export default DarkThemeProvider;
