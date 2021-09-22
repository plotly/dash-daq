# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Indicator(Component):
    """An Indicator component.
A boolean indicator LED.

Keyword arguments:

- id (string; optional):
    The ID used to identify the indicator in Dash callbacks.

- className (string; optional):
    Class to apply to the root component element.

- color (string; default colors.DARKER_PRIMARY):
    Color of the indicator.

- height (number; optional):
    Height of the component. Set both width and height for a
    rectangular indicator.

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom', 'right', 'left'; default 'top'):
    Where the indicator label is positioned.

- size (number; default 15):
    Size of the component. Either use this or width and height.

- style (dict; optional):
    Style to apply to the root component element.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- value (boolean; optional):
    If True, indicator is illuminated.

- width (number; optional):
    Width of the component. Set both width and height for a
    rectangular indicator."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, color=Component.UNDEFINED, size=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'height', 'label', 'labelPosition', 'size', 'style', 'theme', 'value', 'width']
        self._type = 'Indicator'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'height', 'label', 'labelPosition', 'size', 'style', 'theme', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Indicator, self).__init__(**args)
