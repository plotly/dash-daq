# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GraduatedBar(Component):
    """A GraduatedBar component.
A graduated bar component that displays
a value within some range as a
percentage.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- value (number; optional): The value of the graduated bar
- color (dict; default light.primary): Color configuration for the graduated bar's
progress blocks. color has the following type: string | dict containing keys 'default', 'gradient', 'ranges'.
Those keys have the following types:
  - default (string; optional): Fallback color to use when color.ranges
has gaps.
  - gradient (boolean; optional): Display ranges as a gradient between given colors.
Requires color.ranges to be contiguous along
the entirety of the graduated bar's range of values.
  - ranges (dict; optional): Define multiple color ranges on the graduated bar's track.
The key determines the color of the range and
the value is the start,end of the range itself. ranges has the following type: dict containing keys 'color'.
Those keys have the following types:
  - color (list of numbers; optional)
- size (number; default 250): The size (length) of the graduated bar in pixels
- vertical (boolean; optional): If true, will display bar vertically instead of horizontally
- min (number; default 0): The minimum value of the graduated bar
- max (number; default 10): The maximum value of the graduated bar
- step (number; default 0.5): Value by which progress blocks appear
- showCurrentValue (boolean; optional): If true, the current percentage
 of the bar will be displayed
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the control. To control styling, pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the component label is positioned.
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root component element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, color=Component.UNDEFINED, size=Component.UNDEFINED, vertical=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'color', 'size', 'vertical', 'min', 'max', 'step', 'showCurrentValue', 'theme', 'label', 'labelPosition', 'className', 'style']
        self._type = 'GraduatedBar'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'color', 'size', 'vertical', 'min', 'max', 'step', 'showCurrentValue', 'theme', 'label', 'labelPosition', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GraduatedBar, self).__init__(**args)
