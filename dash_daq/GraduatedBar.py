# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GraduatedBar(Component):
    """A GraduatedBar component.
A graduated bar component that displays
a value within some range as a
percentage.

Keyword arguments:

- id (string; optional):
    The ID used to identify this compnent in Dash callbacks.

- className (string; optional):
    Class to apply to the root component element.

- color (dict; default light.primary):
    Color configuration for the graduated bar's progress blocks.

    `color` is a string | dict with keys:

    - default (string; optional):
        Fallback color to use when color.ranges has gaps.

    - gradient (boolean; optional):
        Display ranges as a gradient between given colors. Requires
        color.ranges to be contiguous along the entirety of the
        graduated bar's range of values.

    - ranges (dict; optional):
        Define multiple color ranges on the graduated bar's track. The
        key determines the color of the range and the value is the
        start,end of the range itself.

        `ranges` is a dict with keys:

        - color (list of numbers; optional)

- label (dict; optional):
    Description to be displayed alongside the control. To control
    styling, pass an object with label and style properties.

    `label` is a string | dict with keys:

    - label (string; optional)

    - style (dict; optional)

- labelPosition (a value equal to: 'top', 'bottom'; default 'top'):
    Where the component label is positioned.

- max (number; default 10):
    The maximum value of the graduated bar.

- min (number; default 0):
    The minimum value of the graduated bar.

- showCurrentValue (boolean; optional):
    If True, the current percentage  of the bar will be displayed.

- size (number; default 250):
    The size (length) of the graduated bar in pixels.

- step (number; default 0.5):
    Value by which progress blocks appear.

- style (dict; optional):
    Style to apply to the root component element.

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- value (number; optional):
    The value of the graduated bar.

- vertical (boolean; optional):
    If True, will display bar vertically instead of horizontally."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, color=Component.UNDEFINED, size=Component.UNDEFINED, vertical=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, showCurrentValue=Component.UNDEFINED, theme=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'label', 'labelPosition', 'max', 'min', 'showCurrentValue', 'size', 'step', 'style', 'theme', 'value', 'vertical']
        self._type = 'GraduatedBar'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'label', 'labelPosition', 'max', 'min', 'showCurrentValue', 'size', 'step', 'style', 'theme', 'value', 'vertical']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GraduatedBar, self).__init__(**args)
