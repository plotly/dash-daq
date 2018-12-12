
## Knob

Component file: [`/src/components/Knob.js`](/src/components/Knob.react.js)

A knob component that can be turned
to a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**color** | `Union<String \| Shape>` |  | Color configuration for the knob's track.
**disabled** | `Boolean` |  | If true, knob cannot be moved.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the knob label is positioned.
**max** | `Number` | `10` | The maximum value of the knob
**min** | `Number` | `0` | The minimum value of the knob
**scale** | `Shape` |  | Configuration for the component scale.
**scale.custom** | `Union<Number \| Shape>` |  | Custom scale marks. The key determines the position and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties
**scale.interval** | `Number` |  | Interval by which the scale goes up. Attempts to dynamically divide min-max range by default.
**scale.labelInterval** | `Number` |  | Interval by which labels are added to scale marks. Defaults to 2 (every other mark has a label).
**scale.start** | `Number` |  | Value to start the scale from. Defaults to min.
**setProps** | `Function` |  | Dash-assigned callback that gets fired when selected value changes.
**size** | `Number` |  | The size (diameter) of the knob in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Number` |  | The value of knob
