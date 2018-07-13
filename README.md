# dash_daq

DAQ components for Dash.

## Dash

Go to this link to learn about [Dash](https://plot.ly/products/dash/).

## Getting started

```sh
# Install dependencies
$ yarn

# Watch source for changes and build to `lib/`
$ yarn start
```

## Documentation
Component API documentation can be found at [/docs](/docs)

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


## Producing a new release tarball

```sh
vim dash_daq/version.py # and increase it to X.X.X
rm -rf node_modules dist build lib
yarn install
yarn build-tarball
ls dist/dash_daq-X.X.X.tar.gz # this is your tarball
```
