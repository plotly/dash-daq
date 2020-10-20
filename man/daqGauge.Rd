% Auto-generated: do not edit by hand
\name{daqGauge}

\alias{daqGauge}

\title{Gauge component}

\description{
A Gauge component that points to a value between some range.
}

\usage{
daqGauge(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL,
base=NULL, logarithmic=NULL, showCurrentValue=NULL,
units=NULL, theme=NULL, label=NULL, labelPosition=NULL,
scale=NULL, color=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{value}{Numeric. The value of gauge. If logarithmic, the displayed
value will be the logarithm of the inputted value.}

\item{size}{Numeric. The size (diameter) of the gauge in pixels}

\item{min}{Numeric. The minimum value of the gauge. If logarithmic,
represents the minimum exponent.}

\item{max}{Numeric. The maximum value of the gauge. If logarithmic,
represents the maximum exponent.}

\item{base}{Numeric. Base to be used in logarithmic scale.}

\item{logarithmic}{Logical. If set to true, a logarithmic scale will be
used.}

\item{showCurrentValue}{Logical. If true, the current value of the gauge
will be displayed}

\item{units}{Character. Label for the current value}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

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

\item{color}{Character | lists containing elements 'default', 'gradient', 'ranges'.
those elements have the following types:
  - default (character; optional): color used for current value text and other minor accents
  - gradient (logical; optional): display ranges as a gradient between given colors.
  - ranges (optional): define multiple color ranges on the gauge's track.
the key determines the color of the range and
the value is the start,end of the range itself.
ranges must be contiguous along the entirety
of the gauge's range of values.. ranges has the following type: lists containing elements 'color'.
those elements have the following types:
  - color (list of numerics; optional). Color configuration for the gauge's track.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

