# AUTO GENERATED FILE - DO NOT EDIT

daqColorPicker <- function(id=NULL, value=NULL, disabled=NULL, size=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, disabled=disabled, size=size, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ColorPicker',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'disabled', 'size', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
