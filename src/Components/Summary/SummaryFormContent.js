import Button from '../Contact/Button';
import InputField from '../Contact/InputField';

export default function CheckoutFormContent({
  errorMessage,
  formData,
  handleInputChange,
  subtotal,
  validateName,
  validateEmail,
  validateMobil,
})
  {
    
  return (
    <div>
      <div className='mb-5'>
        <InputField
          id='name'
          label='Name'
          name='name'
          onBlur={validateName}
          onChange={handleInputChange}
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
          type='email'
          value={formData.email}
        />
        <p className='text-danger mb-3'>{errorMessage.email}</p>
        <InputField
          id='mobil'
          label='Mobil'
          name='mobil'
          onBlur={validateMobil}
          onChange={handleInputChange}
          type='tel'
          value={formData.mobil}
        />
        <p className='text-danger mb-3'>{errorMessage.mobil}</p>
      </div>
      
      <div className="fw-bold d-flex justify-content-end mb-5">
        <h4>Total price: {subtotal} $ </h4>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <Button
          label='Order'
          type='submit'
        />
      </div>

    </div>
  )
}