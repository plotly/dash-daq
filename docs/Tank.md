
## Tank

Component file: [`/src/components/Tank.react.js`](/src/components/Tank.react.js)

A Tank component that fills to
a value between some range.

prop | type | default | description
---- | :----: | :-------: | -----------
**base** | `Number` | `10` | Base to be used in logarithmic scale.
**className** | `String` |  | Class to apply to the root component element.
**color** | `String` |  | The color of tank fill
**id** | `String` |  | The ID used to identify this component in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the component label is positioned.
**logarithmic** | `Boolean` |  | If set to true, a logarithmic scale will be used.
**max** | `Number` | `10` | The maximum value of the tank. If logarithmic, represents the maximum exponent.
**min** | `Number` | `0` | The minimum value of the tank. If logarithmic, represents minimum exponent.
**scale** | `Shape` |  | Configuration for the component scale.
**scale.custom** | `Union<Number \| Shape>` |  | Custom scale marks. The key determines the position and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties
**scale.interval** | `Number` |  | Interval by which the scale goes up. Attempts to dynamically divide min-max range by default.
**scale.labelInterval** | `Number` |  | Interval by which labels are added to scale marks. Defaults to 2 (every other mark has a label).
**scale.start** | `Number` |  | Value to start the scale from. Defaults to min.
**showCurrentValue** | `Boolean` |  | If true, the current value of the tank will be displayed
**size** | `Number` | `192` | The size (height) of the tank in pixels
**style** | `Object` |  | Style to apply to the root component element.
**units** | `String` |  | Label for the current value
**value** | `Number` |  | The value of tank. If logarithmic, the displayed value will be the logarithm of the inputted value.
