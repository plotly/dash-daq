import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';

import { light } from '../constants';

const Indicator = styled('div')`
  border-radius: ${({rectangular}) => rectangular ? '0': '50%'};
  transition: all 100ms ease-in-out;
  ${props => {
    const color = props.main
      ? (props.on
        ? (props.primary || props.theme.primary)
        : (props.secondary) || props.theme.secondary)
      : (props.on ? props.theme.secondary : (props.primary || props.theme.primary))

    return css`
      width: ${props.width || props.height || props.size}px;
      height: ${props.height || props.width || props.size}px;
      background-color: ${color};
      ${props.border ? `border: 1px solid ${props.on ? color : '#F8F4F4'};` : ''}
      ${props.theme.dark
        ? (props.on && props.main) || (!props.on && !props.main) ?
        css`
          box-shadow: 0 0 8px 2px ${color}, 1px 1px 0px 0px rgba(0,0,0,0.9), -1px -1px 0px 0px rgba(255,255,255,0.1);
        ` :
        css`
        background-image: linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 100%);
        background-blend-mode: overlay;
        box-shadow: inset 0 0 8px -1px rgba(0,0,0,0.5),
                    inset 0 0 4px 0 rgba(0,0,0,0.6),
                    -1px -1px 0px 0px rgba(0,0,0,0.9),
                    1px 1px 0px 0px rgba(255,255,255,0.1);
        `
        : ''}
    `
  }}

`
Indicator.defaultProps = {
  theme: light
}

Indicator.propTypes = {
    /**
     * Size of the indicator
     */
    size: PropTypes.number,

    /**
     * Theme for styling the component
     */
    theme: PropTypes.object,

    /**
     * Add border for off
     */
    border: PropTypes.bool,

    /**
     * Color to display when on
     */
    primary: PropTypes.string,

    /**
     * Color to display when off
     */
    secondary: PropTypes.string
};

export default Indicator;
