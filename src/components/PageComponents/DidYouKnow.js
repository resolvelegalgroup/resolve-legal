import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import DidYouKnowSlider from "./DidYouKnowSlider"

const getData = graphql`
  {
    didYouKnows: allWpDidYouKnow {
      edges {
        node {
          title
          didYouKnow {
            content
          }
        }
      }
    }
  }
`

const DidYouKnow = ({ data }) => {
  const dykData = useStaticQuery(getData)
  const didYouKnows = dykData.didYouKnows.edges
  if (!data.displayDidYouKnow) return null
  const heroImage = getImage(
    data.didYouKnowImage.localFile.childImageSharp.gatsbyImageData
  )

  return (
    <DidYouKnowSection>
      <div>
        <DidYouKnowSlider didYouKnows={didYouKnows} />
      </div>
      <div className="bgImage">
        <GatsbyImage
          image={heroImage}
          alt="Hero background"
          style={{ height: "100%" }}
        />
      </div>
    </DidYouKnowSection>
  )
}

const DidYouKnowSection = styled.section`
  position: relative;

  @media (min-width: 768px) {
    height: 65rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
  }

  .bgImage {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    @media (min-width: 768px) {
      width: 70%;
    }

    div {
      width: 100%;
      height: 100%;
    }
  }
`

export default DidYouKnow
