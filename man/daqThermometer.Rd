% Auto-generated: do not edit by hand
\name{daqThermometer}

\alias{daqThermometer}

\title{Thermometer component}

\description{
A thermometer component that fills to a value between some range
}

\usage{
daqThermometer(id=NULL, base=NULL, className=NULL, color=NULL, height=NULL,
label=NULL, labelPosition=NULL, logarithmic=NULL, max=NULL,
min=NULL, scale=NULL, showCurrentValue=NULL, style=NULL,
theme=NULL, units=NULL, value=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{base}{Numeric. Base to be used in logarithmic scale.}

\item{className}{Character. Class to apply to the root component element.}

\item{color}{Character. The color of the thermometer fill/current value text}

\item{height}{Numeric. The height of the thermometer in pixels}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{logarithmic}{Logical. If set to true, a logarithmic scale will be
used.}

\item{max}{Numeric. The maximum value of the thermometer. If logarithmic,
represents the maximum exponent.}

\item{min}{Numeric. The minimum value of the thermometer. If logarithmic,
represents the minimum exponent.}

\item{scale}{Lists containing elements 'start', 'interval', 'labelinterval', 'custom'.
those elements have the following types:
  - start (numeric; optional): value to start the scale from. defaults
to min.
  - interval (numeric; optional): interval by which the scale goes up. attempts
to dynamically divide min-max range by
default.
  - labelinterval (numeric; optional): interval by which labels are added to
scale marks. defaults to 2 (every other
mark has a label).
  - custom (optional): custom scale marks. the key determines the position
and the value determines what will show. if you want
to set the style of a specific mark point, the value
should be an object which contains style and label
properties. custom has the following type: numeric | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (character; optional)
  - label (character; optional). Configuration for the component scale.}

\item{showCurrentValue}{Logical. If true, the current value of the
thermometer will be displayed}

\item{style}{Named list. Style to apply to the root component element.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{units}{Character. Label for the current value}

\item{value}{Numeric. The value of thermometer. If logarthmic, the value
displayed will be the logarithm of the inputted value.}

\item{width}{Numeric. The width of the thermometer in pixels}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

