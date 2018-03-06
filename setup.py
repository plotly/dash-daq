from setuptools import setup

exec (open('dash_control_components/version.py').read())

setup(
    name='dash_control_components',
    version=__version__,
    author='briandennis',
    packages=['dash_control_components'],
    include_package_data=True,
    license='MIT',
    description='Control and indicator components for Dash',
    install_requires=[]
)
