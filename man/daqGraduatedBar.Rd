% Auto-generated: do not edit by hand
\name{daqGraduatedBar}

\alias{daqGraduatedBar}

\title{GraduatedBar component}

\description{
A graduated bar component that displays a value within some range as a percentage.
}

\usage{
daqGraduatedBar(id=NULL, className=NULL, color=NULL, label=NULL,
labelPosition=NULL, max=NULL, min=NULL,
showCurrentValue=NULL, size=NULL, step=NULL, style=NULL,
theme=NULL, value=NULL, vertical=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{className}{Character. Class to apply to the root component element.}

\item{color}{Character | lists containing elements 'default', 'gradient', 'ranges'.
those elements have the following types:
  - default (character; optional): fallback color to use when color.ranges
has gaps.
  - gradient (logical; optional): display ranges as a gradient between given colors.
requires color.ranges to be contiguous along
the entirety of the graduated bar's range of values.
  - ranges (optional): define multiple color ranges on the graduated bar's track.
the key determines the color of the range and
the value is the start,end of the range itself.. ranges has the following type: lists containing elements 'color'.
those elements have the following types:
  - color (list of numerics; optional). Color configuration for the graduated bar's
progress blocks.}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{max}{Numeric. The maximum value of the graduated bar}

\item{min}{Numeric. The minimum value of the graduated bar}

\item{showCurrentValue}{Logical. If true, the current percentage
 of the bar will be displayed}

\item{size}{Numeric. The size (length) of the graduated bar in pixels}

\item{step}{Numeric. Value by which progress blocks appear}

\item{style}{Named list. Style to apply to the root component element.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{value}{Numeric. The value of the graduated bar}

\item{vertical}{Logical. If true, will display bar vertically instead of horizontally}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

