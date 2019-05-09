% Auto-generated: do not edit by hand
\name{daqThermometer}

\alias{daqThermometer}

\title{Thermometer component}

\description{
A thermometer component that fills to a value between some range
}

\usage{
daqThermometer(id=NULL, value=NULL, size=NULL, color=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{The ID used to identify this compnent in Dash callbacks}

\item{value}{The value of thermometer. If logarthmic, the value
displayed will be the logarithm of the inputted value.}

\item{size}{The size (height) of the thermometer in pixels}

\item{color}{The color of the thermometer fill/current value text}

\item{min}{The minimum value of the thermometer. If logarithmic,
represents the minimum exponent.}

\item{max}{The maximum value of the thermometer. If logarithmic,
represents the maximum exponent.}

\item{base}{Base to be used in logarithmic scale.}

\item{logarithmic}{If set to true, a logarithmic scale will be
used.}

\item{showCurrentValue}{If true, the current value of the
thermometer will be displayed}

\item{units}{Label for the current value}

\item{theme}{Theme configuration to be set by a ThemeProvider}

\item{label}{Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{Where the component label is positioned.}

\item{scale}{Configuration for the component scale.}

\item{className}{Class to apply to the root component element.}

\item{style}{Style to apply to the root component element.}
}
