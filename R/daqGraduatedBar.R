# AUTO GENERATED FILE - DO NOT EDIT

daqGraduatedBar <- function(id=NULL, value=NULL, color=NULL, size=NULL, vertical=NULL, min=NULL, max=NULL, step=NULL, showCurrentValue=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, color=color, size=size, vertical=vertical, min=min, max=max, step=step, showCurrentValue=showCurrentValue, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GraduatedBar',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'size', 'vertical', 'min', 'max', 'step', 'showCurrentValue', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
