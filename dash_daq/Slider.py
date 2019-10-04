# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Slider(Component):
    """A Slider component.
A slider component with support for
a target value.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- marks (dict; optional): Marks on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties. marks has the following type: dict containing keys 'number'.
Those keys have the following types:
  - number (dict; optional): number has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- color (dict; default colors.DARKER_PRIMARY): Color configuration for the slider's track. color has the following type: string | dict containing keys 'default', 'gradient', 'ranges'.
Those keys have the following types:
  - default (string; optional): Fallback color to use when color.ranges
has gaps.
  - gradient (boolean; optional): Display ranges as a gradient between given colors.
Requires color.ranges to be contiguous along
the entirety of the gauge's range of values.
  - ranges (dict; optional): Define multiple color ranges on the slider's track.
The key determines the color of the range and
the value is the start,end of the range itself. ranges has the following type: dict containing keys 'color'.
Those keys have the following types:
  - color (list of numbers; optional)
- value (number; optional): The value of the input.
- className (string; optional): Additional CSS class for the root DOM node.
- labelPosition (a value equal to: 'top', 'bottom'; default 'bottom'): Where the component label is positioned.
- disabled (boolean; optional): If true, the handles can't be moved.
- dots (boolean; optional): When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.

Note: dots are disabled automatically when
using color.ranges
- included (boolean; optional): If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.
- min (number; default 0): Minimum allowed value of the slider.
- max (number; optional): Maximum allowed value of the slider.
- step (number; optional): Value by which increments or decrements are made.
- vertical (boolean; optional): If true, the slider will be vertical.
- size (number; default 265): Size of the slider in pixels.
- targets (dict; optional): Targets on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific target point,
the value should be an object which
contains style and label properties. targets has the following type: dict containing keys 'number'.
Those keys have the following types:
  - number (dict; optional): number has the following type: string | dict containing keys 'showCurrentValue', 'label', 'color', 'style'.
Those keys have the following types:
  - showCurrentValue (boolean; optional)
  - label (string; optional)
  - color (string; optional)
  - style (dict; optional)
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- handleLabel (dict; optional): Configuration of the slider handle's label.
Passing falsy value will disable the label. handleLabel has the following type: string | dict containing keys 'showCurrentValue', 'label', 'color', 'style'.
Those keys have the following types:
  - showCurrentValue (boolean; optional)
  - label (string; optional)
  - color (string; optional)
  - style (dict; optional)
- updatemode (a value equal to: 'mouseup', 'drag'; default 'mouseup'): Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, marks=Component.UNDEFINED, color=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, labelPosition=Component.UNDEFINED, disabled=Component.UNDEFINED, dots=Component.UNDEFINED, included=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, vertical=Component.UNDEFINED, size=Component.UNDEFINED, targets=Component.UNDEFINED, theme=Component.UNDEFINED, handleLabel=Component.UNDEFINED, updatemode=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'marks', 'color', 'value', 'className', 'labelPosition', 'disabled', 'dots', 'included', 'min', 'max', 'step', 'vertical', 'size', 'targets', 'theme', 'handleLabel', 'updatemode']
        self._type = 'Slider'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'marks', 'color', 'value', 'className', 'labelPosition', 'disabled', 'dots', 'included', 'min', 'max', 'step', 'vertical', 'size', 'targets', 'theme', 'handleLabel', 'updatemode']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Slider, self).__init__(**args)
