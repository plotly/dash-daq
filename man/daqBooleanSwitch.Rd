% Auto-generated: do not edit by hand
\name{daqBooleanSwitch}

\alias{daqBooleanSwitch}

\title{BooleanSwitch component}

\description{
A switch component that toggles between on and off.
}

\usage{
daqBooleanSwitch(id=NULL, on=NULL, color=NULL, vertical=NULL, disabled=NULL, theme=NULL,
label=NULL, labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{on}{Logical. Whether or not the switch is on}

\item{color}{Character. Color to highlight active switch background}

\item{vertical}{Logical. If true, switch will be vertical instead
of horizontal}

\item{disabled}{Logical. If true, switch cannot be clicked}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root object.}
}
