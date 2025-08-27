import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotoGallery = ({ data }) => {
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    // Generate random sizes client-side only
    const generated = data.gallery.map(() => ({
      width: Math.floor(Math.random() * 4) + 1,
      height: Math.floor(Math.random() * 4) + 1,
    }))
    setSizes(generated)
  }, [data.gallery])

  return (
    <PhotoGallerySection>
      <div className="wrapper">
        <div className="galley-wrap">
          {data.gallery.map((photo, idx) => {
            const imageDisplay = getImage(
              photo.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = photo.altText
            const size = sizes[idx] || { width: 1, height: 1 } // placeholder until useEffect runs
            return (
              <GalleryImage
                key={idx}
                className="item"
                rndwidth={size.width}
                rndheight={size.height}
              >
                <div className="image-wrapper">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
              </GalleryImage>
            )
          })}
        </div>
      </div>
    </PhotoGallerySection>
  )
}

const PhotoGallerySection = styled.div`
  .wrapper {
    ${standardWrapper};
    overflow: hidden;
  }
  .galley-wrap {
    column-count: 1;
    column-gap: 1rem;

    @media (min-width: 768px) {
      column-count: 2;
    }

    @media (min-width: 1025px) {
      column-count: 3;
    }

    @media (min-width: 1200px) {
      column-count: 3;
    }
  }

  .item {
    display: inline-block;
    padding: 1rem;
    width: auto;
  }
`

const GalleryImage = styled.div``

export default PhotoGallery
