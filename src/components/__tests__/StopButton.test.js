/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import StopButton from '../StopButton.react';
import LabelContainer from '../../styled/shared/LabelContainer.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe('Stop Button', () => {
  it('renders', () => {
    const component = mount(<StopButton label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <StopButton label="test" />{' '}
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('sets custom button text', () => {
    const component = mount(<StopButton>custom_text</StopButton>);
    expect(component.render().text()).toBe('custom_text');
  });

  it('calls setProps with n_clicks', () => {
    const setProps = sinon.spy();
    const component = mount(<StopButton setProps={setProps} />);

    component.find('button').simulate('click');

    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].n_clicks).toBe(1);
  });

  it('handles unbound setProps prop', () => {
    const component = mount(<StopButton />);

    component.find('button').simulate('click');
  });

  it('has assigned id', () => {
    const component = mount(<StopButton id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('has assigned className', () => {
    const component = mount(<StopButton className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<StopButton style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('positions label correctly', () => {
    const component = mount(<StopButton label="Test label" labelPosition="bottom" />);
    expect(component.find(LabelContainer).prop('labelPosition')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <StopButton label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
