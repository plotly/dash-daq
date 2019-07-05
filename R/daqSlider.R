# AUTO GENERATED FILE - DO NOT EDIT

daqSlider <- function(id=NULL, marks=NULL, color=NULL, value=NULL, className=NULL, labelPosition=NULL, disabled=NULL, dots=NULL, included=NULL, min=NULL, max=NULL, step=NULL, vertical=NULL, size=NULL, targets=NULL, theme=NULL, handleLabel=NULL, updatemode=NULL) {
    
    props <- list(id=id, marks=marks, color=color, value=value, className=className, labelPosition=labelPosition, disabled=disabled, dots=dots, included=included, min=min, max=max, step=step, vertical=vertical, size=size, targets=targets, theme=theme, handleLabel=handleLabel, updatemode=updatemode)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Slider',
        namespace = 'dash_daq',
        propNames = c('id', 'marks', 'color', 'value', 'className', 'labelPosition', 'disabled', 'dots', 'included', 'min', 'max', 'step', 'vertical', 'size', 'targets', 'theme', 'handleLabel', 'updatemode'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
