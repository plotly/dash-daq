% Auto-generated: do not edit by hand
\name{daqTank}

\alias{daqTank}

\title{Tank component}

\description{
A Tank component that fills to a value between some range.
}

\usage{
daqTank(id=NULL, value=NULL, size=NULL, color=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{The ID used to identify this component in Dash callbacks}

\item{value}{The value of tank. If logarithmic, the displayed value
will be the logarithm of the inputted value.}

\item{size}{The size (height) of the tank in pixels}

\item{color}{The color of tank fill}

\item{min}{The minimum value of the tank. If logarithmic,
represents minimum exponent.}

\item{max}{The maximum value of the tank. If logarithmic,
represents the maximum exponent.}

\item{base}{Base to be used in logarithmic scale.}

\item{logarithmic}{If set to true, a logarithmic scale will be
used.}

\item{showCurrentValue}{If true, the current value of the tank
will be displayed}

\item{units}{Label for the current value}

\item{label}{Description to be displayed alongside the control. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{Where the component label is positioned.}

\item{scale}{Configuration for the component scale.}

\item{className}{Class to apply to the root component element.}

\item{style}{Style to apply to the root component element.}
}
