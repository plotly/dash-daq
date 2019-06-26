% Auto-generated: do not edit by hand
\name{daqKnob}

\alias{daqKnob}

\title{Knob component}

\description{
A knob component that can be turned to a value between some range.
}

\usage{
daqKnob(id=NULL, value=NULL, color=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL,
theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL,
style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{value}{Numeric. The value of knob}

\item{color}{Character | lists containing elements 'default', 'gradient', 'ranges'.
those elements have the following types:
  - default (character; optional): color used for current value text and other minor accents
  - gradient (logical; optional): display ranges as a gradient between given colors.
  - ranges (optional): define multiple color ranges on the knob's track.
the key determines the color of the range and
the value is the start,end of the range itself.
ranges must be contiguous along the entirety
of the knob's range of values.. ranges has the following type: lists containing elements 'color'.
those elements have the following types:
  - color (list of numerics; optional). Color configuration for the knob's track.}

\item{size}{Numeric. The size (diameter) of the knob in pixels}

\item{min}{Numeric. The minimum value of the knob}

\item{max}{Numeric. The maximum value of the knob}

\item{disabled}{Logical. If true, knob cannot be moved.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the knob label is positioned.}

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

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}
}
