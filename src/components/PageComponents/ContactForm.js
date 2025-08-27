import React from "react"
import styled from "styled-components"
import { H1Brown, standardWrapper } from "../../styles/helpers"
import ContactFormFields from "../Forms/ContactFormFields"

const ContactForm = () => {
  return (
    <ContactFormSection>
      <div className="wrapper">
        <div className="form-title">
          <h2>Make An Appointment</h2>
        </div>
        <div className="form">
          <ContactFormFields />
        </div>
      </div>
    </ContactFormSection>
  )
}

const ContactFormSection = styled.section`
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

export default ContactForm
