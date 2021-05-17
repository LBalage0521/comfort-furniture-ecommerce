import React, { useState } from 'react';
import validator from 'validator';
import { addOrderToDatabase } from '../../Firebase/Database';
import SummaryFormContent from './SummaryFormContent';

export default function SummaryForm({cartContent, removeAllFromCart, subtotal, setSubtotal}) {

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    mobil: '',
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobil: '',
    orderTotal: subtotal,
    cartContent: cartContent
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

  function validateMobil() {
    let isValid = formData.mobil.length > 0;
    handleErrorMessages('mobil', isValid, 'Please enter your phone number.')
    return isValid;
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    let validation = [
      validateName(),
      validateEmail(),
      validateMobil(),
    ]

    let formValid = validation.every((fieldValidation) => fieldValidation);

    if (formValid) {
      setFormSuccess(true);
      addOrderToDatabase(formData);
      removeAllFromCart();
      setSubtotal(0);
      setFormData({
        name: '',
        email: '',
        mobil: '',
      })
      }
      else {
        console.log('Error');
      }
    }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleFormSubmit} noValidate={true}>
            <SummaryFormContent
              cartContent={cartContent}
              errorMessage={errorMessage}
              formData={formData}
              handleInputChange={handleInputChange}
              subtotal={subtotal}
              validateName={validateName}
              validateEmail={validateEmail}
              validateMobil={validateMobil}
            />

          {formSuccess &&
            <div className={`alert mt-3 alert-success d-flex justify-content-center text-center`} role="alert">
              We have received your order!
            </div>
          }
          
          </form>
        </div>
      </div>
    </div>
  )
}