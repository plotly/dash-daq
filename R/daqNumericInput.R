# AUTO GENERATED FILE - DO NOT EDIT

daqNumericInput <- function(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, size=size, min=min, max=max, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'NumericInput',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}