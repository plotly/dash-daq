export const longestString = arr =>
  arr.sort(function(a, b) {
    return b.length - a.length;
  })[0];

export default {
  longestString
};
