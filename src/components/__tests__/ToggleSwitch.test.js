/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ToggleSwitch from '../ToggleSwitch.react';
import Indicator from '../../styled/shared/Indicator.styled';
import { Wrapper, ButtonContainer, Button, RowLabel } from '../../styled/ToggleSwitch.styled';
import Label from '../../styled/shared/Label.styled';
import { dark } from '../../styled/constants';

describe('Toggle Switch', () => {
  it('renders', () => {
    const component = shallow(<ToggleSwitch label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(<ToggleSwitch theme={dark} />);
    expect(component).toBeTruthy();
  });

  it('renders vertically if desired', () => {
    const component = mount(<ToggleSwitch vertical={true} />);
    expect(component.find(Wrapper).prop('rotate')).toBe(-90);
  });

  it('calls setProps on click', () => {
    const setProps = sinon.spy();
    const component = mount(<ToggleSwitch setProps={setProps} value={false} />);

    component.find('button').simulate('click');

    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toBeTruthy();
  });

  it('handles absent setProps callbacks', () => {
    const component = mount(<ToggleSwitch />);

    component.find('button').simulate('click');
  });

  it('updates value when props change', () => {
    const component = mount(shallow(<ToggleSwitch value={false} />).get(0));
    expect(component.state('value')).toBeFalsy();

    component.setProps({ value: true });
    expect(component.state('value')).toBeTruthy();
  });

  it('does not update value when props change if value not set', () => {
    const component = mount(shallow(<ToggleSwitch value={true} />).get(0));

    component.setProps({});
    expect(component.state('value')).toBeTruthy();
  });

  it('has assigned className', () => {
    const component = shallow(<ToggleSwitch className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<ToggleSwitch style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = shallow(<ToggleSwitch id={'testId'} />);

    expect(component.prop('id')).toBe('testId');
  });

  it('positions label correctly', () => {
    const component = mount(<ToggleSwitch label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('displays indicators if desired', () => {
    const component = mount(<ToggleSwitch indicator={true} value={true} />);
    component.find(Indicator).forEach((node, index) => {
      if (index === 0) expect(node.prop('on')).toBeTruthy();
      if (index === 1) expect(node.prop('on')).toBeTruthy(); // TODO: update when indicator API changed
    });
  });

  it('displays multiple labels if desired', () => {
    const component = mount(
      <ToggleSwitch label={['Up', { label: 'Down', style: { color: 'blue' } }]} value={true} />
    );
    component.find(RowLabel).forEach((node, index) => {
      if (index === 0) expect(node.prop('children')).toBeTruthy();
      if (index === 1) expect(node.prop('children')).toBeTruthy();
    });

    const verticalComponent = mount(
      <ToggleSwitch
        label={['Up', { label: 'Down', style: { color: 'blue' } }]}
        vertical={true}
        value={true}
      />
    );
    verticalComponent.find(RowLabel).forEach((node, index) => {
      if (index === 0) expect(node.prop('children')).toBeTruthy();
      if (index === 1) expect(node.prop('children')).toBeTruthy();
    });
  });
});
