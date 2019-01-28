/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import PowerButton from '../PowerButton.react';
import Indicator from '../../styled/shared/Indicator.styled';
import LabelContainer from '../../styled/shared/LabelContainer.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe('Power Button', () => {
  it('renders', () => {
    const component = mount(<PowerButton label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <PowerButton label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('updates on when props change', () => {
    const component = mount(shallow(<PowerButton on={false} />).get(0));
    expect(component.state('on')).toBeFalsy();

    component.setProps({ on: true });
    expect(component.state('on')).toBeTruthy();
  });

  it('does not update on value when props change without on set', () => {
    const component = mount(shallow(<PowerButton on={true} />).get(0));

    component.setProps({});
    expect(component.state('on')).toBeTruthy();
  });

  it('calls setProps on click', () => {
    const setProps = sinon.spy();
    const component = mount(<PowerButton setProps={setProps} on={false} />);

    component.find('button').simulate('click');

    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].on).toBeTruthy();
  });

  it('handles absent setProps callbacks', () => {
    const component = mount(<PowerButton />);

    component.find('button').simulate('click');
  });

  it('has assigned className', () => {
    const component = mount(<PowerButton className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<PowerButton style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<PowerButton id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<PowerButton label="Test label" labelPosition="bottom" />);
    expect(component.find(LabelContainer).prop('labelPosition')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <PowerButton label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
