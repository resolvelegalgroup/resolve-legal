import React from "react"
import styled from "styled-components"
import {
  colors,
  H1Brown,
  H2Brown,
  H3Brown,
  H3Gold,
  B1Brown,
} from "../../styles/helpers"

const WysiwygGrid = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div
          className="wysiwyg-grid"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wysiwyg-grid {
    display: grid;
    grid-gap: 1rem 5rem;
    grid-template-columns: 1fr;
    max-width: 100rem;
    margin: 2rem auto;

    & > * {
      grid-column: 2 / -2;
    }

    h1 {
      ${H1Brown};
    }

    h2 {
      ${H2Brown};
    }

    h3 {
      ${H3Brown}
    }

    h4 {
      ${H3Gold}
    }

    p {
      ${B1Brown};

      a {
        transition: all 0.3s;
        color: ${colors.colorTertiary};
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorSecondary};
        }
      }
    }

    ul {
      margin-bottom: 2.5rem;

      li {
        ${B1Brown};
        position: relative;
        margin-bottom: 0.75em;
        padding-left: 0.75em;
        font-size: 1.6rem;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          padding-right: 0.5em;
          color: rgba($grey, 0.75);
          content: "-";
        }
      }
    }
  }
`

export default WysiwygGrid
