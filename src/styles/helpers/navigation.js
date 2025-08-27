import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.2, 1.6, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorTertiary};
  }
`
export const Nav1White = `
  ${Nav1Base};
  color: ${colors.white};
`

export const Nav1Brown = `
  ${Nav1Base};
  color: ${colors.colorShad};
`

export const Nav1Gold = `
  ${Nav1Base};
  color: ${colors.colorTertiary};
`

export const Nav2Base = `
  ${fontSizer(1.2, 1.2, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorTertiary};
  }
`
