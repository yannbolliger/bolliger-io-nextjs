export const breakpoints = {
  mobile: "640px",
  medium: "950px",
}

export const baseFontSize = 18 // in pixel

export const baseUnits = (factor: number) => {
  const remToUnitFactor = 2.7777777777
  const roundedToHalfPixel =
    Math.round(factor * remToUnitFactor * baseFontSize * 2) / 2.0

  return `${roundedToHalfPixel}px`
}

export const borderWidth = "3px"
export const borders = (active: boolean) =>
  active ? `solid ${colors.borderColor} ${borderWidth}` : `none`

export const colors = {
  textColor: "#000",
  borderColor: "#000",
  primary: "#FF9500",
  primaryLight: "#FFE4BD",
  secondary: "#C9D4D6",
  secondaryLight: "#E3EAEB",
}
