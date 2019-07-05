% Auto-generated: do not edit by hand
\name{daqStopButton}

\alias{daqStopButton}

\title{StopButton component}

\description{
A Stop button component
}

\usage{
daqStopButton(children=NULL, id=NULL, size=NULL, buttonText=NULL, n_clicks=NULL,
disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL,
style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of the button.}

\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{size}{Numeric. The size (width) of the stop button in pixels}

\item{buttonText}{Character. Text displayed in the button}

\item{n_clicks}{Numeric. Number of times the button was clicked}

\item{disabled}{Logical. If true, button cannot be pressesd.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the button.
To control styling, pass an object with label and
style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the  label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}
