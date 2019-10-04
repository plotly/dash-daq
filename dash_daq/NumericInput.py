# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NumericInput(Component):
    """A NumericInput component.
A numeric input component that can be
set to a value between some range.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- value (number; optional): The value of numeric input
- size (number; optional): The size (length) of the numeric input in pixels
- min (number; default 0): The minimum value of the numeric input
- max (number; default 10): The maximum value of the numeric input
- disabled (boolean; optional): If true, numeric input cannot changed.
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the control. To control styling,
pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the numeric input label is positioned.
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root component element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, disabled=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self._type = 'NumericInput'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NumericInput, self).__init__(**args)
