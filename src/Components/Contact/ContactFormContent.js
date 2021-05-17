import { useRef } from 'react';
import Button from './Button';
import InputField from './InputField';

export default function ContactFormContent({
  errorMessage,
  formData,
  handleInputChange,
  validateName,
  validateEmail,
  validateMessage,
})
  {
  const references = {
    name: useRef(),
    email: useRef(),
    message: useRef(),
  };
    
  return (
    <div>
      <div className='my-3'>
        <InputField
          id='name'
          label='Name'
          name='name'
          onBlur={validateName}
          onChange={handleInputChange}
          reference={references['name']}
          type='text'
          value={formData.name}
        />
        <p className='text-danger mb-3'>{errorMessage.name}</p>
        <InputField
          id='email'
          label='Email'
          name='email' 
          onBlur={validateEmail}
          onChange={handleInputChange}
          reference={references['email']}
          type='email'
          value={formData.email}
        />
        <p className='text-danger mb-3'>{errorMessage.email}</p>
        <InputField
          id='message'
          label='Message'
          name='message' 
          onBlur={validateMessage}
          onChange={handleInputChange}
          reference={references['message']}
          type='text'
          value={formData.message}
        />
        <p className='text-danger mb-3'>{errorMessage.message}</p>

      </div>
      
      <div className="d-flex justify-content-center mb-3 mt-5">
        <Button
          className='my-3'
          label='Submit'
          type='submit'
        />
      </div>

    </div>
  )
}