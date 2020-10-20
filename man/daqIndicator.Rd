% Auto-generated: do not edit by hand
\name{daqIndicator}

\alias{daqIndicator}

\title{Indicator component}

\description{
A boolean indicator LED.
}

\usage{
daqIndicator(id=NULL, value=NULL, color=NULL, size=NULL, width=NULL,
height=NULL, theme=NULL, label=NULL, labelPosition=NULL,
className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the indicator in Dash callbacks}

\item{value}{Logical. If true, indicator is illuminated}

\item{color}{Character. Color of the indicator}

\item{size}{Numeric. Size of the component. Either use this or width and height}

\item{width}{Numeric. Width of the component. Set both width and height for a rectangular indicator}

\item{height}{Numeric. Height of the component. Set both width and height for a rectangular indicator}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom', 'right', 'left'. Where the indicator label is positioned}

\item{className}{Character. Class to apply to the root component element}

\item{style}{Named list. Style to apply to the root component element}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

