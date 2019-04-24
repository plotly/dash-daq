
## PrecisionInput.react

Component file: [`/src/components/PrecisionInput.react.js`](/src/components/PrecisionInput.react.js)

A numeric input component that converts
an input value to the desired precision.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**disabled** | `Boolean` |  | If true, numeric input cannot be changed.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the scientific notation. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the numeric input label is positioned.
**max** | `Number` | `Number.MAX_SAFE_INTEGER` | The maximum value of the numeric input
**min** | `Number` | `0` | The minimum value of the numeric input
**precision** | `Number` |  | Number of significant figures
**setProps** | `Function` |  | Dash-assigned callback that gets fired when selected value changes.
**size** | `Number` |  | The size (length) of the numeric input in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Number` |  | The value of numeric input
