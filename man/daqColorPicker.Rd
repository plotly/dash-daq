% Auto-generated: do not edit by hand
\name{daqColorPicker}

\alias{daqColorPicker}

\title{ColorPicker component}

\description{
A color picker.
}

\usage{
daqColorPicker(id=NULL, className=NULL, disabled=NULL, label=NULL,
labelPosition=NULL, persisted_props=NULL, persistence=NULL,
persistence_type=NULL, size=NULL, style=NULL, theme=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify the color picker in Dash callbacks}

\item{className}{Character. Class to apply to the root component element}

\item{disabled}{Logical. If true, color cannot be picked.}

\item{label}{Character | lists containing elements 'style', 'label'.
those elements have the following types:
  - style (named list; optional)
  - label (character; optional). Description to be displayed alongside the control. To control styling,
pass an object with label and style properties}

\item{labelPosition}{A value equal to: 'top', 'bottom'. Where the indicator label is positioned}

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

\item{size}{Numeric. Size (width) of the component in pixels}

\item{style}{Named list. Style to apply to the root component element}

\item{theme}{Named list. Theme configuration to be set by a ThemeProvider}

\item{value}{Lists containing elements 'hex', 'rbg'.
those elements have the following types:
  - hex (character; optional): hex string
  - rbg (optional): rgb/rgba object. rbg has the following type: lists containing elements 'r', 'g', 'b', 'a'.
those elements have the following types:
  - r (numeric; optional)
  - g (numeric; optional)
  - b (numeric; optional)
  - a (numeric; optional). Color value of the picker}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

