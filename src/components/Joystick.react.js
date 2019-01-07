import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import joystick from 'nipplejs';
import { light } from '../styled/constants';
import LabelContainer from '../styled/shared/LabelContainer.styled';

/**
 * A joystick.
 */
class Joystick extends Component {
  constructor(props) {
    super(props);
    this.lastAngle = 0;
  }

  componentDidMount() {
    const { size, setProps } = this.props;
    this.manager = joystick.create({
      mode: 'static',
      color: 'grey',
      size: size,
      position: { left: '50%', top: '50%' },
      zone: this.zoneRef
    });
    this.manager.on('move', (e, data) => {
      const {
        angle: { degree },
        force
      } = data;
      this.lastAngle = degree;
      if (setProps) {
        setProps({
          angle: degree,
          force
        });
      }
    });
    this.manager.on('end', () => {
      if (setProps) {
        setProps({
          angle: this.lastAngle,
          force: 0
        });
      }
    });
  }

  componentWillUnmount() {
    this.manager.destroy();
  }

  render() {
    const { id, className, style, size } = this.props;

    return (
      <div id={id} className={className} style={style}>
        <LabelContainer {...this.props}>
          <div
            ref={ref => (this.zoneRef = ref)}
            style={{
              position: 'relative',
              width: size + 'px',
              height: size + 'px'
            }}
          />
        </LabelContainer>
      </div>
    );
  }
}

Joystick.defaultProps = {
  size: 100,
  theme: light,
  labelPosition: 'top'
};

Joystick.propTypes = {
  /**
   * The ID used to identify the color picker in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * If true, color cannot be picked.
   */
  disabled: PropTypes.bool,

  /**
   * Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 = down
   */
  angle: PropTypes.number,

  /**
   * Joystick force: distance between cursor and center in big-circle radii
   */
  force: PropTypes.number,

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
  style: PropTypes.object
};

export default withTheme(Joystick);
