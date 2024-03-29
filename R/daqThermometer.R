# AUTO GENERATED FILE - DO NOT EDIT

daqThermometer <- function(id=NULL, base=NULL, className=NULL, color=NULL, height=NULL, label=NULL, labelPosition=NULL, logarithmic=NULL, max=NULL, min=NULL, scale=NULL, showCurrentValue=NULL, style=NULL, theme=NULL, units=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, base=base, className=className, color=color, height=height, label=label, labelPosition=labelPosition, logarithmic=logarithmic, max=max, min=min, scale=scale, showCurrentValue=showCurrentValue, style=style, theme=theme, units=units, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Thermometer',
        namespace = 'dash_daq',
        propNames = c('id', 'base', 'className', 'color', 'height', 'label', 'labelPosition', 'logarithmic', 'max', 'min', 'scale', 'showCurrentValue', 'style', 'theme', 'units', 'value', 'width'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
