/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Thermometer from '../Thermometer.react';
import { Bulb } from '../../styled/Thermometer.styled';
import { Tick } from '../../styled/Tank.styled';
import CurrentValue, { ValueLabel } from '../../styled/CurrentValue.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe.only('Thermometer', () => {
  it('renders', () => {
    const component = mount(<Thermometer />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <Thermometer label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('shows current value if set', () => {
    const component = mount(shallow(<Thermometer value={5} showCurrentValue={true} />).get(0));

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('5.0');
  });

  it('does not show current value if not set', () => {
    const component = mount(shallow(<Thermometer value={5} />).get(0));

    expect(component.find(CurrentValue)).toHaveLength(0);
  });

  it('shows current units if set', () => {
    const component = mount(
      shallow(<Thermometer value={5} showCurrentValue={true} units={'testUnits'} />).get(0)
    );

    const units = component.find(ValueLabel);
    expect(units).toHaveLength(1);
    expect(units.text()).toBe('testUnits');
  });

  it('does not show the current units if not set', () => {
    const component = mount(shallow(<Thermometer value={5} showCurrentValue={true} />).get(0));

    expect(component.find(ValueLabel)).toHaveLength(0);
  });

  it('has default marks', () => {
    const component = mount(<Thermometer label="Test label" />);
    expect(component.find(Tick)).toHaveLength(11);
  });

  it('has custom marks', () => {
    const scale = { custom: { 0: 'Low', 5: 'Medium', 10: 'High' } };
    const component = mount(<Thermometer label="Test label" scale={scale} step={5} />);
    expect(component.find(Tick)).toHaveLength(3);
  });

  it('fills the bulb on non min value', () => {
    const component = mount(<Thermometer value={1} />);

    expect(component.find(Bulb).prop('on')).toBeTruthy();
  });

  it('does not fill the bulb on min value', () => {
    const component = mount(<Thermometer value={0} />);

    expect(component.find(Bulb).prop('on')).toBeFalsy();
  });

  it('has custom mark styling', () => {
    const scale = { custom: { 0: { style: { color: 'blue' }, label: '_' } } };
    const component = mount(<Thermometer label="Test label" scale={scale} />);

    const tickText = component.find(Tick).children('.label');

    expect(tickText).toHaveLength(1);
    expect(tickText.prop('style').color).toBe('blue');
  });

  it('handles logarithmic scale', () => {
    const component = mount(<Thermometer logarithmic showCurrentValue value={10000} />);

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('~104');
  });

  it('has assigned className', () => {
    const component = mount(<Thermometer className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<Thermometer style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<Thermometer id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<Thermometer label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <Thermometer label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
