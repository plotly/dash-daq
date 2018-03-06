export const colors = {
  PRIMARY: '#ABE2FB',
  SECONDARY: '#E6E6E6',
  DARKER_PRIMARY: '#87ceeb',
  OFF_WHITE: '#15181A',
  GREY: '#D3D3D3',
  RED: '#FF5E5E',
  DARK_GREY: '#535D63'
};

export const svg_shared = {};
svg_shared.SVG_WIDTH = 240;
svg_shared.CY = ~~(svg_shared.SVG_WIDTH / 2);
svg_shared.CX = ~~(svg_shared.SVG_WIDTH / 2);

svg_shared.GAUGE_RAD = 104;
svg_shared.OFFSET = 8;
svg_shared.SCALE_RAD = svg_shared.GAUGE_RAD - svg_shared.OFFSET;

svg_shared.CIRCLE_CIR = 2 * Math.PI * svg_shared.GAUGE_RAD;
svg_shared.ARC_LENGTH = 90 / 360 * (2 * Math.PI * svg_shared.GAUGE_RAD);
svg_shared.RADIAN = Math.PI / 180.0;

export const light = {
  primary: colors.PRIMARY,
  secondary: colors.SECONDARY,
  dark: false
};

export const dark = {
  primary: colors.PRIMARY,
  secondary: colors.DARK_GREY,
  dark: true
};

export default {
  dark,
  light,
  colors,
  svg_shared
};
