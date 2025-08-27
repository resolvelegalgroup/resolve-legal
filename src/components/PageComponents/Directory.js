import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B2Brown,
  colors,
  fonts,
  H1Brown,
  H2Gold,
  H3Brown,
  medWrapper,
  standardWrapper,
} from "../../styles/helpers"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const Directory = ({ data }) => {
  const [activeCat, setActiveCat] = useState("calgary")

  return (
    <DirectorySection>
      <div className="wrapper">
        <div className="navigation">
          <ul>
            {data.sections.map((item, index) => {
              const imageDisplay = getImage(
                item.image.localFile.childImageSharp.gatsbyImageData
              )
              const imageAlt = item.image.altText
              const id = item.title
                .toLowerCase()
                .split("")
                .filter(char => char !== " ")
                .join("")
              return (
                <NavItem
                  isactive={activeCat === id}
                  data-directoryid={id}
                  key={index}
                >
                  <button
                    onClick={() => {
                      setActiveCat(id)
                    }}
                  >
                    <div className="title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="image">
                      <GatsbyImage
                        image={imageDisplay}
                        alt={imageAlt}
                        layout="fixed"
                      />
                    </div>
                  </button>
                </NavItem>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="dirWrapper">
        <div className="directory">
          {data.sections.map((item, index) => {
            const id = item.title
              .toLowerCase()
              .split("")
              .filter(char => char !== " ")
              .join("")

            if (activeCat !== id) return null

            return (
              <div className="dir-section" data-directoryid={id} key={index}>
                <div className="section-title">
                  <h2>{item.sectionDirectoryTitle}</h2>
                </div>
                <div className="items">
                  {item.items.map((dirItem, index) => {
                    const imageDisplay = getImage(
                      dirItem.image.localFile.childImageSharp.gatsbyImageData
                    )
                    const imageAlt = dirItem.image.altText
                    if (
                      dirItem.url !== "" &&
                      dirItem.url !== null &&
                      dirItem.url !== undefined
                    ) {
                      return (
                        <DirItem key={index}>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={`${dirItem.url}`}
                          >
                            <div className="logo-image">
                              <GatsbyImage
                                image={imageDisplay}
                                alt={imageAlt}
                                layout="fixed"
                              />
                            </div>
                            <div className="item-content">
                              <div>
                                <h3>{dirItem.title}</h3>
                              </div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: dirItem.content,
                                }}
                              />
                            </div>
                          </a>
                        </DirItem>
                      )
                    } else {
                      return (
                        <DirItem key={index}>
                          <div className="logo-image">
                            <GatsbyImage
                              image={imageDisplay}
                              alt={imageAlt}
                              layout="fixed"
                            />
                          </div>
                          <div className="item-content">
                            <div>
                              <h3>{dirItem.title}</h3>
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: dirItem.content,
                              }}
                            />
                          </div>
                        </DirItem>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </DirectorySection>
  )
}

const DirectorySection = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  .wrapper {
    ${medWrapper};
  }

  .dirWrapper {
    ${standardWrapper};
  }

  .navigation {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .directory {
    width: 100%;

    .dir-section {
      position: relative;
      margin: 5rem auto;

      .section-title {
        width: 100%;
        margin-bottom: 5rem;
        text-align: center;

        h2 {
          ${H1Brown};
        }
      }

      .items {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;

        &::before {
          display: none;
          position: absolute;
          top: 0;
          bottom: 1rem;
          left: calc(50% - 1.5rem);
          width: 0.25rem;
          background-color: ${colors.colorTertiary};
          transform: translateX(-50%);
          content: "";
          z-index: 500;
        }

        @media (min-width: 768px) {
          &::before {
            display: block;
          }
        }
      }
    }
  }

  .graphic {
    position: absolute;
    top: -15rem;
    left: 0;
    width: 100%;
    height: 130rem;
    z-index: -1;
  }
`

const NavItem = styled.li`
  position: relative;
  width: calc(100%);
  margin: 4rem 0;

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .title {
    position: absolute;
    right: 2.5rem;
    bottom: -2.5rem;
    left: 2.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
    background-color: ${props =>
      props.isactive ? colors.colorTertiary : colors.colorPrimary};
    text-align: center;
    z-index: 10;

    h2 {
      ${H2Gold};
      margin: 0;
      transition: all 0.3s ease;
      color: ${props => (props.isactive ? colors.white : colors.colorTertiary)};
      font-family: ${fonts.fontSecondary};
    }
  }

  button:hover {
    .title {
      background-color: ${colors.colorTertiary};

      h2 {
        color: ${colors.white};
      }
    }
  }
`

const DirItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: calc(100%);
  margin: 3rem 0;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 5rem);
    margin: 2.5rem;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: calc(100%);
  }

  .logo-image {
    width: calc(20%);
  }

  .item-content {
    width: calc(80%);
    padding: 0 2.5rem;

    h3 {
      ${H3Brown};
    }

    p {
      ${B2Brown};
    }
  }
`

export default Directory
