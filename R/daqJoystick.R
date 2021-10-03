# AUTO GENERATED FILE - DO NOT EDIT

<<<<<<< HEAD:R/'daq'Joystick.R
'daq'Joystick <- function(id=NULL, angle=NULL, className=NULL, force=NULL, label=NULL, labelPosition=NULL, size=NULL, style=NULL, theme=NULL) {
=======
daqJoystick <- function(id=NULL, angle=NULL, className=NULL, disabled=NULL, force=NULL, label=NULL, labelPosition=NULL, size=NULL, style=NULL, theme=NULL) {
>>>>>>> 90ce453233efc481b665d1e18c22dbab7aae8a8c:R/daqJoystick.R
    
    props <- list(id=id, angle=angle, className=className, force=force, label=label, labelPosition=labelPosition, size=size, style=style, theme=theme)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Joystick',
        namespace = 'dash_daq',
        propNames = c('id', 'angle', 'className', 'force', 'label', 'labelPosition', 'size', 'style', 'theme'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
