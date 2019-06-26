% Auto-generated: do not edit by hand
\name{daqLEDDisplay}

\alias{daqLEDDisplay}

\title{LEDDisplay component}

\description{
A 7-bar LED display component.
}

\usage{
daqLEDDisplay(id=NULL, value=NULL, color=NULL, backgroundColor=NULL, size=NULL, theme=NULL,
label=NULL, labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the display in Dash callbacks}

\item{value}{Numeric | character. Value to be displayed. A number or a string
containing only digits (0-9), periods, and colons.}

\item{color}{Character. Color of the display}

\item{backgroundColor}{Character. Color of the display's background}

\item{size}{Numeric. Size of the display}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the display label is positioned}

\item{className}{Character. Class to apply to the root component element}

\item{style}{Named list. Style to apply to the root component element}
}
