# AUTO GENERATED FILE - DO NOT EDIT

daqJoystick <- function(id=NULL, angle=NULL, className=NULL, force=NULL, label=NULL, labelPosition=NULL, lockX=NULL, lockY=NULL, size=NULL, style=NULL, theme=NULL) {
    
    props <- list(id=id, angle=angle, className=className, force=force, label=label, labelPosition=labelPosition, lockX=lockX, lockY=lockY, size=size, style=style, theme=theme)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Joystick',
        namespace = 'dash_daq',
        propNames = c('id', 'angle', 'className', 'force', 'label', 'labelPosition', 'lockX', 'lockY', 'size', 'style', 'theme'),
        package = 'dashDaq'
        )

    structure(component, class = c('dash_component', 'list'))
}
