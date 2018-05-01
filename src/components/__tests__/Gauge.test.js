/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Gauge from '../Gauge.react';
import GaugeSvg from '../../helpers/GaugeSvg.react';
import Label from '../../styled/shared/Label.styled';
import CurrentValue, { ValueLabel } from '../../styled/CurrentValue.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe.only('Gauge', () => {
  it('renders', () => {
    const component = mount(<Gauge label="testLabel" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <Gauge label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  describe('renders at multiple angles', () => {
    it('renders at min value', () => {
      const component = mount(shallow(<Gauge value={0} />).get(0));
      expect(component).toBeTruthy();

      expect(component.find(GaugeSvg).prop('progress')).toBe(0);
    });

    it('renders at small value', () => {
      const component = mount(shallow(<Gauge value={2} />).get(0));
      expect(component).toBeTruthy();

      expect(component.find(GaugeSvg).prop('progress')).toBe(2.0 / 10);
    });

    it('renders at medium value', () => {
      const component = mount(shallow(<Gauge value={5} />).get(0));
      expect(component).toBeTruthy();

      expect(component.find(GaugeSvg).prop('progress')).toBe(5.0 / 10);
    });

    it('renders at large value', () => {
      const component = mount(shallow(<Gauge value={7} />).get(0));
      expect(component).toBeTruthy();

      expect(component.find(GaugeSvg).prop('progress')).toBe(7.0 / 10);
    });

    it('renders at max value', () => {
      const component = mount(shallow(<Gauge value={10} />).get(0));
      expect(component).toBeTruthy();

      expect(component.find(GaugeSvg).prop('progress')).toBe(1);
    });
  });

  it('has default marks', () => {
    const component = mount(shallow(<Gauge label="Test label" />).get(0));
    expect(component.find('line')).toHaveLength(12);
  });

  it('has custom marks', () => {
    const scale = { custom: { 0: 'Low', 5: 'Medium', 10: 'High' } };
    const component = mount(shallow(<Gauge scale={scale} step={5} label="Test label" />).get(0));
    expect(component.find('text')).toHaveLength(3);
  });

  it('shows current value if set', () => {
    const component = mount(shallow(<Gauge value={5} showCurrentValue={true} />).get(0));

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('5.0');
  });

  it('does not show current value if not set', () => {
    const component = mount(shallow(<Gauge value={5} />).get(0));

    expect(component.find(CurrentValue)).toHaveLength(0);
  });

  it('shows current units if set', () => {
    const component = mount(
      shallow(<Gauge value={5} showCurrentValue={true} units={'testUnits'} />).get(0)
    );

    const units = component.find(ValueLabel);
    expect(units).toHaveLength(1);
    expect(units.text()).toBe('testUnits');
  });

  it('does not show the current units if not set', () => {
    const component = mount(shallow(<Gauge value={5} showCurrentValue={true} />).get(0));

    expect(component.find(ValueLabel)).toHaveLength(0);
  });

  it('handles logarithic mode', () => {
    const component = mount(shallow(<Gauge logarithmic showCurrentValue value={10000} />).get(0));

    const currValue = component.find(CurrentValue);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('~104');
  });

  it('has assigned className', () => {
    const component = mount(<Gauge className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<Gauge style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<Gauge id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<Gauge label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(<Gauge label={{ label: 'Test Label', style: { color: 'blue' } }} />);
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
