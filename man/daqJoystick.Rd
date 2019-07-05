% Auto-generated: do not edit by hand
\name{daqJoystick}

\alias{daqJoystick}

\title{Joystick component}

\description{
A joystick.
}

\usage{
daqJoystick(id=NULL, disabled=NULL, angle=NULL, force=NULL, size=NULL, theme=NULL,
label=NULL, labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the color picker in Dash callbacks}

\item{disabled}{Logical. If true, color cannot be picked.}

\item{angle}{Numeric. Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 = down}

\item{force}{Numeric. Joystick force: distance between cursor and center in big-circle radii}

\item{size}{Numeric. Size (width) of the component in pixels}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the indicator label is positioned}

\item{className}{Character. Class to apply to the root component element}

\item{style}{Named list. Style to apply to the root component element}
}
