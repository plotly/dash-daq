% Auto-generated: do not edit by hand
\name{daqDirectionCompass}

\alias{daqDirectionCompass}

\title{DirectionCompass component}

\description{

}

\usage{
daqDirectionCompass(id=NULL, direction=NULL, label=NULL, labelPosition=NULL,
showCurrentValue=NULL, size=NULL, theme=NULL)
}

\arguments{
\item{id}{Character. id of root element}

\item{direction}{Numeric. angle(degrees) of needle of compass}

\item{label}{Character | lists containing elements 'label', 'style'.
those elements have the following types:
  - label (character; optional)
  - style (named list; optional). label text}

\item{labelPosition}{A value equal to: 'top', 'bottom'. position of label either top or bottom}

\item{showCurrentValue}{Logical. show current value}

\item{size}{Numeric. size of compass}

\item{theme}{Lists containing elements 'primary', 'secondary', 'detail', 'dark'.
those elements have the following types:
  - primary (character; optional): highlight color
  - secondary (character; optional): supporting color
  - detail (character; optional): color used for ui details, like borders
  - dark (logical; optional): true for dark mode, false for light. theme provider}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

