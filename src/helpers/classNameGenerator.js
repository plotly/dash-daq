import { omit } from 'ramda';

export const getClassName = (componentName, theme) => {
  return 'daq-' + componentName + (theme && theme.dark ? '--dark' : '--light');
};

export const getFilteredProps = props => omit(['className', 'id', 'setProps'], props);
