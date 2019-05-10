% Auto-generated: do not edit by hand
\name{daqSlider}

\alias{daqSlider}

\title{Slider component}

\description{
A slider component with support for a target value.
}

\usage{
daqSlider(id=NULL, marks=NULL, color=NULL, value=NULL, className=NULL, labelPosition=NULL, disabled=NULL, dots=NULL, included=NULL, min=NULL, max=NULL, step=NULL, vertical=NULL, size=NULL, targets=NULL, theme=NULL, handleLabel=NULL, updatemode=NULL)
}

\arguments{
\item{id}{The ID used to identify this component in Dash callbacks}

\item{marks}{Marks on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific mark point,
the value should be an object which
contains style and label properties.}

\item{color}{Color configuration for the slider's track.}

\item{value}{The value of the input.}

\item{className}{Additional CSS class for the root DOM node.}

\item{labelPosition}{Where the component label is positioned.}

\item{disabled}{If true, the handles can't be moved.}

\item{dots}{When the step value is greater than 1,
you can set the dots to true if you want to
render the slider with dots.

Note: dots are disabled automatically when
using color.ranges}

\item{included}{If the value is true, it means a continuous
value is included. Otherwise, it is an independent value.}

\item{min}{Minimum allowed value of the slider.}

\item{max}{Maximum allowed value of the slider.}

\item{step}{Value by which increments or decrements are made.}

\item{vertical}{If true, the slider will be vertical.}

\item{size}{Size of the slider in pixels.}

\item{targets}{Targets on the slider.
The key determines the position,
and the value determines what will show.
If you want to set the style of a specific target point,
the value should be an object which
contains style and label properties.}

\item{theme}{Theme configuration to be set by a ThemeProvider}

\item{handleLabel}{Configuration of the slider handle's label.
Passing falsy value will disable the label.}

\item{updatemode}{Determines when the component should update
its value. If `mouseup`, then the slider
will only trigger its value when the user has
finished dragging the slider. If `drag`, then
the slider will update its value continuously
as it is being dragged.
Only use `drag` if your updates are fast.}
}
