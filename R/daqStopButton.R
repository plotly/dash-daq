# AUTO GENERATED FILE - DO NOT EDIT

daqStopButton <- function(children=NULL, id=NULL, size=NULL, buttonText=NULL, n_clicks=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(children=children, id=id, size=size, buttonText=buttonText, n_clicks=n_clicks, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'StopButton',
        namespace = 'dash_daq',
        propNames = c('children', 'id', 'size', 'buttonText', 'n_clicks', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}