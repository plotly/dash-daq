
## PowerButton.react

Component file: [`/src/components/PowerButton.react.js`](/src/components/PowerButton.react.js)

A power button component can be
turned on and off.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**color** | `String` |  | The indicator color to display when power button is on
**disabled** | `Boolean` |  | If true, power button cannot be clicked
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the button. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the button label is positioned.
**on** | `Boolean` | `false` | Whether or not the power button is on
**setProps** | `Function` |  | Dash-assigned callback that gets fired when button is clicked.
**size** | `Number` | `48` | The size (diameter) of the power button in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
