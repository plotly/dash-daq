
## Indicator.react

Component file: [`/src/components/Indicator.react.js`](/src/components/Indicator.react.js)

A boolean indicator LED.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element
**color** | `String` | `colors.DARKER_PRIMARY` | Color of the indicator
**height** | `Number` |  | Height of the component. Set both width and height for a rectangular indicator
**id** | `String` |  | The ID used to identify the indicator in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties
**labelPosition** | `Enum('top','bottom','right','left')` | `'top'` | Where the indicator label is positioned
**size** | `Number` | `15` | Size of the component. Either use this or width and height
**style** | `Object` |  | Style to apply to the root component element
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Boolean` |  | If true, indicator is illuminated
**width** | `Number` |  | Width of the component. Set both width and height for a rectangular indicator
