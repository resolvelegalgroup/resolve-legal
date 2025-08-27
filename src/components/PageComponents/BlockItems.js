import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H2Brown, standardWrapper, fonts } from "../../styles/helpers"

import Wysiwyg from "./Wysiwyg"

const BlockItems = ({ data }) => {
  return (
    <BlockItemsSection>
      <div className="wrapper">
        {data.blockItems.map((block, index) => {
          const imageDisplay = getImage(
            block.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = block.image.altText
          return (
            <Block key={index}>
              <div className="image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </div>
              <div className="title">
                <h2>{block.title}</h2>
              </div>
              <div className="content">
                <Wysiwyg fontsize="small" data={{ wysiwyg: block.content }} />
              </div>
            </Block>
          )
        })}
      </div>
    </BlockItemsSection>
  )
}

const BlockItemsSection = styled.section`
  padding: 5rem 0 0 0;

  .wrapper {
    ${standardWrapper};
  }
`

const Block = styled.div`
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc((100% / 2) - 4rem);
    margin: 1rem 2rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 4) - 6rem);

    margin: 1rem 3rem;
  }

  .image {
    max-height: 18rem;
    overflow: hidden;
  }

  .title {
    margin-top: 2.5rem;

    h2 {
      ${H2Brown};
      margin: 0;
      font-family: ${fonts.fontSecondary};
    }
  }

  .content {
    .wysiwygContent {
      margin-top: 1rem;
    }
  }
`

export default BlockItems
