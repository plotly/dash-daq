# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Gauge(Component):
    """A Gauge component.
A Gauge component that points to
a value between some range.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- value (number; optional): The value of gauge. If logarithmic, the displayed
value will be the logarithm of the inputted value.
- size (number; optional): The size (diameter) of the gauge in pixels
- min (number; default 0): The minimum value of the gauge. If logarithmic,
represents the minimum exponent.
- max (number; default 10): The maximum value of the gauge. If logarithmic,
represents the maximum exponent.
- base (number; default 10): Base to be used in logarithmic scale.
- logarithmic (boolean; optional): If set to true, a logarithmic scale will be
used.
- showCurrentValue (boolean; optional): If true, the current value of the gauge
will be displayed
- units (string; optional): Label for the current value
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the control. To control styling, pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the component label is positioned.
- scale (dict; optional): Configuration for the component scale. scale has the following type: dict containing keys 'start', 'interval', 'labelInterval', 'custom'.
Those keys have the following types:
  - start (number; optional): Value to start the scale from. Defaults
to min.
  - interval (number; optional): Interval by which the scale goes up. Attempts
to dynamically divide min-max range by
default.
  - labelInterval (number; optional): Interval by which labels are added to
scale marks. Defaults to 2 (every other
mark has a label).
  - custom (dict; optional): Custom scale marks. The key determines the position
and the value determines what will show. If you want
to set the style of a specific mark point, the value
should be an object which contains style and label
properties. custom has the following type: number | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (string; optional)
  - label (string; optional)
- color (dict; optional): Color configuration for the gauge's track. color has the following type: string | dict containing keys 'default', 'gradient', 'ranges'.
Those keys have the following types:
  - default (string; optional): Color used for current value text and other minor accents
  - gradient (boolean; optional): Display ranges as a gradient between given colors.
  - ranges (dict; optional): Define multiple color ranges on the gauge's track.
The key determines the color of the range and
the value is the start,end of the range itself.
Ranges must be contiguous along the entirety
of the gauge's range of values. ranges has the following type: dict containing keys 'color'.
Those keys have the following types:
  - color (list of numbers; optional)
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root component element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, base=Component.UNDEFINED, logarithmic=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, units=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, scale=Component.UNDEFINED, color=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'size', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'theme', 'label', 'labelPosition', 'scale', 'color', 'className', 'style']
        self._type = 'Gauge'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'size', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'theme', 'label', 'labelPosition', 'scale', 'color', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Gauge, self).__init__(**args)
