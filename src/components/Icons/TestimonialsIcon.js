import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const IconWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    image: file(relativePath: { eq: "testimonials-icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`

const TestimonialsIcon = () => {
  const data = useStaticQuery(getData)
  const image = getImage(data.image.childImageSharp.gatsbyImageData)
  return (
    <IconWrap>
      <GatsbyImage image={image} alt="Key" layout="fixed" />
    </IconWrap>
  )
}

export default TestimonialsIcon
