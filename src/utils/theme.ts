import { COLOR_PALLETE } from "@/constant";

///////////////////////////////////////////////////////////////////////////
// Color Pallete
///////////////////////////////////////////////////////////////////////////

export const getColorVariable = (colorKeyName: keyof typeof COLOR_PALLETE) => {
  const formattedColorAttributeKey = colorKeyName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return `--${formattedColorAttributeKey}`;
};

export const getColorPallete = () => {
  return Object.keys(COLOR_PALLETE).reduce((result, colorAttribute) => {
    const colorKey = colorAttribute as keyof typeof COLOR_PALLETE;

    return {
      ...result,
      [getColorVariable(colorKey)]: COLOR_PALLETE[colorKey],
    };
  }, {});
};
