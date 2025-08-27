import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { medWrapper, H1Brown, B1Brown, Btn1GoldRev } from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const TitleSimpleContent = ({ data, pageStyles }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)

  return (
    <TitleSimpleContentSection
      id={data.sectionId}
      sidebaractive={pageStyles.acfPageStyles.sideStripe}
    >
      <div className="wrapper">
        <div className="title">{mainTitleDisplay}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
      {data.backgroundGraphic && (
        <div className="graphic">
          <BgGraphicOne />
        </div>
      )}
      {data.buttonRequired && (
        <div className="link-buttons">
          <Link to={`/${data.buttonOneSlug}`}>{data.buttonOneText}</Link>
          {data.sectionButtonRequired && (
            <Link to={`/${data.buttonTwoSlug}`}>{data.buttonTwoText}</Link>
          )}
        </div>
      )}
    </TitleSimpleContentSection>
  )
}

const TitleSimpleContentSection = styled.section`
  position: relative;

  .wrapper {
    ${medWrapper};

    @media (min-width: 768px) {
      padding-right: ${props => (props.sidebaractive ? "15rem" : "2rem")};
    }

    @media (min-width: 1025px) {
      padding-right: ${props => (props.sidebaractive ? "15rem" : "2rem")};
    }

    @media (min-width: 1200px) {
      padding-right: ${props => (props.sidebaractive ? "15rem" : "2rem")};
    }

    @media (min-width: 1400px) {
      padding-right: ${props => (props.sidebaractive ? "10rem" : "2rem")};
    }
  }

  .title {
    width: 100%;

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Brown};
    }
  }

  .link-buttons {
    width: 100%;
    padding-bottom: 5rem;
    text-align: center;

    a {
      ${Btn1GoldRev};
      min-width: 25rem;
      margin: 2rem;
    }
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140%;
    z-index: -1;
  }
`

export default TitleSimpleContent
