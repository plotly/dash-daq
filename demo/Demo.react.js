import React, { Component } from 'react';
import {
  BooleanSwitch,
  Gauge,
  GraduatedBar,
  Indicator,
  Knob,
  NumericInput,
  PowerButton,
  StopButton,
  Tank,
  Thermometer,
  ToggleSwitch,
  DarkThemeProvider
} from '../src';

class Demo extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			on: false,
			power: true,
      dark: false,
      stop: false,
      vertical: false
		}

		this.updateValue = this.updateValue.bind(this)
		this.updatePower = this.updatePower.bind(this)
		this.toggle = this.toggle.bind(this)
    this.toggleDark = this.toggleDark.bind(this)
    this.stopPressed = this.stopPressed.bind(this)
    this.toggleVerticalSwitch = this.toggleVerticalSwitch.bind(this);
	}

	updateValue ({ value }) {
		this.setState({ value })
	}

	updatePower ({ on }) {
		this.setState({ power: on })
  }

  stopPressed () {
    this.setState({ stop: !this.state.stop });
  }

	toggle() {
		this.setState(({ on }) => ({ on: !on }))
	}

  toggleDark() {
		this.setState(({ dark }) => ({ dark: !dark }))
  }

  toggleVerticalSwitch() {
    this.setState({ vertical: !this.state.vertical });
  }

	render() {
    const components = (
      <div>
        <h2>Controls</h2>
        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto'}}>
          <Knob id="knob-1" setProps={this.updateValue} label="Knob" />
          <NumericInput id="numeric-input-1" className="numeric-input" labelPosition="top" label="Numeric Input" />
          <NumericInput disabled labelPosition="top" label="Numeric Input (disabled)" />
          <ToggleSwitch disabled={true} label="Toggle Switch" labelPosition="top" id="toggle-switch-1" className="toggle-switch" value={this.state.on} setProps={this.toggle} />
          <ToggleSwitch label={['Off', 'On']} vertical={true} value={this.state.on} setProps={this.toggle}/>
          <StopButton id="stop-button-1" className="stop-button" label="Stop Button" setProps={this.stopPressed} />
          <PowerButton id="power-button-1" className="power-button" labelPosition="top" on={false} setProps={this.updatePower} label="Power Button" />
          <BooleanSwitch id="boolean-switch-1" className="boolean-switch"  value={false} label="Boolean Switch" labelPosition="top" />
          <BooleanSwitch id="boolean-switch-2" color={'#ff5e5e'} vertical={true} on={this.state.vertical} label="Vertical" labelPosition="bottom" setProps={this.toggleVerticalSwitch} />
        </div>
        <h2>Indicators</h2>
        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto'}}>
          <Gauge showCurrentValue={true} id="gauge-1" className="gauge-1" units="MPH" marks={{ 0: 'Low', 5: 'Medium', 10: 'High'}} step={1}  value={this.state.value} label="Gauge" />
          <GraduatedBar id="graduated-bar-1" showCurrentValue={true} className="graduated-bar" value={this.state.value} label="GraduatedBar" />
          <Tank showCurrentValue id="tank-1" units="Units" className="tank" value={this.state.value} label="Tank" />
          <Thermometer showCurrentValue id="thermomter-1" className="thermometer" units="F" value={this.state.value} label="Thermometer" />
          <Indicator id="indicator-2" label="Power" labelPosition="top" value={this.state.power} />
          <Indicator id="indicator-4"  value={this.state.stop} width={20} height={20} label="Stopped" labelPosition="top" />
          <Indicator id="indicator-5" width={20} height={10} label="Rectangle" value={this.state.vertical} labelPosition="top" />
        </div>
      </div>
    )

		return (
			<div>
        { this.state.dark ? <link rel="stylesheet" href="https://codepen.io/anon/pen/BYEPbO.css" /> :
                            <link rel="stylesheet" href="https://codepen.io/plotly/pen/EQZeaW.css" />
        }
				<h1>dash-control-components Demo</h1>
        {this.state.dark && (
          <DarkThemeProvider>
            <BooleanSwitch on={this.state.dark} label="Dark Theme" setProps={this.toggleDark} color="black" />
          </DarkThemeProvider>
        )}
        {!this.state.dark && (
          <BooleanSwitch on={this.state.dark} label="Dark Theme" setProps={this.toggleDark} />
        )}
				<hr/>
        {!this.state.dark && components}
        {this.state.dark && (
          <DarkThemeProvider>
            {components}
          </DarkThemeProvider>
        )}
			</div>
		);
	}
}

export default Demo;
