/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';

import LEDDisplay from '../LEDDisplay.react';
import Digit from '../../helpers/LEDDisplaySvg.react';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe('LEDDisplay', () => {
  it('renders', () => {
    const component = shallow(<LEDDisplay label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <LEDDisplay label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('renders number correctly', () => {
    const component = mount(<LEDDisplay value={123} />);

    const digits = component.find(Digit);
    expect(digits).toHaveLength(3);
    expect(digits.get(0).props.value).toBe('1');
    expect(digits.get(1).props.value).toBe('2');
    expect(digits.get(2).props.value).toBe('3');
  });

  it('renders strings correctly', () => {
    const component = mount(<LEDDisplay value={'123'} />);

    const digits = component.find(Digit);
    expect(digits).toHaveLength(3);
    expect(digits.get(0).props.value).toBe('1');
    expect(digits.get(1).props.value).toBe('2');
    expect(digits.get(2).props.value).toBe('3');
  });

  it('renders decimal values correctly', () => {
    const component = mount(<LEDDisplay value={1.23} />);

    const digits = component.find(Digit);
    expect(digits).toHaveLength(3);
    expect(digits.get(0).props.value).toBe('1');
    expect(digits.get(0).props.hasDecimal).toBeTruthy();
    expect(digits.get(1).props.value).toBe('2');
    expect(digits.get(2).props.value).toBe('3');
  });

  it('renders colon values correctly', () => {
    const component = mount(<LEDDisplay value={'1:23'} />);

    const digits = component.find(Digit);
    expect(digits).toHaveLength(3);
    expect(digits.get(0).props.value).toBe('1');
    expect(digits.get(0).props.hasColon).toBeTruthy();
    expect(digits.get(1).props.value).toBe('2');
    expect(digits.get(2).props.value).toBe('3');
  });

  it('handles bad input', () => {
    const component = mount(<LEDDisplay value={'invalid'} />);
    expect(component.text()).toEqual(expect.stringContaining('Invalid Input'));
  });

  it('adds leading zero if needed', () => {
    const component = mount(<LEDDisplay value={'.12'} />);

    const digits = component.find(Digit);
    expect(digits).toHaveLength(3);
    expect(digits.get(0).props.value).toBe('0');
    expect(digits.get(0).props.hasDecimal).toBeTruthy();
    expect(digits.get(1).props.value).toBe('1');
    expect(digits.get(2).props.value).toBe('2');
  });

  it('has assigned className', () => {
    const component = shallow(<LEDDisplay className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<LEDDisplay style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<LEDDisplay id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<LEDDisplay label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <LEDDisplay label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
