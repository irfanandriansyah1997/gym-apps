export const capitalizeFirstLetter = (text?: string): string => {
  if (!text) return "";

  return text.split(" ").reduce((result, currentText) => {
    if (currentText) {
      return [
        result,
        currentText[0].toUpperCase() + currentText.slice(1).toLowerCase(),
      ].join(" ");
    }

    return result;
  }, "");
};
