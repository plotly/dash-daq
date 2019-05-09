# AUTO GENERATED FILE - DO NOT EDIT

daqThermometer <- function(id=NULL, value=NULL, size=NULL, color=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, value=value, size=size, color=color, min=min, max=max, base=base, logarithmic=logarithmic, showCurrentValue=showCurrentValue, units=units, theme=theme, label=label, labelPosition=labelPosition, scale=scale, className=className, style=style),
        type = 'Thermometer',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'color', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'theme', 'label', 'labelPosition', 'scale', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}