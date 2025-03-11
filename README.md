# dash_daq

DAQ components for Dash.

Docs: https://dash.plotly.com/dash-daq

<div align="center">
  <a href="https://dash.plotly.com/project-maintenance">
    <img src="https://dash.plotly.com/assets/images/maintained-by-plotly.png" width="400px" alt="Maintained by Plotly">
  </a>
</div>


## Installation

`pip install dash_daq`

(Or for Python 3, `pip3 install dash_daq`)

## Getting started for contributors

The source code and all the subsequent changes should be done inside `src` folder/directory.

Create a python virtual environment and activate it. inside that virtual enviornment

```sh
pip install dash
pip install pyyaml
```

This will install necessary build tools for building and testing library.

```sh
# Clone this repository
git clone https://github.com/plotly/dash-daq.git

# Install dependencies
$ npm install --also=dev

# Watch source for changes and build to `lib/`
$ npm start
```

## Documentation

Component API documentation can be found at https://dash.plotly.com/dash-daq

## Development

### Demo server

You can start up a demo development server to see a demo of the rendered
components:

```sh
$ npm run dash-demo
```

You have to maintain the list of components in `demo/Demo.react.js`.

### Code quality and tests

#### To run lint and unit tests:

```sh
$ npm run test
```

### Testing your components in Dash

1. Build development bundle to `lib/`

```sh
$ npm run start
```

2.  Install module locally (after every change) in virtual environment

```sh
# Generate metadata, and install the daq pacakage locally for testing

$ npm run install-local
```

3.  Run the Dash demo

```sh
$ npm run dash-demo
```

## Installing python package locally

Before publishing to PyPi, you can test installing the module locally:

```sh
# Install in `site-packages` on your machine
$ yarn run install-local
```

## Uninstalling python package locally

```sh
$ yarn run uninstall-local
```

## Producing a new release as a tarball

```sh
vim dash_daq/version.py # and increase it to X.X.X
rm -rf node_modules dist build lib
yarn install
yarn build-tarball
ls dist/dash_daq-X.X.X.tar.gz # this is your tarball
```

## Demo applications

- Dash Daq HP Multimeter - [http://dash-gallery.plotly.host/dash-daq-hp-multimeter](http://dash-gallery.plotly.host/dash-daq-hp-multimeter)
- Dash Daq IV Tracer - [http://dash-gallery.plotly.host/dash-daq-iv-tracer](http://dash-gallery.plotly.host/dash-daq-iv-tracer)
- Dash Daq Pressure Gauge KJL - [http://dash-gallery.plotly.host/dash-daq-pressure-gauge-kjl](http://dash-gallery.plotly.host/dash-daq-pressure-gauge-kjl)
- Dash Daq Pressure Gauge Pfeiffer - [https://dash-gallery.plotly.host/dash-daq-pressure-gauge-pv](https://dash-gallery.plotly.host/dash-daq-pressure-gauge-pv)
- Dash Daq Sparki - [http://dash-gallery.plotly.host/dash-daq-sparki](http://dash-gallery.plotly.host/dash-daq-sparki)
- Dash Daq Stepper Motor - [http://dash-gallery.plotly.host/dash-daq-stepper-motor](http://dash-gallery.plotly.host/dash-daq-stepper-motor)
- Dash Tektronix 350 - [http://dash-gallery.plotly.host/dash-daq-tektronix350](http://dash-gallery.plotly.host/dash-daq-tektronix350)
- Dash Ocean Optics - [http://dash-gallery.plotly.host/dash-ocean-optics](http://dash-gallery.plotly.host/dash-ocean-optics)
