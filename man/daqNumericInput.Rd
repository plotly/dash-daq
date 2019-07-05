% Auto-generated: do not edit by hand
\name{daqNumericInput}

\alias{daqNumericInput}

\title{NumericInput component}

\description{
A numeric input component that can be set to a value between some range.
}

\usage{
daqNumericInput(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL, theme=NULL,
label=NULL, labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{value}{Numeric. The value of numeric input}

\item{size}{Numeric. The size (length) of the numeric input in pixels}

\item{min}{Numeric. The minimum value of the numeric input}

\item{max}{Numeric. The maximum value of the numeric input}

\item{disabled}{Logical. If true, numeric input cannot changed.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the numeric input label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}
