const { lighten, darken } = require("polished");

// Theme
// =============================================================================
module.exports.colorGreen = "#57bd84";
module.exports.colorGreenHighlight = lighten(0.05, module.exports.colorGreen);
module.exports.colorGreenShadow = darken(0.05, module.exports.colorGreen);
module.exports.colorRed = "#d0031c";
module.exports.colorBlack = "#000";
module.exports.colorWhite = "#fff";
module.exports.colorGreyDark = "#2f2f2f";
module.exports.colorGreyMedium = "#828282";
module.exports.colorGreyLight = "#ebebeb";
module.exports.colorGreyWarm = "#9b9b9b";

// Page
// =============================================================================
module.exports.colorPageText = module.exports.colorWhite;
module.exports.colorPageLinks = "inherit";
module.exports.colorPageBackground = module.exports.colorGreen;
module.exports.colorImageBackground = "#e8e8e8";

// Accesibility
// =============================================================================
module.exports.colorFocus = "#6cc6ee";
module.exports.colorSelect = "#e5e5e5";

// Opacity
// =============================================================================
module.exports.colorWhiteOpacity01 = "rgba(255, 255, 255, 0.1)";
module.exports.colorBlackOpacity01 = "rgba(0, 0, 0, 0.1)";

// Themes
// =============================================================================
module.exports.themes = {
  dark: {
    colorTheme: module.exports.colorGreyDark,
    colorText: module.exports.colorWhite,
    colorSprout: module.exports.colorGreen,
    colorSproutLinkHover: module.exports.colorWhite,
    colorOutline: module.exports.colorGreen
  },
  white: {
    colorTheme: module.exports.colorWhite,
    colorText: module.exports.colorGreyDark,
    colorLink: module.exports.colorGreen,
    colorSprout: module.exports.colorGreyDark,
    colorSproutLinkHover: module.exports.colorGreyWarm,
    colorOutline: module.exports.colorGreen
  },
  green: {
    colorTheme: module.exports.colorGreen,
    colorText: module.exports.colorWhite,
    colorSprout: module.exports.colorWhite,
    colorSproutLinkHover: module.exports.colorBlack,
    colorOutline: module.exports.colorWhite
  },
  green2: {
    colorTheme: module.exports.colorGreen,
    colorText: module.exports.colorWhite,
    colorLink: module.exports.colorBlack,
    colorSprout: module.exports.colorWhite,
    colorSproutLinkHover: module.exports.colorBlack,
    colorOutline: module.exports.colorWhite
  },
  grey: {
    colorTheme: module.exports.colorGreyLight,
    colorText: module.exports.colorGreyDark,
    colorSprout: module.exports.colorGreyDark,
    colorSproutLinkHover: module.exports.colorGreyWarm,
    colorOutline: module.exports.colorGreen
  },
  lightgrey: {
    colorTheme: module.exports.colorGreyLight,
    colorText: module.exports.colorGreyDark,
    colorSprout: module.exports.colorGreyLight,
    colorSproutLinkHover: module.exports.colorGreen,
    colorOutline: module.exports.colorGreen
  }
};
