# AUTO GENERATED FILE - DO NOT EDIT

daqNumericInput <- function(id=NULL, className=NULL, disabled=NULL, label=NULL, labelPosition=NULL, max=NULL, min=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, size=NULL, style=NULL, theme=NULL, value=NULL) {
    
    props <- list(id=id, className=className, disabled=disabled, label=label, labelPosition=labelPosition, max=max, min=min, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, size=size, style=style, theme=theme, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NumericInput',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'disabled', 'label', 'labelPosition', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'theme', 'value'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
