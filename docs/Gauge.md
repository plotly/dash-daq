
## Gauge

Component file: [`/src/components/Gauge.js`](/src/components/Gauge.react.js)

A Gauge component that points to
a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**base** | `Number` | `10` | Base to be used in logarithmic scale.
**className** | `String` |  | Class to apply to the root component element.
**color** | `Union<String \| Shape>` |  | Color configuration for the gauge's track.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**logarithmic** | `Boolean` |  | If set to true, a logarithmic scale will be used.
**max** | `Number` | `10` | The maximum value of the gauge. If logarithmic, represents the maximum exponent.
**min** | `Number` | `0` | The minimum value of the gauge. If logarithmic, represents the minimum exponent.
**scale** | `Shape` |  | Configuration for the component scale.
**scale.custom** | `Union<Number \| Shape>` |  | Custom scale marks. The key determines the position and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties
**scale.interval** | `Number` |  | Interval by which the scale goes up. Attempts to dynamically divide min-max range by default.
**scale.labelInterval** | `Number` |  | Interval by which labels are added to scale marks. Defaults to 2 (every other mark has a label).
**scale.start** | `Number` |  | Value to start the scale from. Defaults to min.
**showCurrentValue** | `Boolean` |  | If true, the current value of the gauge will be displayed
**size** | `Number` |  | The size (diameter) of the gauge in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**units** | `String` |  | Label for the current value
**value** | `Number` |  | The value of gauge. If logarithmic, the displayed value will be the logarithm of the inputted value.
