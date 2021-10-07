# AUTO GENERATED FILE - DO NOT EDIT

daqPowerButton <- function(id=NULL, className=NULL, color=NULL, disabled=NULL, label=NULL, labelPosition=NULL, offButtonStyle=NULL, on=NULL, onButtonStyle=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, size=NULL, style=NULL, theme=NULL) {
    
    props <- list(id=id, className=className, color=color, disabled=disabled, label=label, labelPosition=labelPosition, offButtonStyle=offButtonStyle, on=on, onButtonStyle=onButtonStyle, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, size=size, style=style, theme=theme)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PowerButton',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'color', 'disabled', 'label', 'labelPosition', 'offButtonStyle', 'on', 'onButtonStyle', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'theme'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
