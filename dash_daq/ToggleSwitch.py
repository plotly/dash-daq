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
- style (dict; optional): Style to apply to the root object.
- persistence (boolean | string | number; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- persisted_props (list of a value equal to: 'value's; default ['value']): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, color=Component.UNDEFINED, vertical=Component.UNDEFINED, disabled=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'size', 'color', 'vertical', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type']
        self._type = 'ToggleSwitch'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'size', 'color', 'vertical', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type']
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
