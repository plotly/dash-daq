/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ColorPicker from '../ColorPicker.react';
import Indicator from '../../styled/shared/Indicator.styled';
import { Wrapper, ButtonContainer, Button } from '../../styled/ToggleSwitch.styled';
import Label from '../../styled/shared/Label.styled';
import { dark } from '../../styled/constants';

describe('Color Picker', () => {
  it('renders', () => {
    const component = shallow(<ColorPicker label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(<ColorPicker theme={dark} />);
    expect(component).toBeTruthy();
  });

  it('handles hex value', () => {
    const component = mount(shallow(<ColorPicker value={{ hex: '#ffffff' }} />).get(0));
    expect(component.state('value')).toEqual({ hex: '#ffffff' });
  });

  it('handles rgba value', () => {
    const component = mount(
      shallow(<ColorPicker value={{ rgb: { r: 50, g: 100, b: 150, a: 0.8 } }} />).get(0)
    );
    expect(component.state('value')).toEqual({ rgb: { r: 50, g: 100, b: 150, a: 0.8 } });
  });

  it('calls setProps callbacks', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<ColorPicker setProps={setProps} />).get(0));

    component.instance().setValue({ hex: '#ffffff', rgb: '_' });
    expect(setProps.calledOnce).toBeTruthy();
  });

  it('handles absent setProps callbacks', () => {
    const component = mount(shallow(<ColorPicker />).get(0));

    component.instance().setValue({ hex: '#ffffff', rgb: '_' });
    expect(component).toBeTruthy();
  });

  it('does not explode when value set to null', () => {
    const component = mount(shallow(<ColorPicker />).get(0));

    component.instance().setValue(null);
    expect(component).toBeTruthy();
  });

  it('updates when props change', () => {
    const component = mount(shallow(<ColorPicker value={{ hex: '#ffffff' }} />).get(0));
    const oldColor = component.state('value');

    component.setProps({ value: { hex: '#000000' } });

    expect(component.state('value')).not.toBe(oldColor);
  });

  it('does not update on when props change without on set', () => {
    const component = mount(shallow(<ColorPicker value={{ hex: '#ffffff' }} />).get(0));

    component.setProps();
    expect(component.state('value')).toEqual({ hex: '#ffffff' });
  });

  it('has assigned className', () => {
    const component = shallow(<ColorPicker className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<ColorPicker style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = shallow(<ColorPicker id={'testId'} />);

    expect(component.prop('id')).toBe('testId');
  });

  it('positions label correctly', () => {
    const component = mount(<ColorPicker label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });
});
