import { Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  H1Brown,
  medWrapper,
  colors,
  H2Gold,
  fonts,
} from "../../styles/helpers"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const ImageLinks = ({ data }) => {
  return (
    <ImageLinksSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="links">
          {data.links.map((link, index) => {
            const imageDisplay = getImage(
              link.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = link.image.altText
            return (
              <Column to={`/${link.slug}`} key={index}>
                <div className="col-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
                <div className="col-title">
                  <h3>{link.title}</h3>
                </div>
              </Column>
            )
          })}
        </div>
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </ImageLinksSection>
  )
}

const ImageLinksSection = styled.section`
  position: relative;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Brown};
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .graphic {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
`

const Column = styled(Link)`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    width: calc(33.333333% - 2rem);
    margin: 2rem 1rem;
  }

  .col-title {
    position: relative;
    width: calc(100% - 4rem);
    margin: auto 2rem;
    margin-top: -5rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;
    z-index: 100;

    h3 {
      ${H2Gold};
      margin: 0;
      padding: 0;
      font-family: ${fonts.fontSecondary};
    }
  }
`
export default ImageLinks
