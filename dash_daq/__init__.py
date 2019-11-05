import os as _os
import dash as _dash
import sys as _sys
import json

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, 'package-info.json'))

with open(_filepath) as f:
    __version__ = json.loads(f.read())['version']

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_components = _dash.development.component_loader.load_components(
    _os.path.join(_current_path, 'metadata.json'),
    'dash_daq'
)

_this_module = _sys.modules[__name__]

async_resources = [
    'colorpicker',
    'slider'
]

_js_dist = []

_js_dist.extend([{
        'relative_package_path': 'async~{}.js'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-daq@{}'
            '/dash_daq/async~{}.js'
        ).format(__version__, async_resource),
        'namespace': 'dash_daq',
        'async': True
    } for async_resource in async_resources])

_js_dist.extend([{
        'relative_package_path': 'async~{}.js.map'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-daq@{}'
            '/dash_daq/async~{}.js.map'
        ).format(__version__, async_resource),
        'namespace': 'dash_daq',
        'dynamic': True
    } for async_resource in async_resources])

_js_dist.extend([
    {
        "relative_package_path": "dash_daq.min.js",
        "external_url": (
            "https://unpkg.com/dash-daq@{}"
            "/dash_daq/dash_daq.min.js"
        ).format(__version__),
        "namespace": "dash_daq"
    }
])

_css_dist = []


for _component in _components:
    setattr(_this_module, _component.__name__, _component)
    setattr(_component, '_js_dist', _js_dist)
    setattr(_component, '_css_dist', _css_dist)
