/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';

import Indicator from '../Indicator.react';
import IndicatorLight from '../../styled/shared/Indicator.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe.only('Thermometer', () => {
  it('renders', () => {
    const component = mount(<Indicator label="testLabel" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <Indicator label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('renders circular indicator if only height is set', () => {
    const component = mount(<Indicator height={500} />);
    expect(component.find(IndicatorLight).prop('rectangular')).toBeFalsy();
  });

  it('renders circular indicator if only width is set', () => {
    const component = mount(<Indicator width={500} />);
    expect(component.find(IndicatorLight).prop('rectangular')).toBeFalsy();
  });

  it('renders rectangular indicator if height and width are both set', () => {
    const component = mount(<Indicator height={500} width={40} />);
    expect(component.find(IndicatorLight).prop('rectangular')).toBeTruthy();
  });

  it('lights up when on', () => {
    const component = mount(<Indicator value={true} />);
    expect(component.find(IndicatorLight).prop('on')).toBeTruthy();
  });

  it('does not light up when off', () => {
    const component = mount(<Indicator value={false} />);
    expect(component.find(IndicatorLight).prop('on')).toBeFalsy();
  });

  it('has assigned className', () => {
    const component = mount(<Indicator className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<Indicator style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<Indicator id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<Indicator label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <Indicator label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
