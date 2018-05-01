/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import PrecisionInput from '../PrecisionInput.react';
import { Container, Digit, ExponentialDigit } from '../../styled/PrecisionInput.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe.only('Precision Input', () => {
  it('renders', () => {
    const component = mount(<PrecisionInput label="testLabel" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <PrecisionInput label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('displays correct value', () => {
    const component = mount(shallow(<PrecisionInput precision={2} value={120} />).get(0));
    let digits = component.find(Digit);
    expect(digits).toHaveLength(5);
    expect(digits.at(0).text()).toBe('1');
    expect(digits.at(2).text()).toBe('2');
    expect(digits.at(4).text()).toBe('2');
  });

  it('displays updates with correct value', () => {
    const component = mount(shallow(<PrecisionInput precision={3} value={1} />).get(0));

    component.instance().toggleInput();
    component.instance().setValue(12300);
    component.instance().toggleInput();

    let digits = component.find(Digit);
    expect(digits).toHaveLength(6);
    expect(digits.at(0).text()).toBe('1');
    expect(digits.at(2).text()).toBe('2');
    expect(digits.at(3).text()).toBe('3');
    expect(digits.at(5).text()).toBe('4');
  });

  it('updates value when props change', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.setProps({ value: 3 });
    expect(component.state('value')).toBe(3);
  });

  it('does not update value on prop change without value set', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.setProps({});
    expect(component.state('value')).toBe(2);
  });

  it('updates value when setValue is called', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.instance().setValue(3);
    expect(component.state('value')).toBe(3);
  });

  it('does not update value when setValue is called with null', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.instance().setValue(null);
    expect(component.state('value')).toBe(2);
  });

  it('setProps is called when setValue is called', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<PrecisionInput value={2} setProps={setProps} />).get(0));

    component.instance().setValue(3);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toEqual(3);
  });

  it('setProps is called when setValue with corrected decimal value', () => {
    const setProps = sinon.spy();
    const component = mount(
      shallow(<PrecisionInput value={1234} precision={2} setProps={setProps} />).get(0)
    );

    component.instance().setValue(1234);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toEqual(1200);
  });

  it('setProps does not throw when not bound', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.instance().setValue(3);
  });

  it('if tempValue is set, state is updated to tempValue on blur', () => {
    const setProps = sinon.spy();
    const component = mount(
      shallow(<PrecisionInput value={1234} precision={2} setProps={setProps} />).get(0)
    );

    component.instance().setTempValue(123);
    component.instance().blur();
    expect(component.state('value')).toEqual(120);
  });

  it('does not change value when blur is called with tempValue set to null', () => {
    const component = mount(shallow(<PrecisionInput value={2} />).get(0));

    component.instance().setTempValue(null);
    component.instance().blur();
    expect(component.state('value')).toEqual(2);
  });

  it('has assigned className', () => {
    const component = mount(<PrecisionInput className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<PrecisionInput style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<PrecisionInput id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<PrecisionInput label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <PrecisionInput
        label={{ label: 'Test Label', style: { color: 'blue' } }}
        value={2.0}
        precition={3}
      />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
