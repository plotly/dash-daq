# AUTO GENERATED FILE - DO NOT EDIT

daqGauge <- function(id=NULL, base=NULL, className=NULL, color=NULL, digits=NULL, exceedMessage=NULL, label=NULL, labelPosition=NULL, lagingMessage=NULL, logarithmic=NULL, max=NULL, min=NULL, scale=NULL, showCurrentValue=NULL, size=NULL, style=NULL, textColor=NULL, theme=NULL, units=NULL, value=NULL) {
    
    props <- list(id=id, base=base, className=className, color=color, digits=digits, exceedMessage=exceedMessage, label=label, labelPosition=labelPosition, lagingMessage=lagingMessage, logarithmic=logarithmic, max=max, min=min, scale=scale, showCurrentValue=showCurrentValue, size=size, style=style, textColor=textColor, theme=theme, units=units, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Gauge',
        namespace = 'dash_daq',
        propNames = c('id', 'base', 'className', 'color', 'digits', 'exceedMessage', 'label', 'labelPosition', 'lagingMessage', 'logarithmic', 'max', 'min', 'scale', 'showCurrentValue', 'size', 'style', 'textColor', 'theme', 'units', 'value'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
