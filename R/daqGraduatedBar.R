# AUTO GENERATED FILE - DO NOT EDIT

daqGraduatedBar <- function(id=NULL, value=NULL, color=NULL, size=NULL, vertical=NULL, min=NULL, max=NULL, step=NULL, showCurrentValue=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, color=color, size=size, vertical=vertical, min=min, max=max, step=step, showCurrentValue=showCurrentValue, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'GraduatedBar',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'size', 'vertical', 'min', 'max', 'step', 'showCurrentValue', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}