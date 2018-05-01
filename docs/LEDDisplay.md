
## LEDDisplay

Component file: [`/src/components/LEDDisplay.react.js`](/src/components/LEDDisplay.react.js)

A 7-bar LED display component.

prop | type | default | description
---- | :----: | :-------: | -----------
**backgroundColor** | `String` | `'#fff'` | Color of the display's background
**className** | `String` |  | Class to apply to the root component element
**color** | `String` | `colors.PRIMARY` | Color of the display
**id** | `String` |  | The ID used to identify the display in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the display label is positioned
**size** | `Number` | `42` | Size of the display
**style** | `Object` |  | Style to apply to the root component element
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Union<Number \| String>` |  | Value to be displayed. A number or a string containing only digits (0-9), periods, and colons.
