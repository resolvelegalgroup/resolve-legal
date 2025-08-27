import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    logo: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          mainLogo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

const MainLogo = () => {
  const data = useStaticQuery(getData)

  const imageDisplay = getImage(
    data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo.localFile
      .childImageSharp.gatsbyImageData
  )
  const imageAlt =
    data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo.altText
  return (
    <MainLogoStyled>
      <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
    </MainLogoStyled>
  )
}

const MainLogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

export default MainLogo
