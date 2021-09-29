# AUTO GENERATED FILE - DO NOT EDIT

'daq'StopButton <- function(children=NULL, id=NULL, buttonText=NULL, className=NULL, disabled=NULL, label=NULL, labelPosition=NULL, n_clicks=NULL, size=NULL, style=NULL, theme=NULL) {
    
    props <- list(children=children, id=id, buttonText=buttonText, className=className, disabled=disabled, label=label, labelPosition=labelPosition, n_clicks=n_clicks, size=size, style=style, theme=theme)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StopButton',
        namespace = 'dash_daq',
        propNames = c('children', 'id', 'buttonText', 'className', 'disabled', 'label', 'labelPosition', 'n_clicks', 'size', 'style', 'theme'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
