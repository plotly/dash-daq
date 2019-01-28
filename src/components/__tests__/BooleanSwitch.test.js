/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import BooleanSwitch from '../BooleanSwitch.react';
import Indicator from '../../styled/shared/Indicator.styled';
import { Wrapper, ButtonContainer, Button } from '../../styled/ToggleSwitch.styled';
import Label from '../../styled/shared/Label.styled';
import { dark } from '../../styled/constants';

describe('Boolean Switch', () => {
  it('renders', () => {
    const component = shallow(<BooleanSwitch label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(<BooleanSwitch theme={dark} />);
    expect(component).toBeTruthy();
  });

  it('renders vertically if desired', () => {
    const component = mount(<BooleanSwitch vertical={true} />);
    expect(component.find(Wrapper).prop('rotate')).toBe(-90);
  });

  it('calls setProps on click', () => {
    const setProps = sinon.spy();
    const component = mount(<BooleanSwitch setProps={setProps} on={false} />);

    component.find('button').simulate('click');

    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].on).toBeTruthy();
  });

  it('does not change props when disabled and clicked', () => {
    const setProps = sinon.spy();
    const component = mount(<BooleanSwitch setProps={setProps} on={false} disabled={true} />);
    expect(component.state('on')).toBeFalsy();

    component.find('button').simulate('click');

    expect(component.state('on')).toBeFalsy();
  });

  it('does not fire click event when disabled and clicked', () => {
    const eventReciever = sinon.spy();
    const component = mount(<BooleanSwitch disabled={true} />);

    component.find('button').simulate('click');

    expect(eventReciever.calledOnce).toBeFalsy();
  });

  it('handles absent setProps callbacks', () => {
    const component = mount(<BooleanSwitch />);

    component.find('button').simulate('click');
  });

  it('updates on when props change', () => {
    const component = mount(shallow(<BooleanSwitch on={false} />).get(0));
    expect(component.state('on')).toBeFalsy();

    component.setProps({ on: true });
    expect(component.state('on')).toBeTruthy();
  });

  it('does not update on when props change without on set', () => {
    const component = mount(shallow(<BooleanSwitch on={true} />).get(0));

    component.setProps();
    expect(component.state('on')).toBeTruthy();
  });

  it('has assigned className', () => {
    const component = shallow(<BooleanSwitch className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<BooleanSwitch style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = shallow(<BooleanSwitch id={'testId'} />);

    expect(component.prop('id')).toBe('testId');
  });

  it('positions label correctly', () => {
    const component = mount(<BooleanSwitch label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('displays indicators if desired', () => {
    const component = mount(<BooleanSwitch indicator={true} value={true} />);
    component.find(Indicator).forEach((node, index) => {
      if (index === 0) expect(node.prop('on')).toBeTruthy();
      if (index === 1) expect(node.prop('on')).toBeTruthy(); // TODO: update when indicator API changed
    });
  });
});
