import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';

import { colors, light } from '../styled/constants';

const RealSlider = lazy(() => import(/* webpackChunkName: "slider" */ '../fragments/Slider.react'));

/**
 * A slider component with support for
 * a target value.
 */
export default class Slider extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <RealSlider {...this.props} />
      </Suspense>
    );
  }
}

Slider.defaultProps = {
  theme: light,
  targets: {},
  updatemode: 'mouseup',
  color: colors.DARKER_PRIMARY,
  min: 0,
  size: 265,
  labelPosition: 'bottom'
};

Slider.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Marks on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific mark point,
   * the value should be an object which
   * contains style and label properties.
   */
  marks: PropTypes.shape({
    number: PropTypes.oneOfType([
      /**
       * The label of the mark
       */
      PropTypes.string,

      /**
       * The style and label of the mark
       */
      PropTypes.shape({
        style: PropTypes.object,
        label: PropTypes.string
      })
    ])
  }),

  /**
   * Color configuration for the slider's track.
   */
  color: PropTypes.oneOfType([
    /**
     * Color used for slider's track/indicator
     */
    PropTypes.string,
    /**
     * Color ranges configuration.
     */
    PropTypes.shape({
      /**
       * Fallback color to use when color.ranges
       * has gaps.
       */
      default: PropTypes.string,
      /**
       * Display ranges as a gradient between given colors.
       * Requires color.ranges to be contiguous along
       * the entirety of the gauge's range of values.
       */
      gradient: PropTypes.bool,
      /**
       * Define multiple color ranges on the slider's track.
       * The key determines the color of the range and
       * the value is the start,end of the range itself.
       */
      ranges: PropTypes.shape({
        color: PropTypes.arrayOf(PropTypes.number)
      })
    })
  ]),

  /**
   * The value of the input.
   */
  value: PropTypes.number,

  /**
   * Additional CSS class for the root DOM node.
   */
  className: PropTypes.string,

  /**
   * Where the component label is positioned.
   */
  labelPosition: PropTypes.oneOf(['top', 'bottom']),

  /**
   * If true, the handles can't be moved.
   */
  disabled: PropTypes.bool,

  /**
   * When the step value is greater than 1,
   * you can set the dots to true if you want to
   * render the slider with dots.
   *
   * Note: dots are disabled automatically when
   * using color.ranges
   */
  dots: PropTypes.bool,

  /**
   * If the value is true, it means a continuous
   * value is included. Otherwise, it is an independent value.
   */
  included: PropTypes.bool,

  /**
   * Minimum allowed value of the slider.
   */
  min: PropTypes.number,

  /**
   * Maximum allowed value of the slider.
   */
  max: PropTypes.number,

  /**
   * Value by which increments or decrements are made.
   */
  step: PropTypes.number,

  /**
   * If true, the slider will be vertical.
   */
  vertical: PropTypes.bool,

  /**
   * Size of the slider in pixels.
   */
  size: PropTypes.number,

  /**
   * Targets on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific target point,
   * the value should be an object which
   * contains style and label properties.
   */
  targets: PropTypes.shape({
    number: PropTypes.oneOfType([
      /**
       * The label of the mark
       */
      PropTypes.string,

      /**
       * The style and label of the mark
       */
      PropTypes.shape({
        showCurrentValue: PropTypes.bool,
        label: PropTypes.string,
        color: PropTypes.string,
        style: PropTypes.object
      })
    ])
  }),

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: PropTypes.object,

  /**
   * Configuration of the slider handle's label.
   * Passing falsy value will disable the label.
   */
  handleLabel: PropTypes.oneOfType([
    /**
     * The label of the handle
     */
    PropTypes.string,

    /**
     * The style and label of the handle
     */
    PropTypes.shape({
      showCurrentValue: PropTypes.bool,
      label: PropTypes.string,
      color: PropTypes.string,
      style: PropTypes.object
    })
  ]),

  /**
   * Determines when the component should update
   * its value. If `mouseup`, then the slider
   * will only trigger its value when the user has
   * finished dragging the slider. If `drag`, then
   * the slider will update its value continuously
   * as it is being dragged.
   * Only use `drag` if your updates are fast.
   */
  updatemode: PropTypes.oneOf(['mouseup', 'drag']),

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: PropTypes.func
};

export const defaultProps = Slider.defaultProps;
export const propTypes = Slider.propTypes;
