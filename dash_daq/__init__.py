import os as _os
import dash as _dash
import sys as _sys
import json

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, 'package-info.json'))

with open(_filepath) as f:
    __version__ = json.loads(f.read())['version']

from ._imports_ import *  # noqa: F401, F403, E402
from ._imports_ import __all__  # noqa: E402

async_resources = [
    'colorpicker',
    'slider'
]

_js_dist = []

_js_dist.extend([{
        'relative_package_path': 'async-{}.js'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-daq@{}'
            '/dash_daq/async-{}.js'
        ).format(__version__, async_resource),
        'namespace': 'dash_daq',
        'async': True
    } for async_resource in async_resources])

_js_dist.extend([{
        'relative_package_path': 'async-{}.js.map'.format(async_resource),
        'external_url': (
            'https://unpkg.com/dash-daq@{}'
            '/dash_daq/async-{}.js.map'
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

_js_dist.extend([
    {
        "relative_package_path": "dash_daq.min.js.map",
        "external_url": (
            "https://unpkg.com/dash-daq@{}"
            "/dash_daq/dash_daq.min.js.map"
        ).format(__version__),
        "namespace": "dash_daq",
        'dynamic': True
    }
])
_css_dist = []


for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
