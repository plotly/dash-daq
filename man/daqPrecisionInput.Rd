% Auto-generated: do not edit by hand
\name{daqPrecisionInput}

\alias{daqPrecisionInput}

\title{PrecisionInput component}

\description{
A numeric input component that converts an input value to the desired precision.
}

\usage{
daqPrecisionInput(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, precision=NULL,
disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL,
style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{value}{Numeric. The value of numeric input}

\item{size}{Numeric. The size (length) of the numeric input in pixels}

\item{min}{Numeric. The minimum value of the numeric input}

\item{max}{Numeric. The maximum value of the numeric input}

\item{precision}{Numeric. Number of significant figures}

\item{disabled}{Logical. If true, numeric input cannot be changed.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the scientific notation. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the numeric input label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}
