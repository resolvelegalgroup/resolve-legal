import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ElementTag from "../../utils/ElementTag"
import { BigWrapper, Btn1GoldRev, colors, H1Brown } from "../../styles/helpers"

import Wysiwyg from "./Wysiwyg"
import { Link } from "gatsby"

const TitleFour = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  return (
    <TitleFourStyled>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
        </div>
        <div className="title">
          <div className="title__inner">{mainTitleDisplay}</div>
          <div className="title__content">
            <Wysiwyg fontsize="small" data={{ wysiwyg: data.content }} />
          </div>
          {data.buttonRequired && (
            <div className="buttons">
              {data.buttonPhoneNumber ? (
                <a href={`tel:+1-${data.buttonSlug}`}>{data.buttonText}</a>
              ) : (
                <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
              )}
              {data.secondButton && (
                <Link to={`/${data.secondButtonSlug}`}>
                  {data.secondButtonText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </TitleFourStyled>
  )
}

const TitleFourStyled = styled.section`
  .wrapper {
    ${BigWrapper};
    align-items: center;
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(35%);
    }
  }

  .title {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(65% - 4rem);
      margin-left: 4rem;
    }

    &__content {
      @media (min-width: 1025px) {
        max-width: 60rem;
        margin-right: auto;
      }
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__inner {
      border-top: solid 0.2rem ${colors.colorTertiary};
    }
  }

  .buttons {
    width: 100%;

    a {
      ${Btn1GoldRev};
      min-width: 25rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        margin: 0 2rem;

        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
`

export default TitleFour
