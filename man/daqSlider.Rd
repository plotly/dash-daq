% Auto-generated: do not edit by hand
\name{daqSlider}

\alias{daqSlider}

\title{Slider component}

\description{
A slider component with support for a target value.
}

\usage{
daqSlider(id=NULL, className=NULL, color=NULL, disabled=NULL,
dots=NULL, handleLabel=NULL, included=NULL,
labelPosition=NULL, marks=NULL, max=NULL, min=NULL,
persisted_props=NULL, persistence=NULL,
persistence_type=NULL, size=NULL, step=NULL, targets=NULL,
theme=NULL, updatemode=NULL, value=NULL, vertical=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{className}{Character. Additional CSS class for the root DOM node.}

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

\item{disabled}{Logical. If true, the handles can't be moved.}

\item{dots}{Logical. When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.

Note: dots are disabled automatically when
using color.ranges}

\item{handleLabel}{Character | lists containing elements 'showcurrentvalue', 'label', 'color', 'style'.
those elements have the following types:
  - showcurrentvalue (logical; optional)
  - label (character; optional)
  - color (character; optional)
  - style (named list; optional). Configuration of the slider handle's label.
Passing falsy value will disable the label.}

\item{included}{Logical. If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

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

\item{max}{Numeric. Maximum allowed value of the slider.}

\item{min}{Numeric. Minimum allowed value of the slider.}

\item{persisted_props}{List of a value equal to: 'value's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.}

\item{persistence}{Logical | character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}

\item{size}{Numeric. Size of the slider in pixels.}

\item{step}{Numeric. Value by which increments or decrements are made.}

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

\item{updatemode}{A value equal to: 'mouseup', 'drag'. Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.}

\item{value}{Numeric. The value of the input.}

\item{vertical}{Logical. If true, the slider will be vertical.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

