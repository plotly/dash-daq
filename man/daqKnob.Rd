% Auto-generated: do not edit by hand
\name{daqKnob}

\alias{daqKnob}

\title{Knob component}

\description{
A knob component that can be turned to a value between some range.
}

\usage{
daqKnob(id=NULL, className=NULL, color=NULL, digits=NULL,
disabled=NULL, label=NULL, labelPosition=NULL, max=NULL,
min=NULL, persisted_props=NULL, persistence=NULL,
persistence_type=NULL, scale=NULL, showCurrentValue=NULL,
size=NULL, style=NULL, textColor=NULL, theme=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{className}{Character. Class to apply to the root component element.}

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

\item{digits}{Numeric. number of digits to show after decimal places}

\item{disabled}{Logical. If true, knob cannot be moved.}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the knob label is positioned.}

\item{max}{Numeric. The maximum value of the knob}

\item{min}{Numeric. The minimum value of the knob}

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

\item{showCurrentValue}{Logical. show current value of knob}

\item{size}{Numeric. The size (diameter) of the knob in pixels}

\item{style}{Named list. Style to apply to the root component element.}

\item{textColor}{Character. text color of scale}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{value}{Numeric. The value of knob}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

