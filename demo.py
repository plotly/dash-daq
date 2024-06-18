import dash

print(f"Dash Version: {dash.__version__}")
if dash.__version__ == "2.0.0":
    from dash import html
    from dash import dcc
else:
    import dash_html_components as html
    import dash_core_components as dcc

from dash.dependencies import Input, Output, State

from dash_daq import (
    Joystick,
    BooleanSwitch,
    ColorPicker,
    Gauge,
    GraduatedBar,
    Indicator,
    Knob,
    LEDDisplay,
    NumericInput,
    PowerButton,
    PrecisionInput,
    Slider,
    StopButton,
    Tank,
    Thermometer,
    ToggleSwitch,
    DarkThemeProvider,
    DirectionCompass,
)

app = dash.Dash("")

app.css.append_css({"external_url": "https://codepen.io/briandennis/pen/zRbYpB.css"})

app.config.suppress_callback_exceptions = True
app.scripts.config.serve_locally = True

################ Set up shared layout ################
root_layout = html.Div(
    [
        dcc.Location(id="url", refresh=True),
        html.Div(
            [
                html.H1("dash_daq Dash Demo"),
                dcc.Link("Light Theme", href="/", refresh=True),
                dcc.Link("Dark Theme", href="/dark", refresh=True),
            ],
            style={
                "width": "80%",
                "marginLeft": "10%",
                "marginRight": "10%",
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center",
                "justifyContent": "space-between",
            },
        ),
        html.Hr(),
        html.Div(
            [
                html.Div(id="page-content"),
                html.Div(
                    [
                        BooleanSwitch(id="hiddenBooleanSwitch"),
                        Gauge(id="hiddenGauge"),
                        GraduatedBar(id="hiddenGraduatedBar"),
                        Indicator(id="hiddenIndicator"),
                        Knob(id="hiddenKnob"),
                        NumericInput(id="hiddenNumericInput"),
                        PowerButton(id="hiddenPowerButton"),
                        StopButton(id="hiddenStopButton"),
                        Tank(id="hiddenTank"),
                        Thermometer(id="hiddenThermometer"),
                        ToggleSwitch(id="hiddenToggleSwitch"),
                        DarkThemeProvider(),
                    ],
                    style={"display": "none"},
                ),
            ]
        ),
    ]
)

################ Set up light layout ################
controls = html.Div(
    [
        Joystick(
            id="demojoystick",
            label="Joystick",
            labelPosition="bottom",
            lockX=False,
            lockY=True,
        ),
        Knob(id="demoKnob", label="Knob", min=0, max=15, value=2),
        NumericInput(id="demoNumericInput", min=1, max=10000, value=100),
        BooleanSwitch(id="demoSwitch"),
        ToggleSwitch(id="demoToggleSwitch", value="false", vertical=True),
        StopButton(id="demoStopButton", n_clicks=0),
        PowerButton(
            id="demoPowerButton",
            on="false",
            onButtonStyle={"backgroundColor": "red"},
            offButtonStyle={"backgroundColor": "blue"},
        ),
        Slider(
            id="demoSlider",
            min=0,
            max=100,
            size=200,
            value=40,
            marks={0: 0, 50: 50, 100: 100},
            updatemode="drag",
            handleLabel={"label": "Current", "showCurrentValue": True},
            targets={75: "Threshold"},
            color={
                "ranges": {
                    "blue": [0, 50],
                    "purple": [50, 100],
                },
                "gradient": True,
            },
        ),
        ColorPicker(id="demoColorPicker", value={"hex": "#ade2fa"}),
        PrecisionInput(id="demoPrecisionInput", precision=2, value=120),
    ],
    style={
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-between",
    },
)


def warning(x, y):
    return x + " " + y


indicators = html.Div(
    [
        html.Div(
            [
                Gauge(
                    id="demoGauge",
                    label="Gauge",
                    logarithmic=True,
                    min=0,
                    max=4,
                    scale={"start": 0, "interval": 1, "labelInterval": 1},
                    value=1,
                    showCurrentValue=True,
                    color={
                        "gradient": True,
                        "default": "yellow",
                        "ranges": {"red": [0, 2], "green": [2, 4]},
                    },
                ),
                DirectionCompass(
                    id="direction-compass",
                    direction=20,
                    label={
                        "label": "label",
                        "style": {"color": "red", "textDecoration": "underline"},
                    },
                    showCurrentValue=True,
                ),
                Thermometer(
                    id="demoThermometer", label="Thermometer", min=0, max=10, value=2
                ),
                GraduatedBar(
                    id="demoGraduatedBar",
                    label="GraduatedBar",
                    min=0,
                    max=100,
                    value=40,
                ),
                LEDDisplay(
                    id="demoLEDDisplay", value="-1.2", backgroundColor="#FFFFFF"
                ),
                html.Div(
                    [
                        html.Div(
                            [
                                Indicator(
                                    id="demoBooleanIndicator",
                                    label="BooleanSwitch Indicator",
                                    labelPosition="top",
                                    value=True,
                                ),
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="demoToggleIndicator",
                                    label="ToggleSwitch Indicator",
                                    labelPosition="top",
                                    value=False,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="demoIndicator",
                                    label="Stop Button Indicator",
                                    labelPosition="top",
                                    value=True,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="demoPowerIndicator",
                                    label="Power Indicator",
                                    labelPosition="top",
                                    value=False,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                    ],
                    style={
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "justifyContent": "space-between",
                    },
                ),
            ],
            style={
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center",
                "justifyContent": "space-between",
            },
        )
    ]
)

light_layout = html.Div(
    [
        html.Link(href="https://codepen.io/plotly/pen/EQZeaW.css", rel="stylesheet"),
        html.Div([html.H2("Controls"), controls], style={"width": "80%"}),
        html.Br(),
        html.Br(),
        html.Div(
            [
                html.H2("Indicators"),
                indicators,
                Tank(
                    id="demoTank",
                    label="Tank",
                    min=0,
                    max=10,
                    value=2,
                    showCurrentValue=True,
                    scale={"custom": {0: "Low", 5: "Medium", 10: "High"}},
                    exceedMessage="Exceed",
                ),
            ],
            style={"width": "80%"},
        ),
    ],
    style={
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
    },
)

################ Set up dark layout ################
dark_controls = html.Div(
    [
        Joystick(
            id="dark-demojoystick",
            label="Joystick",
        ),
        Knob(
            id="dark-demoKnob",
            label="Knob",
            min=0,
            max=10,
            value=2,
            showCurrentValue=True,
        ),
        NumericInput(id="dark-demoNumericInput", min=1, max=10000, value=100),
        BooleanSwitch(id="dark-demoSwitch"),
        ToggleSwitch(id="dark-demoToggleSwitch", value="false", vertical=True),
        StopButton(id="dark-demoStopButton", n_clicks=0),
        PowerButton(id="dark-demoPowerButton", on="false"),
        Slider(
            id="dark-demoSlider",
            min=0,
            max=100,
            size=200,
            value=40,
            marks={0: 0, 50: 50, 100: 100},
            updatemode="drag",
            handleLabel={"label": "Current", "showCurrentValue": True},
            targets={75: "Threshold"},
            color={
                "ranges": {
                    "blue": [0, 50],
                    "purple": [50, 100],
                },
                "gradient": True,
            },
        ),
        ColorPicker(id="dark-demoColorPicker", value={"hex": "#ade2fa"}),
        PrecisionInput(id="dark-demoPrecisionInput", precision=2, value=120),
    ],
    style={
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-between",
    },
)

dark_indicators = html.Div(
    [
        html.Div(
            [
                Gauge(
                    id="dark-demoGauge",
                    label="Gauge",
                    logarithmic=True,
                    min=0,
                    max=4,
                    color="red",
                    scale={"start": 0, "interval": 1, "labelInterval": 1},
                    value=100,
                    showCurrentValue=True,
                ),
                Tank(
                    id="dark-demoTank",
                    label="Tank",
                    min=0,
                    max=10,
                    value=2,
                    scale={"custom": {0: "Low", 5: "Medium", 10: "High"}},
                    # textColor="red",
                    showCurrentValue=True,
                ),
                Thermometer(
                    id="dark-demoThermometer",
                    label="Thermometer",
                    min=0,
                    max=10,
                    value=2,
                ),
                GraduatedBar(
                    id="dark-demoGraduatedBar",
                    label="GraduatedBar",
                    min=0,
                    max=100,
                    value=40,
                ),
                LEDDisplay(
                    id="dark-demoLEDDisplay", value=1.2, backgroundColor="#FFFFFF"
                ),
                html.Div(
                    [
                        html.Div(
                            [
                                Indicator(
                                    id="dark-demoBooleanIndicator",
                                    label="BooleanSwitch Indicator",
                                    labelPosition="top",
                                    value=True,
                                ),
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="dark-demoToggleIndicator",
                                    label="ToggleSwitch Indicator",
                                    labelPosition="top",
                                    value=False,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="dark-demoIndicator",
                                    label="Stop Button Indicator",
                                    labelPosition="top",
                                    value=True,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                        html.Div(
                            [
                                Indicator(
                                    id="dark-demoPowerIndicator",
                                    label="Power Indicator",
                                    labelPosition="top",
                                    value=False,
                                )
                            ],
                            style={"height": "75px"},
                        ),
                    ],
                    style={
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "justifyContent": "space-between",
                    },
                ),
            ],
            style={
                # "background-color": "black",
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "center",
                "justifyContent": "space-between",
            },
        )
    ]
)

dark_layout = DarkThemeProvider(
    [
        html.Link(href="https://codepen.io/anon/pen/BYEPbO.css", rel="stylesheet"),
        html.Div(
            [
                html.Div([html.H2("Controls"), dark_controls], style={"width": "80%"}),
                html.Br(),
                html.Br(),
                html.Div(
                    [
                        html.H2("Indicators"),
                        dark_indicators,
                        DirectionCompass(
                            id="dark-direction-compass",
                            direction=20,
                            label={
                                "label": "label",
                                "style": {
                                    "color": "red",
                                    "textDecoration": "underline",
                                },
                            },
                            showCurrentValue=True,
                        ),
                    ],
                    style={"width": "80%"},
                ),
            ],
            style={
                "width": "100%",
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",
            },
        ),
    ]
)

app.layout = root_layout

################ Set up shared callbacks ###############


@app.callback(Output("page-content", "children"), [Input("url", "pathname")])
def display_page(pathname):
    if pathname == "/dark":
        return dark_layout
    else:
        return light_layout


################ Set up light callbacks ################
@app.callback(Output("demoLEDDisplay", "value"), [Input("demoPrecisionInput", "value")])
def update_LEDDisplay(value):
    digits = str(value)[:2]
    return "-" + ".".join(digits)

@app.callback(Output("direction-compass", "direction"), [Input("demoKnob", "value")])
def update_direction_compass(value):
    return int((value * 360 / 15) * 100) / 100

@app.callback(Output("demoGauge", "value"), [Input("demoNumericInput", "value")])
def update_gauge(value):
    return value


@app.callback(Output("demoGauge", "color"), [Input("demoColorPicker", "value")])
def update_gauge_color(value):
    return value["hex"]


@app.callback(Output("demoTank", "color"), [Input("demoColorPicker", "value")])
def update_tank_color(value):
    return value["hex"]


@app.callback(Output("demoGraduatedBar", "color"), [Input("demoColorPicker", "value")])
def update_graduatedBar_color(value):
    return value["hex"]


@app.callback(Output("demoThermometer", "color"), [Input("demoColorPicker", "value")])
def update_thermometer_color(value):
    return value["hex"]


@app.callback(Output("demoTank", "value"), [Input("demoKnob", "value")])
def update_tank(value):
    return value


@app.callback(Output("demoThermometer", "value"), [Input("demoKnob", "value")])
def update_thermometer(value):
    return value


@app.callback(Output("demoGraduatedBar", "value"), [Input("demoSlider", "value")])
def update_graduated_bar(value):
    return value


@app.callback(Output("demoBooleanIndicator", "value"), [Input("demoSwitch", "on")])
def update_boolean_indicator(on):
    return on


@app.callback(
    Output("demoToggleIndicator", "value"), [Input("demoToggleSwitch", "value")]
)
def update_boolean_indicator(value):
    return value


@app.callback(
    Output("demoIndicator", "value"),
    [Input("demoStopButton", "n_clicks")],
    [State("demoIndicator", "value")],
)
def update_indicator(_, indicatorState):
    return not indicatorState


@app.callback(Output("demoPowerIndicator", "value"), [Input("demoPowerButton", "on")])
def update_thermometer(on):
    return on


################ Set up dark callbacks ################
@app.callback(
    Output("dark-demoLEDDisplay", "value"), [Input("dark-demoPrecisionInput", "value")]
)
def update_LEDDisplay(value):
    digits = str(value)[:2]
    return "-" + ".".join(digits)


@app.callback(
    Output("dark-demoGauge", "value"), [Input("dark-demoNumericInput", "value")]
)
def dark_update_gauge(value):
    return value


@app.callback(
    Output("dark-demoGauge", "color"), [Input("dark-demoColorPicker", "value")]
)
def dark_update_gauge_color(value):
    return value["hex"]


@app.callback(
    Output("dark-demoTank", "color"), [Input("dark-demoColorPicker", "value")]
)
def dark_update_tank_color(value):
    return value["hex"]


@app.callback(
    Output("dark-demoGraduatedBar", "color"), [Input("dark-demoColorPicker", "value")]
)
def dark_update_graduatedBar_color(value):
    return value["hex"]


@app.callback(
    Output("dark-demoThermometer", "color"), [Input("dark-demoColorPicker", "value")]
)
def dark_update_thermometer_color(value):
    return value["hex"]


@app.callback(Output("dark-demoTank", "value"), [Input("dark-demoKnob", "value")])
def dark_update_tank(value):
    return value


@app.callback(
    Output("dark-demoThermometer", "value"), [Input("dark-demoKnob", "value")]
)
def dark_update_thermometer(value):
    return value

@app.callback(Output("dark-direction-compass", "direction"), [Input("dark-demoKnob", "value")])
def update_direction_compass(value):
    return int((value * 360 / 15) * 100) / 100

@app.callback(
    Output("dark-demoGraduatedBar", "value"), [Input("dark-demoSlider", "value")]
)
def dark_update_graduated_bar(value):
    return value


@app.callback(
    Output("dark-demoBooleanIndicator", "value"), [Input("dark-demoSwitch", "on")]
)
def dark_update_boolean_indicator(on):
    return on


@app.callback(
    Output("dark-demoToggleIndicator", "value"),
    [Input("dark-demoToggleSwitch", "value")],
)
def dark_update_boolean_indicator(value):
    return value


@app.callback(
    Output("dark-demoIndicator", "value"),
    [Input("dark-demoStopButton", "n_clicks")],
    [State("dark-demoIndicator", "value")],
)
def dark_update_indicator(_, indicatorState):
    return not indicatorState


@app.callback(
    Output("dark-demoPowerIndicator", "value"), [Input("dark-demoPowerButton", "on")]
)
def dark_update_thermometer(on):
    return on


################ Run Server ################
if __name__ == "__main__":
    app.run_server(debug=True)
