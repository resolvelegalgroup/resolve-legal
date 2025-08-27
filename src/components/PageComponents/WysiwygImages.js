import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H1Brown, medWrapper } from "../../styles/helpers"

import Wysiwyg from "./Wysiwyg"

const WysiwygImages = ({ data }) => {
  return (
    <WysiwygImagesStyled>
      <div className="wrapper">
        <div className="images">
          {data.sideImages.map((image, index) => {
            const imageDisplay = getImage(
              image.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = image.image.altText
            return (
              <div className="images__image" key={index}>
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </div>
            )
          })}
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{data.title}</h2>
          </div>
          <div className="content__content">
            <Wysiwyg fontsize="small" data={{ wysiwyg: data.wysiwyg }} />
          </div>
        </div>
      </div>
    </WysiwygImagesStyled>
  )
}

const WysiwygImagesStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .images {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 4rem);
      margin-right: 4rem;
    }

    &__image {
      margin-bottom: 2rem;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__title {
      h2 {
        ${H1Brown};
      }
    }

    &__content {
    }
  }
`

export default WysiwygImages
