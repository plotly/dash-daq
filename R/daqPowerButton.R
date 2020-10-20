# AUTO GENERATED FILE - DO NOT EDIT

daqPowerButton <- function(id=NULL, on=NULL, color=NULL, size=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL, persistence=NULL, persisted_props=NULL, persistence_type=NULL) {
    
    props <- list(id=id, on=on, color=color, size=size, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style, persistence=persistence, persisted_props=persisted_props, persistence_type=persistence_type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PowerButton',
        namespace = 'dash_daq',
        propNames = c('id', 'on', 'color', 'size', 'disabled', 'theme', 'label', 'labelPosition', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
