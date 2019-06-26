% Auto-generated: do not edit by hand
\name{daqPowerButton}

\alias{daqPowerButton}

\title{PowerButton component}

\description{
A power button component can be turned on and off.
}

\usage{
daqPowerButton(id=NULL, on=NULL, color=NULL, size=NULL, disabled=NULL, theme=NULL, label=NULL,
labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{on}{Logical. Whether or not the power button is on}

\item{color}{Character. The indicator color to display when power button is on}

\item{size}{Numeric. The size (diameter) of the power button in pixels}

\item{disabled}{Logical. If true, power button cannot be clicked}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the button. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the button label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}
