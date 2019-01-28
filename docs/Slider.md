
## Slider

Component file: [`/src/components/Slider.react.js`](/src/components/Slider.react.js)

A slider component with support for
a target value.

prop | type | default | description
---- | :----: | :-------: | -----------
**className** | `String` |  | Additional CSS class for the root DOM node.
**color** | `Union<String \| Shape>` | `colors.DARKER_PRIMARY` | Color configuration for the slider's track.
**disabled** | `Boolean` |  | If true, the handles can't be moved.
**dots** | `Boolean` |  | When the step value is greater than 1, you can set the dots to true if you want to render the slider with dots.  Note: dots are disabled automatically when using color.ranges
**handleLabel** | `Union<String \| Shape>` |  | Configuration of the slider handle's label. Passing falsy value will disable the label.
**id** | `String` |  | The ID used to identify this component in Dash callbacks
**included** | `Boolean` |  | If the value is true, it means a continuous value is included. Otherwise, it is an independent value.
**labelPosition** | `Unknown` | `'bottom'` | 
**marks** | `Shape` |  | Marks on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.
**marks.number** | `Union<String \| Shape>` |  | 
**max** | `Number` |  | Maximum allowed value of the slider.
**min** | `Number` | `0` | Minimum allowed value of the slider.
**setProps** | `Function` |  | Dash-assigned callback that gets fired when the value changes.
**size** | `Number` | `265` | Size of the slider in pixels.
**step** | `Number` |  | Value by which increments or decrements are made.
**targets** | `Shape` | `{}` | Targets on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific target point, the value should be an object which contains style and label properties.
**targets.number** | `Union<String \| Shape>` |  | 
**theme** | `Object` | `light` | Theme configuration to be set by a ThemeProvider
**updatemode** | `Enum('mouseup','drag')` | `'mouseup'` | Determines when the component should update its value. If `mouseup`, then the slider will only trigger its value when the user has finished dragging the slider. If `drag`, then the slider will update its value continuously as it is being dragged. Only use `drag` if your updates are fast.
**value** | `Number` |  | The value of the input.
**vertical** | `Boolean` |  | If true, the slider will be vertical.
