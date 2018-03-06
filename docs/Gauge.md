
## Gauge

Component file: [`/src/components/Gauge.react.js`](/src/components/Gauge.react.js)

A Gauge component that points to
a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**marks** | `Shape` |  | Ticks on the gauge. The key determines the position and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.
**marks.number** | `Union<String \| Shape>` |  | 
**max** | `Number` | `10` | The maximum value of the gauge
**min** | `Number` | `0` | The minimum value of the gauge
**showCurrentValue** | `Boolean` |  | If true, the current value of the gauge will be displayed
**step** | `Number` | `1` | Interval by which marks appear
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**units** | `String` |  | Label for the current value
**value** | `Number` |  | The value of gauge
