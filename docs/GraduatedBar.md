
## GraduatedBar.react

Component file: [`/src/components/GraduatedBar.react.js`](/src/components/GraduatedBar.react.js)

A graduated bar component that displays
a value within some range as a
percentage.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**color** | `Union<String \| Shape>` | `light.primary` | Color configuration for the graduated bar's progress blocks.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**max** | `Number` | `10` | The maximum value of the graduated bar
**min** | `Number` | `0` | The minimum value of the graduated bar
**showCurrentValue** | `Boolean` |  | If true, the current percentage  of the bar will be displayed
**size** | `Number` | `250` | The size (length) of the graduated bar in pixels
**step** | `Number` | `0.5` | Value by which progress blocks appear
**style** | `Object` |  | Style to apply to the root component element.
**value** | `Number` |  | The value of the graduated bar
**vertical** | `Boolean` |  | If true, will display bar vertically instead of horizontally
