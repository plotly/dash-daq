# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class LEDDisplay(Component):
    """A LEDDisplay component.
A 7-bar LED display component.

Keyword arguments:

- id (string; optional):
    The ID used to identify the display in Dash callbacks.

- backgroundColor (string; default '#fff'):
    Color of the display's background.

- className (string; optional):
    Class to apply to the root component element.

- color (string; default colors.PRIMARY):
    Color of the display.

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom'; default 'top'):
    Where the display label is positioned.

- size (number; default 42):
    Size of the display.

- style (dict; optional):
    Style to apply to the root component element.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- value (number | string; optional):
    Value to be displayed. A number or a string containing only digits
    (0-9), periods, and colons, and possibly starting with a minus
    sign."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, color=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, size=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'backgroundColor', 'className', 'color', 'label', 'labelPosition', 'size', 'style', 'theme', 'value']
        self._type = 'LEDDisplay'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'backgroundColor', 'className', 'color', 'label', 'labelPosition', 'size', 'style', 'theme', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(LEDDisplay, self).__init__(**args)
