% Auto-generated: do not edit by hand
\name{daqPowerButton}

\alias{daqPowerButton}

\title{PowerButton component}

\description{
A power button component can be turned on and off.
}

\usage{
daqPowerButton(id=NULL, on=NULL, color=NULL, size=NULL, disabled=NULL,
theme=NULL, label=NULL, labelPosition=NULL, className=NULL,
style=NULL, persistence=NULL, persisted_props=NULL,
persistence_type=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{on}{Logical. Whether or not the power button is on}

\item{color}{Character. The indicator color to display when power button is on}

\item{size}{Numeric. The size (diameter) of the power button in pixels}

\item{disabled}{Logical. If true, power button cannot be clicked}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the button. To control styling, pass an object with label and style properties.}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the button label is positioned.}

\item{className}{Character. Class to apply to the root component element.}

\item{style}{Named list. Style to apply to the root component element.}

\item{persistence}{Logical | character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persisted_props}{List of a value equal to: 'on's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `on` is allowed this prop can
normally be ignored.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

