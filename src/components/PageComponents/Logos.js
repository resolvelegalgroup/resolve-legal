import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { fonts, H2Brown, standardWrapper } from "../../styles/helpers"

const Logos = ({ data }) => {
  return (
    <LogosSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="logos">
          {data.logos.map((logo, index) => {
            const imageDisplay = getImage(
              logo.logo.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = logo.logo.altText
            return (
              <Logo key={index}>
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </Logo>
            )
          })}
        </div>
      </div>
    </LogosSection>
  )
}

const LogosSection = styled.section`
  .wrapper {
    ${standardWrapper}
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Brown};
      font-family: ${fonts.fontSecondary};
    }
  }

  .logos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 4rem 0;
  }
`

const Logo = styled.div`
  width: calc((100% / 2) - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc((100% / 4) - 5rem);
    margin: 2.5rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 6) - 2rem);
    margin: 1rem;
  }
`

export default Logos
