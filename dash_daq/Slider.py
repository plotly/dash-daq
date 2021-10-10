# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Slider(Component):
    """A Slider component.
A slider component with support for
a target value.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Additional CSS class for the root DOM node.

- color (dict; default colors.DARKER_PRIMARY):
    Color configuration for the slider's track.

    `color` is a string | dict with keys:

    - default (string; optional):
        Fallback color to use when color.ranges has gaps.

    - gradient (boolean; optional):
        Display ranges as a gradient between given colors. Requires
        color.ranges to be contiguous along the entirety of the
        gauge's range of values.

    - ranges (dict; optional):
        Define multiple color ranges on the slider's track. The key
        determines the color of the range and the value is the
        start,end of the range itself.

        `ranges` is a dict with keys:

        - color (list of numbers; optional)

- disabled (boolean; optional):
    If True, the handles can't be moved.

- dots (boolean; optional):
    When the step value is greater than 1, you can set the dots to
    True if you want to render the slider with dots.  Note: dots are
    disabled automatically when using color.ranges.

- fullSize (boolean; optional):
    make slider same size of its parent.

- handleLabel (dict; optional):
    Configuration of the slider handle's label. Passing falsy value
    will disable the label.

    `handleLabel` is a string | dict with keys:

    - color (string; optional)

    - label (string; optional)

    - showCurrentValue (boolean; optional)

    - style (dict; optional)

- included (boolean; optional):
    If the value is True, it means a continuous value is included.
    Otherwise, it is an independent value.

- labelPosition (a value equal to: 'top', 'bottom'; default 'bottom'):
    Where the component label is positioned.

- marks (dict; optional):
    Marks on the slider. The key determines the position, and the
    value determines what will show. If you want to set the style of a
    specific mark point, the value should be an object which contains
    style and label properties.

    `marks` is a dict with keys:

    - number (dict; optional)

        `number` is a string

      Or dict with keys:

        - label (string; optional)

        - style (dict; optional)

- max (number; optional):
    Maximum allowed value of the slider.

- min (number; default 0):
    Minimum allowed value of the slider.

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

- size (number; default 265):
    Size of the slider in pixels.

- step (number; optional):
    Value by which increments or decrements are made.

- style (dict; default { display: 'flex', justifyContent: 'center' }):
    Style to apply to the root component element.

- targets (dict; optional):
    Targets on the slider. The key determines the position, and the
    value determines what will show. If you want to set the style of a
    specific target point, the value should be an object which
    contains style and label properties.

    `targets` is a dict with keys:

    - number (dict; optional)

        `number` is a string

      Or dict with keys:

        - color (string; optional)

        - label (string; optional)

        - showCurrentValue (boolean; optional)

        - style (dict; optional)

- theme (dict; default light):
    Theme configuration to be set by a ThemeProvider.

- updatemode (a value equal to: 'mouseup', 'drag'; default 'mouseup'):
    Determines when the component should update its value. If
    `mouseup`, then the slider will only trigger its value when the
    user has finished dragging the slider. If `drag`, then the slider
    will update its value continuously as it is being dragged. Only
    use `drag` if your updates are fast.

- value (number; optional):
    The value of the input.

- vertical (boolean; optional):
    If True, the slider will be vertical."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, marks=Component.UNDEFINED, color=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, labelPosition=Component.UNDEFINED, disabled=Component.UNDEFINED, dots=Component.UNDEFINED, included=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, vertical=Component.UNDEFINED, size=Component.UNDEFINED, targets=Component.UNDEFINED, theme=Component.UNDEFINED, handleLabel=Component.UNDEFINED, updatemode=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, fullSize=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'disabled', 'dots', 'fullSize', 'handleLabel', 'included', 'labelPosition', 'marks', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'size', 'step', 'style', 'targets', 'theme', 'updatemode', 'value', 'vertical']
        self._type = 'Slider'
        self._namespace = 'dash_daq'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'disabled', 'dots', 'fullSize', 'handleLabel', 'included', 'labelPosition', 'marks', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'size', 'step', 'style', 'targets', 'theme', 'updatemode', 'value', 'vertical']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Slider, self).__init__(**args)
