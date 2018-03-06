/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import NumericInput from '../NumericInput.react';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe.only('Numeric Input', () => {
  it('renders', () => {
    const component = mount(<NumericInput label="testLabel" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <NumericInput label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('updates value when props change', () => {
    const component = mount(shallow(<NumericInput value={2} />).get(0));

    component.setProps({ value: 3 });
    expect(component.state('value')).toBe(3);
  });

  it('does not update value on prop change without value set', () => {
    const component = mount(shallow(<NumericInput value={2} />).get(0));

    component.setProps({});
    expect(component.state('value')).toBe(2);
  });

  it('updates value when setValue is called', () => {
    const component = mount(shallow(<NumericInput value={2} />).get(0));

    component.instance().setValue(3);
    expect(component.state('value')).toBe(3);
  });

  it('does not update value when setValue is called with null', () => {
    const component = mount(shallow(<NumericInput value={2} />).get(0));

    component.instance().setValue(null);
    expect(component.state('value')).toBe(2);
  });

  it('setProps is called when setValue is called', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<NumericInput value={2} setProps={setProps} />).get(0));

    component.instance().setValue(3);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toBe(3);
  });

  it('setProps does not throw when not bound', () => {
    const component = mount(shallow(<NumericInput value={2} />).get(0));

    component.instance().setValue(3);
  });

  it('has assigned className', () => {
    const component = mount(<NumericInput className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<NumericInput style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<NumericInput id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<NumericInput label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <NumericInput label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
