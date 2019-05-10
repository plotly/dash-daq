# AUTO GENERATED FILE - DO NOT EDIT

daqPowerButton <- function(id=NULL, on=NULL, color=NULL, size=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, on=on, color=color, size=size, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'PowerButton',
        namespace = 'dash_daq',
        propNames = c('id', 'on', 'color', 'size', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}