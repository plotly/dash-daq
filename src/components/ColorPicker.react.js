import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';

import { light } from '../styled/constants';

const RealColorPicker = lazy(() =>
  import(/* webpackChunkName: "colorpicker" */ '../fragments/ColorPicker.react')
);
/**
 * A color picker.
 */
export default class ColorPicker extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <RealColorPicker {...this.props} />
      </Suspense>
    );
  }
}

ColorPicker.defaultProps = {
  size: 225,
  theme: light,
  labelPosition: 'top',
  persisted_props: ['value'],
  persistence_type: 'local'
};

ColorPicker.propTypes = {
  /**
   * The ID used to identify the color picker in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Color value of the picker
   */
  value: PropTypes.shape({
    /**
     * Hex string
     */
    hex: PropTypes.string,

    /**
     * RGB/RGBA object
     */
    rbg: PropTypes.shape({
      r: PropTypes.number,
      g: PropTypes.number,
      b: PropTypes.number,
      a: PropTypes.number
    })
  }),

  /**
   * If true, color cannot be picked.
   */
  disabled: PropTypes.bool,

  /**
   * Size (width) of the component in pixels
   */
  size: PropTypes.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
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
   * Where the indicator label is positioned
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: PropTypes.string,

  /**
   * Dash-assigned callback that gets fired when
   * the color picker's value changes
   */
  setProps: PropTypes.func,

  /**
   * Style to apply to the root component element
   */
  style: PropTypes.object,

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

export const defaultProps = ColorPicker.defaultProps;
export const propTypes = ColorPicker.propTypes;
