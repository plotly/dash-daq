% Auto-generated: do not edit by hand
\name{daqColorPicker}

\alias{daqColorPicker}

\title{ColorPicker component}

\description{
A color picker.
}

\usage{
daqColorPicker(id=NULL, value=NULL, disabled=NULL, size=NULL, theme=NULL, label=NULL,
labelPosition=NULL, className=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the color picker in Dash callbacks}

\item{value}{Lists containing elements 'hex', 'rbg'.
those elements have the following types:
  - hex (character; optional): hex string
  - rbg (optional): rgb/rgba object. rbg has the following type: lists containing elements 'r', 'g', 'b', 'a'.
those elements have the following types:
  - r (numeric; optional)
  - g (numeric; optional)
  - b (numeric; optional)
  - a (numeric; optional). Color value of the picker}

\item{disabled}{Logical. If true, color cannot be picked.}

\item{size}{Numeric. Size (width) of the component in pixels}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the indicator label is positioned}

\item{className}{Character. Class to apply to the root component element}

\item{style}{Named list. Style to apply to the root component element}
}
