# AUTO GENERATED FILE - DO NOT EDIT

daqLEDDisplay <- function(id=NULL, value=NULL, color=NULL, backgroundColor=NULL, size=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    props <- list(id=id, value=value, color=color, backgroundColor=backgroundColor, size=size, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LEDDisplay',
        namespace = 'dash_daq',
        propNames = c('id', 'value', 'color', 'backgroundColor', 'size', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
