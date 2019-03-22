
## ToggleSwitch.react

Component file: [`/src/components/ToggleSwitch.react.js`](/src/components/ToggleSwitch.react.js)

A switch component that toggles between
two values.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**color** | `String` |  | Color to highlight button/indicator
**disabled** | `Boolean` |  | If true, switch cannot be clicked
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape \| Array[]<Union<String \| Shape>>>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**setProps** | `Function` |  | Dash-assigned callback that gets fired when switch is toggled.
**size** | `Number` |  | The size of the switch
**style** | `Object` |  | Style to apply to the root object.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Boolean` | `false` | The state of the switch
**vertical** | `Boolean` | `false` | If true, switch will be vertical instead of horizontal
