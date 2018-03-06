
## Knob

Component file: [`/src/components/Knob.react.js`](/src/components/Knob.react.js)

A knob component that can be turned
to a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**disabled** | `Boolean` |  | If true, knob cannot be moved.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the knob label is positioned.
**marks** | `Shape` |  | Marks on the knob. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains `style` and `label` properties.
**marks.number** | `Union<String \| Shape>` |  | 
**max** | `Number` | `10` | The maximum value of the knob
**min** | `Number` | `0` | The minimum value of the knob
**setProps** | `Function` |  | Dash-assigned callback that gets fired when selected value changes.
**step** | `Number` | `1` | Value by which marks are added
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Number` |  | The value of knob
