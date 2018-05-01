/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Knob from '../Knob.react';
import Container from '../../styled/Knob.styled';
import Label from '../../styled/shared/Label.styled';
import CurrentValue from '../../styled/CurrentValue.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

// mock mouseMove events
const NEGATIVE_EVENT = {
  clientX: -10,
  clientY: -20
};

const ARBITRARY_START_X = 20,
  ARBITRARY_START_Y = 20;

const MOCK_START_EVENT = {
  clientX: ARBITRARY_START_X,
  clientY: ARBITRARY_START_Y
};

const ARBITRARY_END_X = 300,
  ARBITRARY_END_Y = 350;

const MOCK_END_EVENT = {
  clientX: ARBITRARY_END_X,
  clientY: ARBITRARY_END_Y
};

const MOCK_TOUCH_START_EVENT = {
  touches: [MOCK_START_EVENT]
};

const MOCK_TOUCH_END_EVENT = {
  touches: [MOCK_END_EVENT]
};

describe('Knob', () => {
  it('renders', () => {
    const component = mount(<Knob label="testLabel" />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <Knob label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('renders disabled', () => {
    const component = mount(shallow(<Knob disabled={true} />).get(0));
    expect(component).toBeTruthy();
  });

  it('does not allow noop to modify state', () => {
    const component = mount(shallow(<Knob disabled={true} />).get(0));
    const stateBefore = component.state();

    component.instance().noop();

    expect(component.state()).toBe(stateBefore);
  });

  it('updates value when props change', () => {
    const component = mount(shallow(<Knob value={2} />).get(0));

    component.setProps({ value: 3 });
    expect(component.state('value')).toBe(3);
  });

  it('does not update value on prop change with undefined value', () => {
    const component = mount(shallow(<Knob value={2} />).get(0));

    component.setProps({ value: undefined });
    expect(component.state('value')).toBe(2);
  });

  it('updates value when setValue is called', () => {
    const component = mount(shallow(<Knob value={2} />).get(0));

    component.instance().setValue(3);
    expect(component.state('value')).toBe(3);
  });

  it('setProps is called when setValue is called', () => {
    const setProps = sinon.spy();
    const component = mount(shallow(<Knob value={2} setProps={setProps} />).get(0));

    component.instance().setValue(3);
    expect(setProps.calledOnce).toBeTruthy();
    expect(setProps.getCall(0).args[0].value).toBe(3);
  });

  it('setProps does not throw when not bound', () => {
    const component = mount(shallow(<Knob value={2} />).get(0));

    component.instance().setValue(3);
  });

  it('onMouseMove does not change state if not dragging', () => {
    const component = mount(shallow(<Knob />).get(0));

    component.instance().onMouseMove(MOCK_START_EVENT);
    component.instance().onMouseMove(MOCK_END_EVENT);

    expect(component.state('value')).toBe(0);
    expect(component.state('currentDeg')).toBe(0);
  });

  it('onMouseMove changes state if dragging', () => {
    const component = mount(shallow(<Knob />).get(0));

    component.instance().onMouseDown();

    component.instance().onMouseMove(MOCK_START_EVENT);
    component.instance().onMouseMove(MOCK_END_EVENT);

    component.instance().onMouseUp();

    expect(component.state('value')).toBeGreaterThan(0);
    expect(component.state('currentDeg')).toBeGreaterThan(0);
  });

  it('onMouseMove changes state if dragging (touch event)', () => {
    const component = mount(shallow(<Knob />).get(0));

    component.instance().onMouseDown();

    component.instance().onMouseMove(MOCK_TOUCH_START_EVENT);
    component.instance().onMouseMove(MOCK_TOUCH_END_EVENT);

    component.instance().onMouseUp();

    expect(component.state('value')).toBeGreaterThan(0);
    expect(component.state('currentDeg')).toBeGreaterThan(0);
  });

  it('onMouseMove does not change state if does not move (with double mouseUp simulation)', () => {
    const component = mount(shallow(<Knob />).get(0));

    component.setState({ isDragging: true });
    expect(component.state('isDragging')).toBeTruthy();

    component.instance().onMouseDown();

    component.instance().onMouseMove(NEGATIVE_EVENT);
    component.instance().onMouseMove(NEGATIVE_EVENT);

    component.instance().onMouseUp();
    component.instance().onMouseUp();

    expect(component.state('value')).toBe(0);
    expect(component.state('currentDeg')).toBe(0);
  });

  it('unmount does not throw', () => {
    const component = mount(shallow(<Knob />).get(0));
    component.instance().componentWillUnmount();
  });

  it('has default marks', () => {
    const component = mount(shallow(<Knob label="Test label" />).get(0));
    expect(component.find('text')).toHaveLength(6);
  });

  it('has custom marks', () => {
    const scale = { custom: { 0: 'Low', 5: 'Medium', 10: 'High' } };
    const component = mount(shallow(<Knob scale={scale} step={5} label="Test label" />).get(0));
    expect(component.find('text')).toHaveLength(3);
  });

  it('has assigned className', () => {
    const component = mount(<Knob className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<Knob style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<Knob id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<Knob label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(<Knob label={{ label: 'Test Label', style: { color: 'blue' } }} />);
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
