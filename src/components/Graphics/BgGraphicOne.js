import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    image: file(relativePath: { eq: "background-graphic.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 2000)
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BgGraphicOne = () => {
  const data = useStaticQuery(getData)
  const bgUrl = data.image.publicURL
  return <BgGraphicOneStyled style={{ backgroundImage: `url(${bgUrl})` }} />
}

const BgGraphicOneStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-position: center top !important;
  background-repeat: repeat;
  background-size: calc(2736px / 3) calc(2736px / 3) !important;
`

export default BgGraphicOne
