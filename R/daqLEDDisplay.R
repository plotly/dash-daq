# AUTO GENERATED FILE - DO NOT EDIT

daqLEDDisplay <- function(id=NULL, backgroundColor=NULL, className=NULL, color=NULL, label=NULL, labelPosition=NULL, size=NULL, style=NULL, theme=NULL, value=NULL) {
    
    props <- list(id=id, backgroundColor=backgroundColor, className=className, color=color, label=label, labelPosition=labelPosition, size=size, style=style, theme=theme, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LEDDisplay',
        namespace = 'dash_daq',
        propNames = c('id', 'backgroundColor', 'className', 'color', 'label', 'labelPosition', 'size', 'style', 'theme', 'value'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
