import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

const Btn1Base = css`
  ${fontSizer(1.2, 1.4, 76.8, 150, 1.6)};
  display: inline-block;
  padding: 0.5rem 2.5rem;
  border: 0.2rem solid #fff;
  border-radius: 0;
  transition: all 0.3s ease;
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1Gold = css`
  ${Btn1Base};
  background: ${colors.colorTertiary};
  border-color: ${colors.colorTertiary};
  color: ${colors.colorPrimary};

  &:hover {
    background: ${colors.colorSecondary};
    border-color: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1GoldRev = css`
  ${Btn1Base};
  background: transparent;
  border-color: ${colors.colorTertiary};
  color: ${colors.colorTertiary};

  &:hover {
    background: ${colors.colorTertiary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1White = css`
  ${Btn1Base};
  background: ${colors.white};
  color: ${colors.colorPrimary};

  &:hover {
    background: ${colors.greyMed};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.greyMed};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1LightBlue = css`
  ${Btn1Base};
  background: ${colors.colorSecondary};
  color: ${colors.white};
  font-weight: normal;

  &:hover {
    background: ${colors.greyMed};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.greyMed};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1Brown = css`
  ${Btn1Base};
  background: transparent;
  border-color: ${colors.colorShad};
  color: ${colors.colorShad};

  &:hover {
    background: ${colors.colorPrimary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.greyMed};
      color: ${colors.colorPrimary};
    }
  }
`
