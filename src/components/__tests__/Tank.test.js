/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Tank from '../Tank.react';
import { Tick } from '../../styled/Tank.styled';
import Label from '../../styled/shared/Label.styled';
import CurrentValue, { ValueLabel } from '../../styled/CurrentValue.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe('Tank', () => {
  it('renders', () => {
    const component = shallow(<Tank label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <Tank label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('shows current value if set', () => {
    const component = mount(shallow(<Tank value={5} showCurrentValue={true} />).get(0));

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('5');
  });

  it('does not show current value if not set', () => {
    const component = mount(shallow(<Tank value={5} />).get(0));

    expect(component.find(CurrentValue)).toHaveLength(0);
  });

  it('shows current units if set', () => {
    const component = mount(
      shallow(<Tank value={5} showCurrentValue={true} units={'testUnits'} />).get(0)
    );

    const units = component.find(ValueLabel);
    expect(units).toHaveLength(1);
    expect(units.text()).toBe('testUnits');
  });

  it('does not show the current units if not set', () => {
    const component = mount(shallow(<Tank value={5} showCurrentValue={true} />).get(0));

    expect(component.find(ValueLabel)).toHaveLength(0);
  });

  it('has default marks', () => {
    const component = mount(<Tank label="Test label" />);
    expect(component.find(Tick)).toHaveLength(11);
  });

  it('has custom scale', () => {
    const scale = { custom: { 0: 'Low', 5: 'Medium', 10: 'High' } };
    const component = mount(<Tank label="Test label" scale={scale} />);
    expect(component.find(Tick)).toHaveLength(3);
  });

  it('has custom mark styling', () => {
    const scale = { custom: { 0: { style: { color: 'blue' }, label: '_' } } };
    const component = mount(<Tank label="Test label" scale={scale} />);

    const tickText = component
      .find(Tick)
      .children('.label')
      .childAt(0);

    expect(tickText).toHaveLength(1);
    expect(tickText.prop('style').color).toBe('blue');
  });

  it('handles logarithmic scale', () => {
    const component = mount(<Tank label="Test label" logarithmic showCurrentValue value={10000} />);

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('~104');
  });

  it('has assigned className', () => {
    const component = shallow(<Tank className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<Tank style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<Tank id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<Tank label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(<Tank label={{ label: 'Test Label', style: { color: 'blue' } }} />);
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
