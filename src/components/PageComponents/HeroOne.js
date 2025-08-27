import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Btn1GoldRev, H1Gold, H4IntroGold } from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"
import MainLogoWhite from "../Logos/MainLogoWhite"

const HeroOne = ({ data }) => {
  const heroImage = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)

  return (
    <HeroSectionOneStyled logodisplay={data.logoDisplay}>
      <div className="heroContent">
        <div className="heroContent__inner">
          {data.logoDisplay && (
            <div className="main-logo">
              <MainLogoWhite />
            </div>
          )}
          <div className="hero-titles">
            {data.subTitleDisplay && <p>{data.subTitle}</p>}
            {mainTitleDisplay}
          </div>
          {data.buttonRequired && (
            <div className="links-btns">
              <div>
                <Link to={`/${data.buttonOneSlug}`}>{data.buttonOneText}</Link>
              </div>
              {data.secondButtonRequired && (
                <div>
                  <Link to={`/${data.secondButtonSlug}`}>
                    {data.secondButtonText}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="heroImage">
        <GatsbyImage
          image={heroImage}
          alt="Hero background"
          style={{ height: "100%" }}
        />
      </div>
      <div className="overlay" />
    </HeroSectionOneStyled>
  )
}

const HeroSectionOneStyled = styled.div`
  position: relative;
  height: auto;
  padding-top: 40rem;
  overflow: hidden;

  @media (min-width: 550px) {
    height: auto;
  }

  @media (min-width: 650px) {
    height: auto;
  }

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 800px) {
    height: 50rem;
  }

  @media (min-width: 1025px) {
    height: 60rem;
  }

  @media (min-width: 1100px) {
    height: 65rem;
  }

  @media (min-width: 1200px) {
    height: 75rem;
  }

  .heroContent {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: #122a41;
    z-index: 100;

    @media (min-width: 768px) {
      position: absolute;
      top: 20rem;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      padding: 2.5rem;
      background: transparent;
    }

    @media (min-width: 1025px) {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &__inner {
      width: 100%;
      max-width: 68rem;
      padding: 5rem 2rem 2rem 2rem;
      text-align: center;

      @media (min-width: 768px) {
        padding: 2rem;
      }

      .main-logo {
        display: none;
        max-width: 45rem;
        margin: 2rem auto;

        @media (min-width: 1025px) {
          display: block;
        }
      }

      .hero-titles {
        p {
          ${H4IntroGold};
          margin: 0;
          text-transform: uppercase;
        }
      }

      h1,
      h2,
      h3,
      h4 {
        ${H1Gold};
        margin-top: 0;
      }

      .links-btns {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin-top: 5rem;

        a {
          ${Btn1GoldRev};
          margin-right: 1rem;
          margin-bottom: 2.5rem;
          margin-left: 1rem;
          min-width: 25rem;

          @media (min-width: 768px) {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .heroImage {
    position: absolute;
    top: 15rem;
    left: 0;
    width: 100%;
    height: 25rem;
    z-index: 1;

    @media (min-width: 700px) {
      height: 30rem;
    }

    @media (min-width: 768px) {
      top: 4.5rem;
      left: 0;
      width: 100%;
      height: 100%;
    }

    div {
      width: 100%;
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #fff 0%,
      rgba(128, 128, 128, 1) 15%,
      #122a41 35%,
      #122a41 100%
    );
    opacity: 0.75;
    z-index: 2;
  }
`

export default HeroOne
