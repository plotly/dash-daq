# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ToggleSwitch(Component):
    """A ToggleSwitch component.
A switch component that toggles between
two values.

Keyword arguments:

- id (string; optional):
    The ID used to identify this compnent in Dash callbacks.

- className (string; optional):
    Class to apply to the root component element.

- color (string; optional):
    Color to highlight button/indicator.

- disabled (boolean; optional):
    If True, switch cannot be clicked.

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

      Or list of string | dict with keys:

    - label (string; optional)

    - style (dict; optional)s

- labelPosition (a value equal to: 'top', 'bottom'; default 'top'):
    Where the component label is positioned.

- persisted_props (list of a value equal to: 'value's; default ['value']):
    Properties whose user interactions will persist after refreshing
    the component or the page. Since only `value` is allowed this prop
    can normally be ignored.

- persistence (boolean | string | number; optional):
    Used to allow user interactions in this component to be persisted
    when the component - or the page - is refreshed. If `persisted` is
    truthy and hasn't changed from its previous value, a `value` that
    the user has changed while using the app will keep that change, as
    long as the new `value` also matches what was given originally.
    Used in conjunction with `persistence_type`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    Where persisted user changes will be stored: memory: only kept in
    memory, reset on page refresh. local: window.localStorage, data is
    kept after the browser quit. session: window.sessionStorage, data
    is cleared once the browser quit.

- size (number; optional):
    The size of the switch.

- style (dict; optional):
    Style to apply to the root object.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- value (boolean; default False):
    The state of the switch.

- vertical (boolean; default False):
    If True, switch will be vertical instead of horizontal."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, color=Component.UNDEFINED, vertical=Component.UNDEFINED, disabled=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'disabled', 'label', 'labelPosition', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'theme', 'value', 'vertical']
        self._type = 'ToggleSwitch'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'disabled', 'label', 'labelPosition', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'theme', 'value', 'vertical']
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
