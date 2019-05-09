# AUTO GENERATED FILE - DO NOT EDIT

daqIndicator <- function(id=NULL, value=NULL, color=NULL, size=NULL, width=NULL, height=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, color=color, size=size, width=width, height=height, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'Indicator',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'size', 'width', 'height', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}