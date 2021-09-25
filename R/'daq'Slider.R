# AUTO GENERATED FILE - DO NOT EDIT

'daq'Slider <- function(id=NULL, className=NULL, color=NULL, disabled=NULL, dots=NULL, handleLabel=NULL, included=NULL, labelPosition=NULL, marks=NULL, max=NULL, min=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, size=NULL, step=NULL, style=NULL, targets=NULL, theme=NULL, updatemode=NULL, value=NULL, vertical=NULL) {
    
    props <- list(id=id, className=className, color=color, disabled=disabled, dots=dots, handleLabel=handleLabel, included=included, labelPosition=labelPosition, marks=marks, max=max, min=min, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, size=size, step=step, style=style, targets=targets, theme=theme, updatemode=updatemode, value=value, vertical=vertical)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Slider',
        namespace = 'dash_daq',
        propNames = c('id', 'className', 'color', 'disabled', 'dots', 'handleLabel', 'included', 'labelPosition', 'marks', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'size', 'step', 'style', 'targets', 'theme', 'updatemode', 'value', 'vertical'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
