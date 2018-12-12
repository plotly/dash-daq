
## StopButton

Component file: [`/src/components/StopButton.js`](/src/components/StopButton.react.js)

A Stop button component

prop | type | default | description
---- | :----: | :-------: | -----------
**buttonText** | `String` | `'Stop'` | Text displayed in the button
**children** | `ReactNode` |  | The children of the button.
**className** | `String` |  | Class to apply to the root component element.
**dashEvents** | `Enum('click')` |  | 
**disabled** | `Boolean` |  | If true, button cannot be pressesd.
**fireEvent** | `Function` |  | A callback for firing events to dash.
**id** | `String` |  | The ID used to identify this compnent in Dash callbacks
**label** | `Union<String \| Shape>` |  | Description to be displayed alongside the button. To control styling, pass an object with label and style properties.
**labelPosition** | `Enum('top','bottom')` | `'top'` | Where the  label is positioned.
**n_clicks** | `Number` | `0` | Number of times the button was clicked
**setProps** | `Function` |  | Dash-assigned callback that gets fired when the button is clicked.
**size** | `Number` | `92` | The size (width) of the stop button in pixels
**style** | `Object` |  | Style to apply to the root component element.
**theme** | `Object` |  | Theme configuration to be set by a ThemeProvider
