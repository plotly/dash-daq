# AUTO GENERATED FILE - DO NOT EDIT

daqGraduatedBar <- function(id=NULL, className=NULL, color=NULL, label=NULL, labelPosition=NULL, max=NULL, min=NULL, showCurrentValue=NULL, size=NULL, step=NULL, style=NULL, theme=NULL, value=NULL, vertical=NULL) {
    
    props <- list(id=id, className=className, color=color, label=label, labelPosition=labelPosition, max=max, min=min, showCurrentValue=showCurrentValue, size=size, step=step, style=style, theme=theme, value=value, vertical=vertical)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GraduatedBar',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'color', 'label', 'labelPosition', 'max', 'min', 'showCurrentValue', 'size', 'step', 'style', 'theme', 'value', 'vertical'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
