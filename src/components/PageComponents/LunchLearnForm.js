import React from "react"
import styled from "styled-components"
import { H1Brown, standardWrapper } from "../../styles/helpers"
import LunchLearnFormFields from "../Forms/LunchLearnFormFields"

const LunchLearnForm = () => {
  return (
    <LunchLearnFormSection>
      <div className="wrapper">
        <div className="form-title">
          <h2>Request a Lunch & Learn</h2>
        </div>
        <div className="form">
          <LunchLearnFormFields />
        </div>
      </div>
    </LunchLearnFormSection>
  )
}

const LunchLearnFormSection = styled.section`
  .wrapper {
    ${standardWrapper};
    margin: 0 auto;
    max-width: 75rem !important;
  }

  .form-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Brown};
    }
  }

  .form {
    width: 100%;
  }
`

export default LunchLearnForm
