import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ElementTag from "../../utils/ElementTag"
import { B1Brown, colors, H1Brown, medWrapper } from "../../styles/helpers"

const TitleThree = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <TitleThreeStyled>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
        </div>
        <div className="title">
          <div className="title__inner">{mainTitleDisplay}</div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </div>
    </TitleThreeStyled>
  )
}

const TitleThreeStyled = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    position: relative;
    align-items: center;

    &::after {
      position: absolute;
      right: 15%;
      bottom: -4rem;
      left: 15%;
      height: 0.2rem;
      background-color: ${colors.colorTertiary};
      content: "";
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(20%);
    }
  }

  .title {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80% - 8rem);
      margin-left: 8rem;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
    }

    p {
      ${B1Brown};

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

export default TitleThree
