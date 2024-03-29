# AUTO GENERATED FILE - DO NOT EDIT

daqTank <- function(id=NULL, base=NULL, className=NULL, color=NULL, currentValueStyle=NULL, exceedMessage=NULL, height=NULL, label=NULL, labelPosition=NULL, lagingMessage=NULL, logarithmic=NULL, max=NULL, min=NULL, scale=NULL, showCurrentValue=NULL, style=NULL, textColor=NULL, theme=NULL, units=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, base=base, className=className, color=color, currentValueStyle=currentValueStyle, exceedMessage=exceedMessage, height=height, label=label, labelPosition=labelPosition, lagingMessage=lagingMessage, logarithmic=logarithmic, max=max, min=min, scale=scale, showCurrentValue=showCurrentValue, style=style, textColor=textColor, theme=theme, units=units, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tank',
        namespace = 'dash_daq',
        propNames = c('id', 'base', 'className', 'color', 'currentValueStyle', 'exceedMessage', 'height', 'label', 'labelPosition', 'lagingMessage', 'logarithmic', 'max', 'min', 'scale', 'showCurrentValue', 'style', 'textColor', 'theme', 'units', 'value', 'width'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
