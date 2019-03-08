# dash_daq

DAQ components for Dash.

Docs: https://dash.plot.ly/dash-daq

## Installation

`pip install dash_daq` 

(Or for Python 3, `pip3 install dash_daq`)

## Getting started for contributors

```sh
# Clone this repository
git clone https://github.com/plotly/dash-daq.git

# Install dependencies
$ yarn

# Watch source for changes and build to `lib/`
$ yarn start
```

## Documentation
Component API documentation can be found at https://dash.plot.ly/dash-daq

## Development

### Demo server

You can start up a demo development server to see a demo of the rendered
components:

```sh
$ yarn demo
$ open http://localhost:9000
```

You have to maintain the list of components in `demo/Demo.react.js`.

### Code quality and tests

#### To run lint and unit tests:

```sh
$ yarn test
```

### Testing your components in Dash

1. Build development bundle to `lib/` and watch for changes

        # Once this is started, you can just leave it running.
        $ yarn start

2. Install module locally (after every change)

        # Generate metadata, and build the JavaScript bundle
        $ yarn install-local

        # Now you're done. For subsequent changes, if you've got `yarn start`
        # running in a separate process, it's enough to just do:
        $ python setup.py install

3. Run the Dash demo

        $ python demo.py


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
 * Dash Daq HP Multimeter - [http://dash-gallery.plotly.host/dash-daq-hp-multimeter](http://dash-gallery.plotly.host/dash-daq-hp-multimeter)
 * Dash Daq IV Tracer - [http://dash-gallery.plotly.host/dash-daq-iv-tracer](http://dash-gallery.plotly.host/dash-daq-iv-tracer)
 * Dash Daq LED Control - [http://dash-gallery.plotly.host/dash-daq-led](http://dash-gallery.plotly.host/dash-daq-led)
 * Dash Daq Omega PID - [http://dash-gallery.plotly.host/dash-daq-omega-pid](http://dash-gallery.plotly.host/dash-daq-omega-pid)
 * Dash Daq Pressure Gauge KJL - [http://dash-gallery.plotly.host/dash-daq-pressure-gauge-kjl](http://dash-gallery.plotly.host/dash-daq-pressure-gauge-kjl)
 * Dash Daq Pressure Gauge Pfeiffer - [https://dash-gallery.plotly.host/dash-daq-pressure-gauge-pv](https://dash-gallery.plotly.host/dash-daq-pressure-gauge-pv)
 * Dash Daq Robotic Arm Edge - [http://dash-gallery.plotly.host/dash-daq-robotic-arm](http://dash-gallery.plotly.host/dash-daq-robotic-arm)
 * Dash Daq Sparki - [http://dash-gallery.plotly.host/dash-daq-sparki](http://dash-gallery.plotly.host/dash-daq-sparki)
 * Dash Daq Stepper Motor - [http://dash-gallery.plotly.host/dash-daq-stepper-motor](http://dash-gallery.plotly.host/dash-daq-stepper-motor)
 * Dash Tektronix 350 - [http://dash-gallery.plotly.host/dash-daq-tektronix350](http://dash-gallery.plotly.host/dash-daq-tektronix350)
 * Dash Ocean Optics - [http://dash-gallery.plotly.host/dash-ocean-optics](http://dash-gallery.plotly.host/dash-ocean-optics)
