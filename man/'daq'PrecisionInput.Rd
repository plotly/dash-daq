% Auto-generated: do not edit by hand
\name{'daq'PrecisionInput}

\alias{'daq'PrecisionInput}

\title{PrecisionInput component}

\description{
A numeric input component that converts an input value to the desired precision.
}

\usage{
'daq'PrecisionInput(id=NULL, className=NULL, disabled=NULL, label=NULL,
labelPosition=NULL, max=NULL, min=NULL,
persisted_props=NULL, persistence=NULL,
persistence_type=NULL, precision=NULL, size=NULL,
style=NULL, theme=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{className}{Character. Class to apply to the root component element.}

\item{disabled}{Logical. If true, numeric input cannot be changed.}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the scientific notation. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the numeric input label is positioned.}

\item{max}{Numeric. The maximum value of the numeric input}

\item{min}{Numeric. The minimum value of the numeric input}

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

\item{precision}{Numeric. Number of significant figures}

\item{size}{Numeric. The size (length) of the numeric input in pixels}

\item{style}{Named list. Style to apply to the root component element.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{value}{Numeric. The value of numeric input}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

