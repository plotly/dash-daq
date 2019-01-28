/* eslint-disable */
import React from 'react';
import ReactSlider from 'rc-slider';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Slider from '../Slider.react';
import {
  SliderContainer,
  Handle,
  HandleContainer,
  targetStyles,
  Label as SliderLabel
} from '../../styled/Slider.styled';
import Label from '../../styled/shared/Label.styled';

import { dark } from '../../styled/constants';

describe('Slider', () => {
  it('renders', () => {
    const component = shallow(<Slider label="Test label" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(<Slider theme={dark} />);
    expect(component).toBeTruthy();
  });

  it('renders contiguous range', () => {
    const color = { default: 'ffffff', ranges: { blue: [0, 5], red: [5, 10] } };
    const component = mount(shallow(<Slider min={0} max={10} value={1} color={color} />).get(0));

    expect(component).toBeTruthy();
  });

  it('renders contiguous range with gradient', () => {
    const color = { default: 'ffffff', ranges: { blue: [0, 5], red: [5, 10] } };
    const component = mount(shallow(<Slider value={1} gradient color={color} />).get(0));

    expect(component).toBeTruthy();
  });

  it('renders non-contiguous range', () => {
    const color = { default: 'ffffff', ranges: { blue: [1, 5], red: [7, 9] } };
    const component = mount(shallow(<Slider value={1} color={color} />).get(0));

    expect(component).toBeTruthy();
  });

  it('renders contiguous range in dark mode', () => {
    const color = { default: 'ffffff', ranges: { blue: [0, 5], red: [5, 10] } };
    const component = mount(
      shallow(<Slider min={0} max={10} value={1} theme={dark} value={1} color={color} />).get(0)
    );

    expect(component).toBeTruthy();
  });

  it('renders non-contiguous range in dark mode', () => {
    const color = { default: 'ffffff', ranges: { blue: [1, 5], red: [7, 9] } };
    const component = mount(shallow(<Slider theme={dark} value={1} color={color} />).get(0));

    expect(component).toBeTruthy();
  });

  it('assigns correct value to slider', () => {
    const component = mount(<Slider min={0} max={100} value={10} />);

    const slider = component.find(ReactSlider);
    expect(slider.prop('value')).toBe(10);
  });

  it('renders custom handle label if desired', () => {
    const handleLabel = {
      showCurrentValue: true,
      label: 'test_title'
    };

    const component = mount(
      <Slider min={0} max={100} value={10} label="test-label" handleLabel={handleLabel} />
    );

    const handle = component.find(HandleContainer);
    const label = component.find(SliderLabel);

    expect(handle).toHaveLength(1);
    expect(handle.prop('isTarget')).toBeFalsy();

    expect(label).toHaveLength(1);
    expect(label.text()).toBe('test_title10');
  });

  it('correctly calculates label offset', () => {
    const component = mount(shallow(<Slider />).get(0));
    expect(component.instance().calcLabelOffset({ vertical: true })).toBe(null);
    expect(component.instance().calcLabelOffset({ marks: {}, labelPosition: 'bottom' })).toBe(
      'transform: translateY(20px);'
    );
  });

  it('renders simple handle label', () => {
    const component = mount(<Slider min={0} max={100} value={10} handleLabel={'test_label'} />);

    const label = component.find(SliderLabel);
    expect(label).toHaveLength(1);
    expect(label.text()).toBe('test_label');
  });

  it('calls setprops correclty on mouseup mode', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<Slider setProps={setProps} />).get(0));

    component.instance().onChange(11);
    expect(setProps.notCalled).toBeTruthy();

    component.instance().onAfterChange(11);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toBe(11);
  });

  it('calls setprops correclty on drag mode', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<Slider updatemode={'drag'} setProps={setProps} />).get(0));

    component.instance().onChange(11);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toBe(11);

    component.instance().onAfterChange(12);
    expect(setProps.calledOnce).toBeTruthy();
  });

  it('does not explode when setprops is not passed', () => {
    const component = mount(shallow(<Slider value={11} />).get(0));

    component.instance().onChange(11);
    component.instance().onAfterChange(11);
    expect(component).toBeTruthy();

    const dragComponent = mount(shallow(<Slider value={11} updatemode={'drag'} />).get(0));

    dragComponent.instance().onChange(11);
    dragComponent.instance().onAfterChange(11);
    expect(dragComponent).toBeTruthy();
  });

  it('handles updated props', () => {
    const color = { default: 'ffffff', ranges: { blue: [0, 5], red: [5, 10] } };
    const component = mount(shallow(<Slider value={1} color={color} />).get(0));

    const beforeState = {
      value: component.state('value'),
      trackStyle: component.state('trackStyle')
    };

    component.setProps({});
    expect(component.state('value')).toBe(beforeState.value);
    expect(component.state('trackStyle')).toEqual(beforeState.trackStyle);

    const newValue = 2;
    const newColor = { default: '000000', ranges: { blue: [0, 6], red: [6, 10] } };

    component.setProps({ value: newValue, color: newColor });
    expect(component.state('value')).not.toBe(beforeState.value);
    expect(component.state('trackStyle')).not.toEqual(beforeState.trackStyle);
  });

  it('renders custom targets', () => {
    const component = mount(
      <Slider
        label="test-label"
        min={0}
        max={100}
        targets={{
          50: 'test_target',
          60: { label: 'other_target', showCurrentValue: true },
          70: { label: 'one_more_target', showCurrentValue: false }
        }}
      />
    );

    const target = component.find(SliderLabel).filterWhere(label => label.prop('isTarget'));
    expect(target).toHaveLength(3);
    expect(target.at(0).text()).toBe('test_target');
    expect(target.at(1).text()).toBe('other_target60');
    expect(target.at(2).text()).toBe('one_more_target');
  });

  it('has assigned className', () => {
    const component = shallow(<Slider className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = shallow(<Slider style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = shallow(<Slider id={'testId'} />);

    expect(component.prop('id')).toBe('testId');
  });

  it('positions label correctly', () => {
    const component = mount(<Slider label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });
});
