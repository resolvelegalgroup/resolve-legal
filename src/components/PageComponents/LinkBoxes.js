import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colors,
  fonts,
  H3Gold,
  H4IntroGold,
  standardWrapper,
  B2Gold,
} from "../../styles/helpers"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const LinkBoxes = ({ data }) => {
  return (
    <LinkBoxesSection>
      <div className="wrapper">
        {data.boxes.map((box, index) => {
          const imageDisplay = getImage(
            box.icon.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = box.icon.altText
          return (
            <Box to={`/${box.slug}`} key={index}>
              <div className="icon">
                <div className="icon__inner">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
              </div>
              <div className="titles">
                <h2>{box.title}</h2>
                <h3>{box.subTitle}</h3>
                <p>
                  Learn More <span>&#x3e;</span>
                </p>
              </div>
            </Box>
          )
        })}
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </LinkBoxesSection>
  )
}

const LinkBoxesSection = styled.section`
  position: relative;
  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Box = styled(Link)`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 4rem 3rem;
  background-color: ${colors.colorAccent};

  @media (min-width: 768px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
    padding: 4rem 3rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
    padding: 4rem 3rem;
  }

  .icon {
    width: 100%;

    &__inner {
      max-width: 6.5rem;
      margin: 2rem auto;

      @media (min-width: 768px) {
        max-width: 4.5rem;
        height: 5rem;
        margin: 2rem auto;
      }
    }
  }

  .titles {
    width: 100%;
    border-top: 0.2rem solid ${colors.colorTertiary};
    text-align: center;

    @media (min-width: 768px) {
      padding-bottom: 5rem;
    }

    h2 {
      ${H4IntroGold};
      margin-top: 3.75rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    h3 {
      ${H3Gold};
      margin: 0;
      font-family: ${fonts.fontSecondary};
      font-weight: normal;
    }

    p {
      ${B2Gold};
      margin: 0;

      @media (min-width: 768px) {
        position: absolute;
        right: 0;
        bottom: 2rem;
        left: 0;
      }
    }
  }
`

export default LinkBoxes
