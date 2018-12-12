
## BooleanSwitch

Component file: [`/src/components/BooleanSwitch.js`](/src/components/BooleanSwitch.react.js)

A switch component that toggles
between on and off.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**color** | `String` |  | Color to highlight active switch background
**dashEvents** | `Enum('click')` |  | 
**disabled** | `Boolean` |  | If true, switch cannot be clicked
**fireEvent** | `Function` |  | A callback for firing events to dash.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**on** | `Boolean` | `false` | Whether or not the switch is on
**setProps** | `Function` |  | Dash-assigned callback that gets fired when switch is toggled.
**style** | `Object` |  | Style to apply to the root object.
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**vertical** | `Boolean` | `false` | If true, switch will be vertical instead of horizontal
