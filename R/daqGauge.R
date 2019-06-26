# AUTO GENERATED FILE - DO NOT EDIT

daqGauge <- function(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, color=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, size=size, min=min, max=max, base=base, logarithmic=logarithmic, showCurrentValue=showCurrentValue, units=units, theme=theme, label=label, labelPosition=labelPosition, scale=scale, color=color, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Gauge',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'theme', 'label', 'labelPosition', 'scale', 'color', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
