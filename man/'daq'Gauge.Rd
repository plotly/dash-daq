% Auto-generated: do not edit by hand
\name{'daq'Gauge}

\alias{'daq'Gauge}

\title{Gauge component}

\description{
A Gauge component that points to a value between some range.
}

\usage{
'daq'Gauge(id=NULL, base=NULL, className=NULL, color=NULL, digits=NULL,
exceedMessage=NULL, label=NULL, labelPosition=NULL,
lagingMessage=NULL, logarithmic=NULL, max=NULL, min=NULL,
scale=NULL, showCurrentValue=NULL, size=NULL, style=NULL,
textColor=NULL, theme=NULL, units=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{base}{Numeric. Base to be used in logarithmic scale.}

\item{className}{Character. Class to apply to the root component element.}

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
  - color (list; optional). Color configuration for the gauge's track.}

\item{digits}{Numeric. Number of digits for current value}

\item{exceedMessage}{Character. Warning message when value exceed max}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{lagingMessage}{Character. Warning message when value is laging from min}

\item{logarithmic}{Logical. If set to true, a logarithmic scale will be
used.}

\item{max}{Numeric. The maximum value of the gauge. If logarithmic,
represents the maximum exponent.}

\item{min}{Numeric. The minimum value of the gauge. If logarithmic,
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

\item{showCurrentValue}{Logical. If true, the current value of the gauge
will be displayed}

\item{size}{Numeric. The size (diameter) of the gauge in pixels}

\item{style}{Named list. Style to apply to the root component element.}

\item{textColor}{Character. text color for theme}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{units}{Character. Label for the current value}

\item{value}{Numeric. The value of gauge. If logarithmic, the displayed
value will be the logarithm of the inputted value.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

