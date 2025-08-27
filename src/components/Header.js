import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { medWrapper, colors } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import HeaderNav from "./Header/Navigation/HeaderNav/HeaderNav"
import HeaderMenuTop from "./Header/Navigation/HeaderNav/HeaderMenuTop"
import MobileNav from "./Header/Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle, heroactive, location }) => {
  return (
    <HeaderStyled heroactive={heroactive} role="banner" className="site-header">
      <div className="wrapper">
        <div className="header-top-nav">
          <HeaderMenuTop />
        </div>
        <div className="headerLogo">
          <h1>
            <Link to="/">
              <MainLogo /> <span>{siteTitle}</span>
            </Link>
          </h1>
        </div>
        <div className="mainNav">
          <HeaderNav location={location} />
        </div>
      </div>
      <MobileNav />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: ${props => (props.heroactive ? "absolute" : "relative")};
  ${props => props.heroactive && "top: 0;"}
  ${props => props.heroactive && "left: 0;"}
  width: 100%;
  z-index: 500;

  .wrapper {
    ${medWrapper};
    margin-top: 0.15rem;
    padding-top: 0;
    margin-bottom: 0.15rem;
    padding-bottom: 0;
    padding: 0;
    max-width: 100% !important;
  }

  .header-top-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0;
    background: ${colors.colorAccent};
    align-self: center;
    margin: auto;
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(100%);
    }

    @media (min-width: 768px) {
      padding: 1rem 0;
    }
  }

  .headerLogo {
    align-self: center;
    margin: auto;
    padding: 2rem;
    padding-right: 5rem;
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(25%);
    }

    a {
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid #003b49;
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      max-width: 30rem;
      margin: auto;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
      }

      @media (min-width: 1025px) {
        width: calc(100% - 10rem);
      }
    }
  }

  .mainNav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    padding-right: 3rem;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(75%);
    }
  }
`

export default Header
