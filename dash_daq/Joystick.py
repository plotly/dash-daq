# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Joystick(Component):
    """A Joystick component.
A joystick.

Keyword arguments:

- id (string; optional):
    The ID used to identify the Joystick in Dash callbacks.

- angle (number; optional):
    Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 =
    down.

- className (string; optional):
    Class to apply to the root component element.

- force (number; optional):
    Joystick force: distance between cursor and center in big-circle
    radii.

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom'; default 'top'):
    Where the indicator label is positioned.

- size (number; default 100):
    Size (width) of the component in pixels.

- style (dict; optional):
    Style to apply to the root component element.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, angle=Component.UNDEFINED, force=Component.UNDEFINED, size=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'angle', 'className', 'force', 'label', 'labelPosition', 'size', 'style', 'theme']
        self._type = 'Joystick'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'angle', 'className', 'force', 'label', 'labelPosition', 'size', 'style', 'theme']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Joystick, self).__init__(**args)
