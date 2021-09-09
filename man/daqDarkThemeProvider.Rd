% Auto-generated: do not edit by hand
\name{daqDarkThemeProvider}

\alias{daqDarkThemeProvider}

\title{DarkThemeProvider component}

\description{
DarkThemeProvider is a component that is placed at the root of the component tree to make all components match the dark theme
}

\usage{
daqDarkThemeProvider(children=NULL, theme=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. The children of this component}

\item{theme}{Lists containing elements 'primary', 'secondary', 'detail', 'dark'.
those elements have the following types:
  - primary (character; optional): highlight color
  - secondary (character; optional): supporting color
  - detail (character; optional): color used for ui details, like borders
  - dark (logical; optional): true for dark mode, false for light. Theme object to override with a custom theme}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

