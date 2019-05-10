# AUTO GENERATED FILE - DO NOT EDIT

daqGauge <- function(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, color=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, size=size, min=min, max=max, base=base, logarithmic=logarithmic, showCurrentValue=showCurrentValue, units=units, theme=theme, label=label, labelPosition=labelPosition, scale=scale, color=color, className=className, style=style),
        type = 'Gauge',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'theme', 'label', 'labelPosition', 'scale', 'color', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}