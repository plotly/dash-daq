% Auto-generated: do not edit by hand
\name{'daq'Joystick}

\alias{'daq'Joystick}

\title{Joystick component}

\description{
A joystick.
}

\usage{
'daq'Joystick(id=NULL, angle=NULL, className=NULL, force=NULL, label=NULL,
labelPosition=NULL, size=NULL, style=NULL, theme=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the Joystick in Dash callbacks}

\item{angle}{Numeric. Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 = down}

\item{className}{Character. Class to apply to the root component element}

\item{force}{Numeric. Joystick force: distance between cursor and center in big-circle radii}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the indicator label is positioned}

\item{size}{Numeric. Size (width) of the component in pixels}

\item{style}{Named list. Style to apply to the root component element}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

