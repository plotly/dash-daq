# AUTO GENERATED FILE - DO NOT EDIT

daqToggleSwitch <- function(id=NULL, value=NULL, size=NULL, color=NULL, vertical=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, size=size, color=color, vertical=vertical, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'ToggleSwitch',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'color', 'vertical', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}