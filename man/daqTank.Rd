% Auto-generated: do not edit by hand
\name{daqTank}

\alias{daqTank}

\title{Tank component}

\description{
A Tank component that fills to a value between some range.
}

\usage{
daqTank(id=NULL, base=NULL, className=NULL, color=NULL,
currentValueStyle=NULL, exceedMessage=NULL, height=NULL,
label=NULL, labelPosition=NULL, lagingMessage=NULL,
logarithmic=NULL, max=NULL, min=NULL, scale=NULL,
showCurrentValue=NULL, style=NULL, textColor=NULL,
units=NULL, value=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{base}{Numeric. Base to be used in logarithmic scale.}

\item{className}{Character. Class to apply to the root component element.}

\item{color}{Character. The color of tank fill}

\item{currentValueStyle}{Named list. text style of current value}

\item{exceedMessage}{Character. Warning message when value exceed max}

\item{height}{Numeric. The height of the tank in pixels}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{lagingMessage}{Character. Warning message when value is laging from min}

\item{logarithmic}{Logical. If set to true, a logarithmic scale will be
used.}

\item{max}{Numeric. The maximum value of the tank. If logarithmic,
represents the maximum exponent.}

\item{min}{Numeric. The minimum value of the tank. If logarithmic,
represents minimum exponent.}

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

\item{showCurrentValue}{Logical. If true, the current value of the tank
will be displayed}

\item{style}{Named list. Style to apply to the root component element.}

\item{textColor}{Character. text color}

\item{units}{Character. Label for the current value}

\item{value}{Numeric. The value of tank. If logarithmic, the displayed value
will be the logarithm of the inputted value.}

\item{width}{Numeric. The width of the tank in pixels}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

