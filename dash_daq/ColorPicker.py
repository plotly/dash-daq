# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ColorPicker(Component):
    """A ColorPicker component.
A color picker.

Keyword arguments:
- id (string; optional): The ID used to identify the color picker in Dash callbacks
- value (dict; optional): Color value of the picker. value has the following type: dict containing keys 'hex', 'rbg'.
Those keys have the following types:
  - hex (string; optional): Hex string
  - rbg (dict; optional): RGB/RGBA object. rbg has the following type: dict containing keys 'r', 'g', 'b', 'a'.
Those keys have the following types:
  - r (number; optional)
  - g (number; optional)
  - b (number; optional)
  - a (number; optional)
- disabled (boolean; optional): If true, color cannot be picked.
- size (number; default 225): Size (width) of the component in pixels
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the control. To control styling,
pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the indicator label is positioned
- className (string; optional): Class to apply to the root component element
- style (dict; optional): Style to apply to the root component element"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'disabled', 'size', 'theme', 'label', 'labelPosition', 'className', 'style']
        self._type = 'ColorPicker'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'disabled', 'size', 'theme', 'label', 'labelPosition', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ColorPicker, self).__init__(**args)
