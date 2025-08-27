import React, { useState } from "react"
import DatePicker from "react-datepicker"
import styled from "styled-components"
import { B1Brown, Btn1GoldRev, colors, Nav1Brown } from "../../styles/helpers"

import submitToServer from "./functions/submitToServer"
import FormSuccess from "./formModals/FormSuccess"
import FormSubmit from "./formModals/FormSubmit"
import FormErrors from "./formModals/FormErrors"

import "react-datepicker/dist/react-datepicker.css"

const LunchLearnFormFields = () => {
  const [formData, setFormData] = useState({
    firstLastName: "",
    email: "",
    phone: "",
    howToContact: "",
    discussionTopic: "",
    date: new Date(),
    lunch: "",
    location: "",
    subject: "",
    message: "",
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

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const pickedMonth = months[formData.date.getMonth()]
    const pickedDay = formData.date.getDate()
    const pickedYear = formData.date.getFullYear()
    const pickedDate = `${pickedMonth} ${pickedDay}, ${pickedYear}`

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

    bodyFormData.append(`pickedDate`, pickedDate)

    const response = await submitToServer(783, bodyFormData)

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
      firstLastName: "",
      email: "",
      phone: "",
      message: "",
      howToContact: "",
      discussionTopic: "",
      date: new Date(),
      lunch: "",
      location: "",
      subject: "",
      spam: "",
    })
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Request a Lunch & Learn</legend>
          <InputField>
            <label htmlFor="firstLastName">
              First and Last Name <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "firstLastName"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must input a name.
              </span>
              <input
                name="firstLastName"
                type="text"
                value={formData.firstLastName}
                id="firstLastName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="email">
              Your email <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "email"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                The email address you entered is not valid.
              </span>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="phone">
              Your Phone Number <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "phone"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a valid phone number.
              </span>
              <input
                name="phone"
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="howToContact">
              Preferred Communication Method{" "}
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "howToContact"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a perfered contact method.
              </span>
              <select
                value={formData.howToContact}
                name="howToContact"
                id="howToContact"
                onChange={handleOnChange}
              >
                <option value="">
                  -- Please choose a perfered contact method --
                </option>
                <option value="phone">Phone</option>
                <option value="phone">Email</option>
                <option value="either">Either</option>
              </select>
            </label>
          </InputField>

          <InputField>
            <label htmlFor="location">
              Preferred Location <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "location"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a perfered contact method.
              </span>
              <select
                value={formData.location}
                name="location"
                id="location"
                onChange={handleOnChange}
              >
                <option value="">
                  -- Please choose a perfered Location --
                </option>
                <option value="classroom">
                  Resolve Legal Group Classroom{" "}
                </option>
                <option value="yourOffice">Your Office</option>
              </select>
            </label>
          </InputField>

          <InputField>
            <label htmlFor="discussionTopic">
              Discussion Topic <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "discussionTopic"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a Discussion Topic.
              </span>
              <select
                value={formData.discussionTopic}
                name="discussionTopic"
                id="discussionTopic"
                onChange={handleOnChange}
              >
                <option value="">-- Please choose a Discussion Topic --</option>
                <option value="family">Family Law</option>
                <option value="realEstate">Real Estate Law</option>
                <option value="wills">Wills</option>
              </select>
            </label>
          </InputField>

          <InputField>
            <label htmlFor="date">
              Preferred Appointment Day{" "}
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "date"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must input a date.
              </span>
              <DatePicker
                minDate={new Date()}
                selected={formData.date}
                onChange={date =>
                  setFormData(prevState => {
                    return { ...prevState, date }
                  })
                }
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="lunch">
              How would you like lunch? COVID notice - lunch and learns to be
              hosted via zoom for forseeable future.{" "}
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "lunch"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a perfered lunch option.
              </span>
              <select
                value={formData.lunch}
                name="lunch"
                id="lunch"
                onChange={handleOnChange}
              >
                <option value="">-- Please choose a Lunch Option --</option>
                <option value="bringYourOwn">
                  Employees Bring Their Own Lunch
                </option>
              </select>
            </label>
          </InputField>

          <InputField>
            <label htmlFor="subject">
              Subject <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "subject"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a Subject.
              </span>
              <input
                name="subject"
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <InputField>
            <label htmlFor="message">
              Message
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "message"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                You must provide a message
              </span>
              <textarea
                type="text"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleOnChange}
                rows="5"
                aria-required="false"
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

    .react-datepicker-wrapper {
      display: block;
    }

    .react-datepicker {
      font-size: 1.3rem !important;
    }

    .react-datepicker__current-month {
      font-size: 1.5rem !important;
    }

    .react-datepicker__header {
      padding-top: 6px !important;
    }

    .react-datepicker__navigation {
      top: 13px !important;
    }

    .react-datepicker__day-name,
    .react-datepicker__day {
      margin: 0.5rem !important;
    }
  }
`

const SubmitButton = styled.div`
  button {
    ${Btn1GoldRev};
  }
`

export default LunchLearnFormFields
