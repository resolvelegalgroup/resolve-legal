import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

import BgGraphicOne from "./Graphics/BgGraphicOne"
import { colors } from "../styles/helpers"

const Layout = ({ children, pagestyles, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          heroactive={pagestyles?.acfPageStyles?.heroImageTop}
          siteTitle={data.site.siteMetadata?.title || `Title`}
          location={location}
        />
        <MainStyled sidestripe={pagestyles?.acfPageStyles?.sideStripe}>
          {children}
          {pagestyles?.acfPageStyles?.backgroundGraphicActive && (
            <div className="bg-graphic">
              <BgGraphicOne />
            </div>
          )}
          {pagestyles?.acfPageStyles?.sideStripe && (
            <div className="bg-stripe" />
          )}
        </MainStyled>
        <Footer />
      </ThemeProvider>
    </>
  )
}

const MainStyled = styled.main`
  position: relative;

  .bg-graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .bg-stripe {
    display: none;
    position: absolute;
    top: 50rem;
    right: 0;
    bottom: 50rem;
    width: 10rem;
    background-color: ${colors.colorAccent};
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1025px) {
    }

    @media (min-width: 1200px) {
    }

    @media (min-width: 1300px) {
    }
  }
`

export default Layout
