# AUTO GENERATED FILE - DO NOT EDIT

'daq'Indicator <- function(id=NULL, className=NULL, color=NULL, height=NULL, label=NULL, labelPosition=NULL, size=NULL, style=NULL, theme=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, className=className, color=color, height=height, label=label, labelPosition=labelPosition, size=size, style=style, theme=theme, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Indicator',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'color', 'height', 'label', 'labelPosition', 'size', 'style', 'theme', 'value', 'width'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
