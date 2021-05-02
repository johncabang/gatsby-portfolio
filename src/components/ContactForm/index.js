import React, { useState } from "react"
import axios from "axios"
import { StaticImage } from "gatsby-plugin-image"

import {
  ContactButton,
  ContactContainer,
  ContactEmailImage,
  ContactInput,
  ContactTitle,
  ContactWrapper,
  ContactFormContainer,
  ContactEmailStatus,
} from "./ContactFormElements"

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: "",
        message: "",
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: `${process.env.GATSBY_CONTACTFORM_URL}`,
      data: inputs,
    })
      .then(response => {
        handleServerResponse(true, "Thank you, your message has been sent.")
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactTitle>CONTACT ME.</ContactTitle>
        <ContactFormContainer>
          <form onSubmit={handleOnSubmit}>
            <ContactInput
              placeholder="NAME"
              type="text"
              name="name"
              id="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
            <ContactInput
              placeholder="EMAIL"
              type="email"
              name="email"
              id="email"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <ContactInput
              placeholder="MESSAGE"
              name="message"
              id="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <ContactButton type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "SEND"
                  : "SENT"
                : "SENDING..."}
            </ContactButton>
          </form>
          <ContactEmailImage>
            <StaticImage
              src="./../../images/email.svg"
              alt="email image"
              layout="fixed"
              width={300}
            />
          </ContactEmailImage>
        </ContactFormContainer>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <ContactEmailStatus>{status.info.msg}</ContactEmailStatus>
        )}
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactForm
