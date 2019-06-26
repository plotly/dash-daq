# AUTO GENERATED FILE - DO NOT EDIT

daqPrecisionInput <- function(id=NULL, value=NULL, size=NULL, min=NULL, max=NULL, precision=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, size=size, min=min, max=max, precision=precision, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PrecisionInput',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'size', 'min', 'max', 'precision', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
