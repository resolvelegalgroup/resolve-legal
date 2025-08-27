import React, { useState } from "react"
import styled from "styled-components"
import { B1Brown, Btn1GoldRev, colors, Nav1Brown } from "../../styles/helpers"

import submitToServer from "./functions/submitToServer"
import FormSuccess from "./formModals/FormSuccess"
import FormSubmit from "./formModals/FormSubmit"
import FormErrors from "./formModals/FormErrors"

const ClientSupportFormFeilds = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    yourEmail: "",
    areaOfLaw: "",
    opposingParty: "",
    spam: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    // if (formData.spam.toLowerCase() !== "horse") {
    //   setFormStatus({
    //     ...formStatus,
    //     errorWarnDisplay: true,
    //     errors: [{ idref: "animal" }],
    //   })
    //   return
    // }

    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(7575, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      yourEmail: "",
      areaOfLaw: "",
      opposingParty: "",
      spam: "",
    })
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Make an Appointment Form</legend>
          <InputField>
            <label htmlFor="firstName">
              First Name <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "firstName"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must input a first name.
              </span>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                id="firstName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="lastName">
              Last Name <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "lastName"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must input a last name.
              </span>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                id="lastName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="phoneNumber">
              Your Phone Number <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "phoneNumber"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a valid phone number.
              </span>
              <input
                name="phoneNumber"
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="yourEmail">
              Your email <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "yourEmail"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                The email address you entered is not valid.
              </span>
              <input
                name="yourEmail"
                type="email"
                id="yourEmail"
                value={formData.yourEmail}
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="areaOfLaw">
              Area of law you need help with{" "}
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "areaOfLaw"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a Area of law .
              </span>
              <select
                value={formData.areaOfLaw}
                name="areaOfLaw"
                id="areaOfLaw"
                onChange={handleOnChange}
              >
                <option value="">-- Please choose a Area of law --</option>
                <option value="family">Family Law</option>
                <option value="wills">Wills</option>
                <option value="estate">Estate Law</option>
                <option value="civil">Civil</option>
                <option value="realEstate">Real Estate Law</option>
              </select>
            </label>
          </InputField>

          <InputField>
            <label htmlFor="opposingParty">
              If it's a family matter, name (first and last) of opposing party
              <input
                name="opposingParty"
                type="text"
                id="opposingParty"
                value={formData.opposingParty}
                onChange={handleOnChange}
                maxLength={50}
              />
            </label>
          </InputField>
        </fieldset>
        <SubmitButton>
          <button type="submit">Submit</button>
        </SubmitButton>
      </Form>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </>
  )
}

const Form = styled.form`
  width: 100%;
  margin-bottom: 2.5rem;

  fieldset {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
  }

  legend {
    ${B1Brown};
  }
`

const InputField = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 0;

  label {
    ${Nav1Brown};
    display: block;
    width: 100%;
    line-height: 1.5;

    &:hover {
      color: ${colors.colorPrimary};
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea,
    select {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      border-radius: 0.2rem;
      color: #444;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      border: 0.1rem ${colors.colorSecondary} solid;
    }
  }
`

const SubmitButton = styled.div`
  button {
    ${Btn1GoldRev};
  }
`

export default ClientSupportFormFeilds
