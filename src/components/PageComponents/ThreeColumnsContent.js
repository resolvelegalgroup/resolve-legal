import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Brown,
  colors,
  fonts,
  H2Gold,
  medWrapper,
  fontSizer,
} from "../../styles/helpers"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ThreeColumnsContent = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#three-columns-content",
          markers: false,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".columns",
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.5,
          },
        }
      )
  }, [])

  return (
    <ThreeColumnsContentSection id="three-columns-content">
      <div className="wrapper">
        {data.columns.map((col, index) => {
          const imageDisplay = getImage(
            col.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = col.image.altText
          return (
            <Column className="columns" key={index}>
              {col.linkRequired ? (
                <Link to={`/${col.linkSlug}`}>
                  <div className="col-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                  <div className="col-title">
                    <h2>{col.title}</h2>
                  </div>
                  <div
                    className="col-content"
                    dangerouslySetInnerHTML={{ __html: col.content }}
                  />
                </Link>
              ) : (
                <>
                  <div className="col-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                  <div className="col-title">
                    <h2>{col.title}</h2>
                  </div>
                  <div
                    className="col-content"
                    dangerouslySetInnerHTML={{ __html: col.content }}
                  />
                </>
              )}
            </Column>
          )
        })}
      </div>
    </ThreeColumnsContentSection>
  )
}

const ThreeColumnsContentSection = styled.section`
  padding-top: 3rem;
  overflow: hidden;

  .wrapper {
    ${medWrapper};
  }
`

const Column = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.333333% - 2rem);
    margin: 2rem 1rem;
  }

  .col-title {
    position: relative;
    width: calc(100% - 4rem);
    margin: auto 2rem;
    margin-top: -5rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;
    z-index: 100;

    h2 {
      ${H2Gold};
      margin: 0;
      padding: 0;
      font-family: ${fonts.fontSecondary};
    }
  }

  .col-content {
    padding: 2rem;

    p {
      ${B1Brown};
      ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
    }
  }
`

export default ThreeColumnsContent
