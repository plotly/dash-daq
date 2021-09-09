% Auto-generated: do not edit by hand
\name{daqStopButton}

\alias{daqStopButton}

\title{StopButton component}

\description{
A Stop button component
}

\usage{
daqStopButton(children=NULL, id=NULL, buttonText=NULL, className=NULL,
disabled=NULL, label=NULL, labelPosition=NULL,
n_clicks=NULL, size=NULL, style=NULL, theme=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of the button.}

\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{buttonText}{Character. Text displayed in the button}

\item{className}{Character. Class to apply to the root component element.}

\item{disabled}{Logical. If true, button cannot be pressesd.}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the button.
To control styling, pass an object with label and
style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the  label is positioned.}

\item{n_clicks}{Numeric. Number of times the button was clicked}

\item{size}{Numeric. The size (width) of the stop button in pixels}

\item{style}{Named list. Style to apply to the root component element.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

