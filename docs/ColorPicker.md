
## ColorPicker

Component file: [`/src/components/ColorPicker.react.js`](/src/components/ColorPicker.react.js)

A color picker.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element
**disabled** | `Boolean` |  | If true, color cannot be picked.
**id** | `String` |  | The ID used to identify the color picker in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the indicator label is positioned
**setProps** | `Function` |  | Dash-assigned callback that gets fired when the color picker's value changes
**size** | `Number` | `225` | Size (width) of the component in pixels
**style** | `Object` |  | Style to apply to the root component element
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**value** | `Shape` |  | Color value of the picker
**value.hex** | `String` |  | Hex string
**value.rbg** | `Shape` |  | RGB/RGBA object
**value.rbg.a** | `Number` |  | 
**value.rbg.b** | `Number` |  | 
**value.rbg.g** | `Number` |  | 
**value.rbg.r** | `Number` |  | 
