# AUTO GENERATED FILE - DO NOT EDIT

daqJoystick <- function(id=NULL, disabled=NULL, angle=NULL, force=NULL, size=NULL, theme=NULL, label=NULL, labelPosition=NULL, className=NULL, style=NULL) {
    
    component <- list(
        props = list(id=id, disabled=disabled, angle=angle, force=force, size=size, theme=theme, label=label, labelPosition=labelPosition, className=className, style=style),
        type = 'Joystick',
        namespace = 'dash_daq',
        propNames = c('id', 'disabled', 'angle', 'force', 'size', 'theme', 'label', 'labelPosition', 'className', 'style'),
        package = 'dashDaq'
        )

    component$props <- filter_null(component$props)

    structure(component, class = c('dash_component', 'list'))
}