/* eslint-disable */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';

import DirectionCompass from './../DirectionCompass.react';
import DarkThemeProvider from '../DarkThemeProvider.react';
import CurrentValueStyled from '../../styled/CurrentValue.styled';
import Label from '../../styled/shared/Label.styled';
import DirectionCompassSVG from '../../helpers/DirectionCompassSVG';

describe.only('Direction Compass', () => {
  it('Renders', () => {
    const component = shallow(<DirectionCompass />);
    expect(component).toBeTruthy();
  });

  it('Renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <DirectionCompass />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('direction angle', () => {
    const component = mount(<DirectionCompass direction={50} />);
    expect(component.prop('direction')).toBe(50);
    expect(component.find(DirectionCompassSVG).prop('direction')).toBe(50);

    component.setProps({ direction: 100 });

    expect(component.prop('direction')).toBe(100);
    expect(component.find(DirectionCompassSVG).prop('direction')).toBe(100);
  });

  it('current value', () => {
    const component = mount(<DirectionCompass showCurrentValue={true} />);

    expect(component.contains(CurrentValueStyled)).toBeTruthy();
    expect(component.find(CurrentValueStyled).prop('children')).toBe(0);
    component.setProps({ direction: 50 });
    expect(component.find(CurrentValueStyled).prop('children')).toBe(50);
  });

  it('label', () => {
    const component = mount(<DirectionCompass label="Compass" />);

    expect(component.find(Label)).toHaveLength(1);
    expect(component.find(Label).text()).toBe('Compass');

    component.setProps({ label: { label: 'new label', style: { color: 'red' } } });

    expect(component.find(Label).text()).toBe('new label');
    expect(component.find(Label).prop('style')).toStrictEqual({ color: 'red' });
  });

  it('label position', () => {
    const component = mount(<DirectionCompass label="Compass" labelPosition="top" />);

    expect(component.find(Label)).toHaveLength(1);
    expect(component.find(Label).prop('position')).toBe('top');

    component.setProps({ labelPosition: 'bottom' });

    expect(component.find(Label).prop('position')).toBe('bottom');
  });
});
