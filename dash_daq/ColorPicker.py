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
- style (dict; optional): Style to apply to the root component element
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
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'disabled', 'size', 'theme', 'label', 'labelPosition', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type']
        self._type = 'ColorPicker'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'disabled', 'size', 'theme', 'label', 'labelPosition', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type']
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
