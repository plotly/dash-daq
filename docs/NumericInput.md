
## NumericInput.react

Component file: [`/src/components/NumericInput.react.js`](/src/components/NumericInput.react.js)

A numeric input component that can be
set to a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**disabled** | `Boolean` |  | If true, numeric input cannot changed.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the numeric input label is positioned.
**max** | `Number` | `10` | The maximum value of the numeric input
**min** | `Number` | `0` | The minimum value of the numeric input
**setProps** | `Function` |  | Dash-assigned callback that gets fired when selected value changes.
**size** | `Number` |  | The size (length) of the numeric input in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Number` |  | The value of numeric input
