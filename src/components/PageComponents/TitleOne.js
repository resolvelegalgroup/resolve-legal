import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ElementTag from "../../utils/ElementTag"
import { BigWrapper, colors, H1Brown } from "../../styles/helpers"

const TitleOne = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <TitleOneStyled>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
        </div>
        <div className="title">
          <div className="title__inner">{mainTitleDisplay}</div>
        </div>
      </div>
    </TitleOneStyled>
  )
}

const TitleOneStyled = styled.section`
  .wrapper {
    ${BigWrapper};
    align-items: center;
    padding: 0;
  }

  .image {
    width: calc(100%);
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(35%);
      margin-bottom: 0;
    }
  }

  .title {
    width: calc(100%);
    padding-left: 2rem;

    @media (min-width: 768px) {
      width: calc(65% - 4rem);
      margin-left: 4rem;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
    }

    &__inner {
      border-top: solid 0.2rem ${colors.colorTertiary};
      padding-bottom: 5rem;
    }
  }
`

export default TitleOne
