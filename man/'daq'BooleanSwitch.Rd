% Auto-generated: do not edit by hand
\name{'daq'BooleanSwitch}

\alias{'daq'BooleanSwitch}

\title{BooleanSwitch component}

\description{
A switch component that toggles between on and off.
}

\usage{
'daq'BooleanSwitch(id=NULL, className=NULL, color=NULL, disabled=NULL,
label=NULL, labelPosition=NULL, on=NULL,
persisted_props=NULL, persistence=NULL,
persistence_type=NULL, size=NULL, style=NULL, theme=NULL,
vertical=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{className}{Character. Class to apply to the root component element.}

\item{color}{Character. Color to highlight active switch background}

\item{disabled}{Logical. If true, switch cannot be clicked}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the component label is positioned.}

\item{on}{Logical. Whether or not the switch is on}

\item{persisted_props}{List of a value equal to: 'on's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `on` is allowed this prop can
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

\item{size}{Numeric. size of the switch}

\item{style}{Named list. Style to apply to the root object.}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{vertical}{Logical. If true, switch will be vertical instead
of horizontal}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

