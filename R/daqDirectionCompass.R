# AUTO GENERATED FILE - DO NOT EDIT

daqDirectionCompass <- function(id=NULL, direction=NULL, label=NULL, labelPosition=NULL, showCurrentValue=NULL, size=NULL, theme=NULL) {
    
    props <- list(id=id, direction=direction, label=label, labelPosition=labelPosition, showCurrentValue=showCurrentValue, size=size, theme=theme)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DirectionCompass',
        namespace = 'dash_daq',
        propNames = c('id', 'direction', 'label', 'labelPosition', 'showCurrentValue', 'size', 'theme'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
