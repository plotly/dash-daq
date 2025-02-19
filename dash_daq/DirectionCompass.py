# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DirectionCompass(Component):
    """A DirectionCompass component.


Keyword arguments:

- id (string; optional):
    id of root element.

- direction (number; default 0):
    angle(degrees) of needle of compass.

- label (dict; default ''):
    label text.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom'; default 'bottom'):
    position of label either top or bottom.

- showCurrentValue (boolean; optional):
    show current value.

- size (number; default 150):
    size of compass.

- theme (dict; default light):
    theme provider.

    `theme` is a dict with keys:

    - dark (boolean; optional):
        True for Dark mode, False for Light.

    - detail (string; optional):
        Color used for UI details, like borders.

    - primary (string; optional):
        Highlight color.

    - secondary (string; optional):
        Supporting color."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, size=Component.UNDEFINED, labelPosition=Component.UNDEFINED, label=Component.UNDEFINED, direction=Component.UNDEFINED, theme=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'direction', 'label', 'labelPosition', 'showCurrentValue', 'size', 'theme']
        self._type = 'DirectionCompass'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'direction', 'label', 'labelPosition', 'showCurrentValue', 'size', 'theme']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DirectionCompass, self).__init__(**args)
