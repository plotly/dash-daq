
## Joystick.react

Component file: [`/src/components/Joystick.react.js`](/src/components/Joystick.react.js)

A joystick.

prop | type | default | description
---- | :----: | :-------: | -----------
**angle** | `Number` |  | Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 = down
**className** | `String` |  | Class to apply to the root component element
**disabled** | `Boolean` |  | If true, color cannot be picked.
**force** | `Number` |  | Joystick force: distance between cursor and center in big-circle radii
**id** | `String` |  | The ID used to identify the color picker in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the indicator label is positioned
**setProps** | `Function` |  | Dash-assigned callback that gets fired when the color picker's value changes
**size** | `Number` | `100` | Size (width) of the component in pixels
**style** | `Object` |  | Style to apply to the root component element
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
