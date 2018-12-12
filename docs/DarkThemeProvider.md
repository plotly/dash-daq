
## DarkThemeProvider

Component file: [`/src/components/DarkThemeProvider.js`](/src/components/DarkThemeProvider.react.js)

DarkThemeProvider is a component that is placed at the root of
the component tree to make all components match the dark theme

prop | type | default | description
---- | :----: | :-------: | -----------
**children** | `Union<Array[]<ReactNode> \| ReactNode>` |  | The children of this component
**theme** | `Shape` |  | Theme object to override with a custom theme
**theme.dark** | `Boolean` |  | True for Dark mode, false for Light
**theme.detail** | `String` |  | Color used for UI details, like borders
**theme.primary** | `String` |  | Highlight color
**theme.secondary** | `String` |  | Supporting color
