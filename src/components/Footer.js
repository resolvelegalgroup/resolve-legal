import React from "react"
import styled from "styled-components"
import { BigWrapper, colors } from "../styles/helpers"

import LetsTalk from "./Footer/LetsTalk"
import MainContent from "./Footer/MainContent"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapper">
        <LetsTalk />
        <MainContent />
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      ${colors.colorTertiary} 20%,
      ${colors.colorPrimary} 20%,
      ${colors.colorPrimary} 100%
    );
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: auto;

    @media (min-width: 768px) {
      ${BigWrapper};
      margin: 0 auto;
      padding: 0 2rem;
    }
  }
`

export default Footer
