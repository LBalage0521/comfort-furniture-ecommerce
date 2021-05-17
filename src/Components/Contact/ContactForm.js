import React, { useState } from 'react';
import validator from 'validator';
import { addContactMessageToDatabase } from '../../Firebase/Database';
import ContactFormContent from './ContactFormContent';

export default function ContactForm() {

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const isEmailValid = (value) => {
    return validator.isEmail(value);
  }

  function resetErrorMessage(name) {
    setErrorMessage((previousMessage) => ({
        ...previousMessage,
        [name]:  ''
    }))
  }

  function handleInputChange({target: {name, value}}) {
    resetErrorMessage(name);
    setFormData({...formData,
    [name]: value})
  }

  function handleErrorMessages(name, isValid, message) {
    setErrorMessage((previousMessage) => ({
      ...previousMessage,
      [name]: isValid ? '' : message
    }))
  }

  function validateName() {
    let isValid = formData.name.length > 0;
    handleErrorMessages('name', isValid, 'Please enter your name.')
    return isValid;
  }

  function validateEmail() {
    let isValid = isEmailValid(formData.email);
    handleErrorMessages('email', isValid, 'Please provide a valid email address.');
    return isValid;
  }

  function validateMessage() {
    let isValid = formData.message.length > 0;
    handleErrorMessages('message', isValid, 'Please enter a message in the textarea.');
    return isValid;
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    let validation = [
      validateName(),
      validateEmail(),
      validateMessage(),
    ]

    let formValid = validation.every((fieldValidation) => fieldValidation);

    if (formValid) {
      console.log(formData);
      setFormSuccess(true);
      addContactMessageToDatabase(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      }
      else {
        console.log('Error');
      }
    }

  return (
    <div className="container formDiv">
      <form onSubmit={handleFormSubmit} noValidate={true}>
        <ContactFormContent
          errorMessage={errorMessage}
          formData={formData}
          handleInputChange={handleInputChange}
          validateName={validateName}
          validateEmail={validateEmail}
          validateMessage={validateMessage}
        />
      </form>

    {formSuccess &&
      <div className={`alert mt-3 alert-success d-flex justify-content-center text-center`} role="alert">
        We have received your message!
      </div>
    }

    </div>
  )
}