# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2019-10-04

### Fixed
* Fixed ThemeProvider warning by updating `styled-components` to `v4.4.0`.

## [0.2.1] - 2019-09-24

### Fixed
* Fixed "Cannot read property 'subscribe' of undefined" JavaScript
  error.

## [0.2.0] - 2019-09-24

### Added
* Added `height` and `width` parameters to `daq.Tank` and
  `daq.Thermometer`.

## [0.1.7] - 2019-07-24

### Changed
* Updated library to React 16 for compatibility with `dash-1.0.0`.

## [0.1.6] - 2019-07-16

### Added
* Added ability for LEDDisplay to handle negative numbers.

## [0.1.5] - 2019-05-09

### Fixed
* Fixed missing locationSlider entry in Slider.propTypes.

### Added

* Updated package.json with additional metadata for R package
  building.
* Added JavaScript bundle and source map to dash_daq subfolder.
* Initial commit of dashDaq R package.

## [0.1.4] - 2019-02-18

### Fixed
* Fixed init file to include the correct bundle location.
* Fixed NPM package to include bundle, and updated Python package
  version accordingly.

## [0.1.2] - 2019-02-15

### Fixed
* Fixed version to correspond to the correct/published npm version.

## [0.1.1] - 2019-02-14

### Fixed
* Fixed version to correspond to the correct/published npm version.

## [0.1.0] - 2019-01-28

### Fixed
* Fixed incompatibility issue with Dash `0.36.0`.

### Removed
* Removed unused headers in CHANGELOG.
* Removed all mentioned of `fireEvent` and anything else that used
  Dash events (which have been removed). The `n_clicks` and `value`
  props should be used instead to determine when something has been
  updated.

## [0.0.2] - 2018-06-04

### Fixed
* Error on Windows when generating tarball. Fixed dependency problems
  with import dash_daq.

## [0.0.1] - 2018-05-28

### Fixed

* Display error on ColorPicker Light component fixed
* Gauge component error with default values fixed
* Knob component error with JavaScript split method fixed
