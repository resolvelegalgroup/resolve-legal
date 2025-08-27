import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import TestimonialsSlider from "./TestimonialsSlider"

const getData = graphql`
  {
    testimonials: allWpTestimonial {
      edges {
        node {
          title
          testimonials {
            content
          }
        }
      }
    }
  }
`

const Testimonials = ({ data }) => {
  const testData = useStaticQuery(getData)
  const testimonials = testData.testimonials.edges
  if (!data.displayTestimonials) return null

  const heroImage = getImage(
    data.testimonialImage.localFile.childImageSharp.gatsbyImageData
  )
  return (
    <TestimonialsSection>
      <div>
        <TestimonialsSlider testimonials={testimonials} />
      </div>
      <div className="bgImage">
        <GatsbyImage
          image={heroImage}
          alt="Hero background"
          style={{ height: "100%" }}
        />
      </div>
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
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
    left: 0;
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

export default Testimonials
