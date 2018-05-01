export const colors = {
  PRIMARY: '#ABE2FB',
  SECONDARY: '#E6E6E6',
  DARKER_PRIMARY: '#87ceeb',
  OFF_WHITE: '#15181A',
  GREY: '#D3D3D3',
  RED: '#FF5E5E',
  DARK_GREY: '#535D63'
};

export const TRACK_TOTAL_DEG = 270.0;

export const RADIAN = Math.PI / 180.0;

export const light = {
  primary: colors.PRIMARY,
  secondary: colors.SECONDARY,
  detail: colors.GREY,
  dark: false
};

export const dark = {
  primary: colors.PRIMARY,
  secondary: colors.DARK_GREY,
  detail: colors.DARK_GREY,
  dark: true
};

export default {
  dark,
  light,
  colors
};
