# AUTO GENERATED FILE - DO NOT EDIT

'daq'Knob <- function(id=NULL, className=NULL, color=NULL, digits=NULL, disabled=NULL, label=NULL, labelPosition=NULL, max=NULL, min=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, scale=NULL, showCurrentValue=NULL, size=NULL, style=NULL, textColor=NULL, theme=NULL, value=NULL) {
    
    props <- list(id=id, className=className, color=color, digits=digits, disabled=disabled, label=label, labelPosition=labelPosition, max=max, min=min, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, scale=scale, showCurrentValue=showCurrentValue, size=size, style=style, textColor=textColor, theme=theme, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Knob',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'color', 'digits', 'disabled', 'label', 'labelPosition', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'scale', 'showCurrentValue', 'size', 'style', 'textColor', 'theme', 'value'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
