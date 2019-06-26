# AUTO GENERATED FILE - DO NOT EDIT

daqNumericInput <- function(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, size=size, min=min, max=max, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NumericInput',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
