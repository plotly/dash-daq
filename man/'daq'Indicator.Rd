% Auto-generated: do not edit by hand
\name{'daq'Indicator}

\alias{'daq'Indicator}

\title{Indicator component}

\description{
A boolean indicator LED.
}

\usage{
'daq'Indicator(id=NULL, className=NULL, color=NULL, height=NULL,
label=NULL, labelPosition=NULL, size=NULL, style=NULL,
theme=NULL, value=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the indicator in Dash callbacks}

\item{className}{Character. Class to apply to the root component element}

\item{color}{Character. Color of the indicator}

\item{height}{Numeric. Height of the component. Set both width and height for a rectangular indicator}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom', 'right', 'left'. Where the indicator label is positioned}

\item{size}{Numeric. Size of the component. Either use this or width and height}

\item{style}{Named list. Style to apply to the root component element}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{value}{Logical. If true, indicator is illuminated}

\item{width}{Numeric. Width of the component. Set both width and height for a rectangular indicator}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

