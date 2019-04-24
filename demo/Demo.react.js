import React, { Component } from 'react';

import { colors } from '../src/styled/constants';
import {
  BooleanSwitch,
  ColorPicker,
  Gauge,
  GraduatedBar,
  Indicator,
  Knob,
  LEDDisplay,
  NumericInput,
  PowerButton,
  Slider,
  StopButton,
  PrecisionInput,
  Tank,
  Thermometer,
  ToggleSwitch,
  DarkThemeProvider,
  Joystick
} from '../src';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      color: { hex: colors.PRIMARY },
      on: false,
      power: true,
      dark: false,
      stop: false,
      vertical: false,
      slider: 40
    };

    this.updateValue = this.updateValue.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updatePower = this.updatePower.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleDark = this.toggleDark.bind(this);
    this.stopPressed = this.stopPressed.bind(this);
    this.toggleVerticalSwitch = this.toggleVerticalSwitch.bind(this);
  }

  updateValue({ value }) {
    this.setState({ value });
  }

  updateColor({ value }) {
    this.setState({ color: value });
  }

  updatePower({ on }) {
    this.setState({ power: on });
  }

  updateSlider({ value }) {
    this.setState({ slider: value });
  }

  stopPressed() {
    this.setState({ stop: !this.state.stop });
  }

  toggle() {
    this.setState(({ on }) => ({ on: !on }));
  }

  toggleDark() {
    this.setState(({ dark }) => ({ dark: !dark }));
  }

  toggleVerticalSwitch() {
    this.setState({ vertical: !this.state.vertical });
  }

  render() {
    const components = (
      <div>
        <h2>Controls</h2>
        <div
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 auto'
          }}
        >
          <Knob
            id="knob-1"
            setProps={this.updateValue}
            value={this.state.value}
            color={this.state.color.hex}
            label="Knob"
            min={0}
            max={10}
          />
          <NumericInput
            size={88}
            id="numeric-input-1"
            className="numeric-input"
            labelPosition="top"
            label="Numeric Input"
          />
          <NumericInput
            disabled
            labelPosition="top"
            label="Numeric Input (disabled)"
          />
          <PrecisionInput
            precision={2}
            labelPosition="top"
            label="Decimal Input"
          />
          <StopButton
            size={72}
            id="stop-button-1"
            className="stop-button"
            label="Stop Button"
            setProps={this.stopPressed}
          />
          <PowerButton
            size={88}
            id="power-button-1"
            className="power-button"
            labelPosition="top"
            on={this.state.power}
            color={this.state.color.hex}
            setProps={this.updatePower}
            label="Power Button"
          />
        </div>
        <div
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '4rem auto'
          }}
        >
          <ColorPicker
            value={this.state.color}
            setProps={this.updateColor}
            label="Color Picker"
          />
          <ToggleSwitch
            disabled={true}
            label="Toggle Switch"
            labelPosition="top"
            id="toggle-switch-1"
            className="toggle-switch"
            value={this.state.on}
            color={this.state.color.hex}
            setProps={this.toggle}
          />
          <ToggleSwitch
            size={24}
            label={['Off', 'On']}
            vertical={true}
            value={this.state.on}
            color={this.state.color.hex}
            setProps={this.toggle}
          />
          <BooleanSwitch
            size={88}
            id="boolean-switch-1"
            className="boolean-switch"
            value={false}
            color={this.state.color.hex}
            label="Boolean Switch"
            labelPosition="left"
          />
          <BooleanSwitch
            id="boolean-switch-2"
            color={'#ff5e5e'}
            vertical={true}
            on={this.state.vertical}
            label="Vertical"
            labelPosition="bottom"
            setProps={this.toggleVerticalSwitch}
          />
          <Joystick setProps={() => null} />
        </div>
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 auto'
          }}
        >
          <Slider
            label="Slider"
            labelPosition="top"
            color={this.state.color.hex}
            value={this.state.slider}
            size={300}
            min={0}
            max={100}
            updatemode="drag"
            setProps={this.updateSlider}
            targets={{
              100: '',
              75: { showCurrentValue: false, label: 'TARGET', color: '#685' }
            }}
            marks={{ 25: 'mark', 50: '50' }}
            handleLabel={{ showCurrentValue: true, label: 'VALUE' }}
          />
          <LEDDisplay value="0.12345" color={this.state.color.hex} size={63} />
        </div>
        <h2>Indicators</h2>
        <div
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 auto'
          }}
        >
          <Gauge
            showCurrentValue={true}
            id="gauge-1"
            className="gauge-1"
            units="MPH"
            value={this.state.value}
            color={this.state.color.hex}
            label="Gauge"
          />
          <GraduatedBar
            min={0}
            max={10}
            size={300}
            id="graduated-bar-1"
            showCurrentValue={true}
            className="graduated-bar"
            value={this.state.value}
            color={{
              gradient: true,
              ranges: { green: [0, 5], yellow: [5, 7], red: [7, 10] }
            }}
            label="GraduatedBar"
          />
          <Tank
            showCurrentValue
            id="tank-1"
            units="Units"
            className="tank"
            value={this.state.value}
            color={this.state.color.hex}
            label="Tank"
          />
          <Thermometer
            showCurrentValue
            id="thermometer-1"
            className="thermometer"
            units="F"
            value={this.state.value}
            color={this.state.color.hex}
            label="Thermometer"
            min={0}
            max={1}
          />
          <Indicator
            id="indicator-2"
            label="Power"
            labelPosition="top"
            value={this.state.power}
            color={this.state.color.hex}
          />
          <Indicator
            id="indicator-4"
            value={this.state.stop}
            color={this.state.color.hex}
            width={20}
            height={20}
            label="Stopped"
            labelPosition="top"
          />
          <Indicator
            id="indicator-5"
            width={20}
            height={10}
            label="Rectangle"
            value={this.state.vertical}
            color={this.state.color.hex}
            labelPosition="top"
          />
        </div>
      </div>
    );

    return (
      <div>
        {this.state.dark ? (
          <link
            rel="stylesheet"
            href="https://codepen.io/anon/pen/BYEPbO.css"
          />
        ) : (
          <link
            rel="stylesheet"
            href="https://codepen.io/plotly/pen/EQZeaW.css"
          />
        )}
        <h1>dash_daq Demo</h1>
        {this.state.dark && (
          <DarkThemeProvider>
            <BooleanSwitch
              on={this.state.dark}
              label="Dark Theme"
              setProps={this.toggleDark}
              color="black"
            />
          </DarkThemeProvider>
        )}
        {!this.state.dark && (
          <BooleanSwitch
            on={this.state.dark}
            label="Dark Theme"
            setProps={this.toggleDark}
          />
        )}
        <hr />
        {!this.state.dark && components}
        {this.state.dark && <DarkThemeProvider>{components}</DarkThemeProvider>}
      </div>
    );
  }
}

export default Demo;
