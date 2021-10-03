# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Thermometer(Component):
    """A Thermometer component.
A thermometer component that
fills to a value between some
range

Keyword arguments:

- id (string; optional):
    The ID used to identify this compnent in Dash callbacks.

- base (number; default 10):
    Base to be used in logarithmic scale.

- className (string; optional):
    Class to apply to the root component element.

- color (string; optional):
    The color of the thermometer fill/current value text.

- height (number; default 192):
    The height of the thermometer in pixels.

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom'; default 'top'):
    Where the component label is positioned.

- logarithmic (boolean; optional):
    If set to True, a logarithmic scale will be used.

- max (number; default 10):
    The maximum value of the thermometer. If logarithmic, represents
    the maximum exponent.

- min (number; default 0):
    The minimum value of the thermometer. If logarithmic, represents
    the minimum exponent.

- scale (dict; optional):
    Configuration for the component scale.

    `scale` is a dict with keys:

    - custom (dict; optional):
        Custom scale marks. The key determines the position and the
        value determines what will show. If you want to set the style
        of a specific mark point, the value should be an object which
        contains style and label properties.

        `custom` is a number

      Or dict with keys:

        - label (string; optional)

        - style (string; optional)

    - interval (number; optional):
        Interval by which the scale goes up. Attempts to dynamically
        divide min-max range by default.

    - labelInterval (number; optional):
        Interval by which labels are added to scale marks. Defaults to
        2 (every other mark has a label).

    - start (number; optional):
        Value to start the scale from. Defaults to min.

- showCurrentValue (boolean; optional):
    If True, the current value of the thermometer will be displayed.

- style (dict; optional):
    Style to apply to the root component element.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- units (string; optional):
    Label for the current value.

- value (number; optional):
    The value of thermometer. If logarthmic, the value displayed will
    be the logarithm of the inputted value.

- width (number; default 20):
    The width of the thermometer in pixels."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, height=Component.UNDEFINED, width=Component.UNDEFINED, color=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, base=Component.UNDEFINED, logarithmic=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, units=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, scale=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'base', 'className', 'color', 'height', 'label', 'labelPosition', 'logarithmic', 'max', 'min', 'scale', 'showCurrentValue', 'style', 'theme', 'units', 'value', 'width']
        self._type = 'Thermometer'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'base', 'className', 'color', 'height', 'label', 'labelPosition', 'logarithmic', 'max', 'min', 'scale', 'showCurrentValue', 'style', 'theme', 'units', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Thermometer, self).__init__(**args)
