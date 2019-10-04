# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tank(Component):
    """A Tank component.
A Tank component that fills to
a value between some range.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- value (number; optional): The value of tank. If logarithmic, the displayed value
will be the logarithm of the inputted value.
- height (number; default 192): The height of the tank in pixels
- width (number; default 112): The width of the tank in pixels
- color (string; optional): The color of tank fill
- min (number; default 0): The minimum value of the tank. If logarithmic,
represents minimum exponent.
- max (number; default 10): The maximum value of the tank. If logarithmic,
represents the maximum exponent.
- base (number; default 10): Base to be used in logarithmic scale.
- logarithmic (boolean; optional): If set to true, a logarithmic scale will be
used.
- showCurrentValue (boolean; optional): If true, the current value of the tank
will be displayed
- units (string; optional): Label for the current value
- label (dict; optional): Description to be displayed alongside the control. To control styling,
pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
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
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root component element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, height=Component.UNDEFINED, width=Component.UNDEFINED, color=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, base=Component.UNDEFINED, logarithmic=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, units=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, scale=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'height', 'width', 'color', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'label', 'labelPosition', 'scale', 'className', 'style']
        self._type = 'Tank'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'height', 'width', 'color', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'label', 'labelPosition', 'scale', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tank, self).__init__(**args)
