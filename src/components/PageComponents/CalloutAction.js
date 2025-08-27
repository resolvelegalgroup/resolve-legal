import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Gold,
  colors,
  H1Gold,
  medWrapper,
} from "../../styles/helpers"

const CalloutAction = ({ data }) => {
  return (
    <CalloutActionSection>
      <div className="wrapper">
        <div className="content">
          <div>
            <h2>{data.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="action">
          <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
        </div>
      </div>
    </CalloutActionSection>
  )
}

const CalloutActionSection = styled.section`
  padding: 4rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h2 {
      ${H1Gold};
    }

    p {
      ${B1White};
    }
  }

  .action {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 20rem);
      margin-left: 20rem;
    }

    a {
      ${Btn1Gold};
      min-width: 25rem;
    }
  }
`

export default CalloutAction
