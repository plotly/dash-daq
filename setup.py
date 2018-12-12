from setuptools import setup

exec (open('dash_daq/version.py').read())

setup(
    name='dash_daq',
    version=__version__,
    author='The Plotly Team',
    packages=['dash_daq'],
    include_package_data=True,
    description='DAQ components for Dash',
    install_requires=[]
)
