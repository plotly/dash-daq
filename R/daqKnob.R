# AUTO GENERATED FILE - DO NOT EDIT

daqKnob <- function(id=NULL, value=NULL, color=NULL, size=NULL, min=NULL, max=NULL, disabled=NULL, theme=NULL, label=NULL, labelPosition=NULL, scale=NULL, className=NULL, style=NULL, persistence=NULL, persisted_props=NULL, persistence_type=NULL) {
    
    props <- list(id=id, value=value, color=color, size=size, min=min, max=max, disabled=disabled, theme=theme, label=label, labelPosition=labelPosition, scale=scale, className=className, style=style, persistence=persistence, persisted_props=persisted_props, persistence_type=persistence_type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Knob',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'size', 'min', 'max', 'disabled', 'theme', 'label', 'labelPosition', 'scale', 'className', 'style', 'persistence', 'persisted_props', 'persistence_type'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
