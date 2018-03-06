
## Tank

Component file: [`/src/components/Tank.react.js`](/src/components/Tank.react.js)

A Tank component that fills to
a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Class to apply to the root component element.
**id** | `String` |  | The ID used to identify this component in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**marks** | `Shape` |  | Ticks on the tank. The key determines the position and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.
**marks.number** | `Union<String \| Shape>` |  | 
**max** | `Number` | `10` | The maximum value of the tank
**min** | `Number` | `0` | The minimum value of the tank
**showCurrentValue** | `Boolean` |  | If true, the current value of the tank will be displayed
**step** | `Number` | `2` | Value by which marks appear
**style** | `Object` |  | Style to apply to the root component element.
**units** | `String` |  | Label for the current value
**value** | `Number` |  | The value of tank
