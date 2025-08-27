import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { B1Brown, Btn1Gold, H1Gold, standardWrapper } from "../styles/helpers"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <SectionStyled>
        <div className="wrapper">
          <div>
            <div className="title">
              <h1>404: Not Found</h1>
            </div>
            <div className="content">
              <p>You just hit a route that doesn&#39;t exist....</p>
            </div>
            <div className="button">
              <Link to="/">Back Home</Link>
            </div>
          </div>
        </div>
      </SectionStyled>
    </Layout>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper}
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  .title {
    width: 100%;
    text-align: center;

    h1 {
      ${H1Gold};
    }
  }

  .content {
    width: 100%;
    text-align: center;

    p {
      ${B1Brown};
    }
  }

  .button {
    width: 100%;
    text-align: center;

    a {
      ${Btn1Gold};
    }
  }
`

export default NotFoundPage
