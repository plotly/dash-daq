# AUTO GENERATED FILE - DO NOT EDIT

daqKnob <- function(id=NULL, value=NULL, color=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, color=color, size=size, min=min, max=max, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, scale=scale, className=className, style=style),
        type = 'Knob',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'scale', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}