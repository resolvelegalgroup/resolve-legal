import React from "react"
import styled from "styled-components"
import { BigWrapper, H1Brown, colors, B1Brown } from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"

const TitleNoImage = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  return (
    <TitleNoImageSection>
      <div className="wrapper">
        <div className="title">
          <div className="title__inner">{mainTitleDisplay}</div>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </TitleNoImageSection>
  )
}

const TitleNoImageSection = styled.section`
  padding-top: 5rem;

  .wrapper {
    ${BigWrapper};
    align-items: center;
    padding: 0;
  }

  .title {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      margin-left: 50%;
      margin-right: 0;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
    }

    &__inner {
      border-top: solid 0.2rem ${colors.colorTertiary};
      padding-bottom: 5rem;
    }
  }

  .content {
    width: 100%;
    text-align: center;

    p {
      ${B1Brown};
    }
  }
`

export default TitleNoImage
