# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PowerButton(Component):
    """A PowerButton component.
A power button component can be
turned on and off.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- on (boolean; default False): Whether or not the power button is on
- color (string; optional): The indicator color to display when power button is on
- size (number; default 48): The size (diameter) of the power button in pixels
- disabled (boolean; optional): If true, power button cannot be clicked
- theme (dict; default light): Theme configuration to be set by a ThemeProvider
- label (dict; optional): Description to be displayed alongside the button. To control styling, pass an object with label and style properties. label has the following type: string | dict containing keys 'style', 'label'.
Those keys have the following types:
  - style (dict; optional)
  - label (string; optional)
- labelPosition (a value equal to: 'top', 'bottom'; default 'top'): Where the button label is positioned.
- className (string; optional): Class to apply to the root component element.
- style (dict; optional): Style to apply to the root component element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, on=Component.UNDEFINED, color=Component.UNDEFINED, size=Component.UNDEFINED, disabled=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'on', 'color', 'size', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self._type = 'PowerButton'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'on', 'color', 'size', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PowerButton, self).__init__(**args)
