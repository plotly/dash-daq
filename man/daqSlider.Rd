% Auto-generated: do not edit by hand
\name{daqSlider}

\alias{daqSlider}

\title{Slider component}

\description{
A slider component with support for a target value.
}

\usage{
daqSlider(id=NULL, marks=NULL, color=NULL, value=NULL, className=NULL, labelPosition=NULL,
disabled=NULL, dots=NULL, included=NULL, min=NULL, max=NULL, step=NULL,
vertical=NULL, size=NULL, targets=NULL, theme=NULL, handleLabel=NULL,
updatemode=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{marks}{Lists containing elements 'number'.
those elements have the following types:
  - number (optional): . number has the following type: character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Marks on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties.}

\item{color}{Character | lists containing elements 'default', 'gradient', 'ranges'.
those elements have the following types:
  - default (character; optional): fallback color to use when color.ranges
has gaps.
  - gradient (logical; optional): display ranges as a gradient between given colors.
requires color.ranges to be contiguous along
the entirety of the gauge's range of values.
  - ranges (optional): define multiple color ranges on the slider's track.
the key determines the color of the range and
the value is the start,end of the range itself.. ranges has the following type: lists containing elements 'color'.
those elements have the following types:
  - color (list of numerics; optional). Color configuration for the slider's track.}

\item{value}{Numeric. The value of the input.}

\item{className}{Character. Additional CSS class for the root DOM node.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{disabled}{Logical. If true, the handles can't be moved.}

\item{dots}{Logical. When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.

Note: dots are disabled automatically when
using color.ranges}

\item{included}{Logical. If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.}

\item{min}{Numeric. Minimum allowed value of the slider.}

\item{max}{Numeric. Maximum allowed value of the slider.}

\item{step}{Numeric. Value by which increments or decrements are made.}

\item{vertical}{Logical. If true, the slider will be vertical.}

\item{size}{Numeric. Size of the slider in pixels.}

\item{targets}{Lists containing elements 'number'.
those elements have the following types:
  - number (optional): . number has the following type: character | lists containing elements 'showcurrentvalue', 'label', 'color', 'style'.
those elements have the following types:
  - showcurrentvalue (logical; optional)
  - label (character; optional)
  - color (character; optional)
  - style (named list; optional). Targets on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific target point,
the value should be an object which
contains style and label properties.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{handleLabel}{Character | lists containing elements 'showcurrentvalue', 'label', 'color', 'style'.
those elements have the following types:
  - showcurrentvalue (logical; optional)
  - label (character; optional)
  - color (character; optional)
  - style (named list; optional). Configuration of the slider handle's label.
Passing falsy value will disable the label.}

\item{updatemode}{A value equal to: 'mouseup', 'drag'. Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.}
}
