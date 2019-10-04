# AUTO GENERATED FILE - DO NOT EDIT

daqTank <- function(id=NULL, value=NULL, height=NULL, width=NULL, color=NULL, min=NULL, max=NULL, base=NULL, logarithmic=NULL, showCurrentValue=NULL, units=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, height=height, width=width, color=color, min=min, max=max, base=base, logarithmic=logarithmic, showCurrentValue=showCurrentValue, units=units, label=label, labelPosition=labelPosition, scale=scale, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tank',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'height', 'width', 'color', 'min', 'max', 'base', 'logarithmic', 'showCurrentValue', 'units', 'label', 'labelPosition', 'scale', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
