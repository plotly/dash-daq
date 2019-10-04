# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ToggleSwitch(Component):
    """A ToggleSwitch component.
A switch component that toggles between
two values.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- value (boolean; default False): The state of the switch
- size (number; optional): The size of the switch
- color (string; optional): Color to highlight button/indicator
- vertical (boolean; default False): If true, switch will be vertical instead
of horizontal
- disabled (boolean; optional): If true, switch cannot be clicked
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the control. To control styling, pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional) | list of string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)s
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the component label is positioned.
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root object."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, color=Component.UNDEFINED, vertical=Component.UNDEFINED, disabled=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'size', 'color', 'vertical', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self._type = 'ToggleSwitch'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'size', 'color', 'vertical', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ToggleSwitch, self).__init__(**args)
