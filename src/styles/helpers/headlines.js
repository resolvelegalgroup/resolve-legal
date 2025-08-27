import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3, 4.5, 76.8, 150, 3.0)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
`
export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Gold = css`
  ${H1Base};
  color: ${colors.colorTertiary};
`

export const H1Brown = css`
  ${H1Base};
  color: ${colors.colorShad};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.2, 2.8, 76.8, 150, 2.2)}
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
`

export const H2Gold = css`
  ${H2Base};
  color: ${colors.colorTertiary};
`

export const H2Brown = css`
  ${H2Base};
  color: ${colors.colorShad};
`
export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2, 2.2, 76.8, 150, 2)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`
export const H3Brown = css`
  ${H3Base};
  color: ${colors.colorShad};
`
export const H3Gold = css`
  ${H3Base};
  color: ${colors.colorTertiary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 160, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
`

export const H4IntroGold = css`
  ${H4Base};
  color: ${colors.colorTertiary};
`

// Headline Styles #5 //
export const HCalloutBase = css`
  ${fontSizer(2.4, 3.4, 76.8, 160, 2.2)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
`

// Headline Styles #6 //
export const HIntroBase = css`
  ${fontSizer(2, 2.2, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
`
