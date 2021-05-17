import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
    <section className="contact">
      <h1 className="text-center py-5 mb-0">Contact</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
          <ContactForm/>
          </div>
          <div className="col-md-6 mb-5">
            <div className="embed-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.503281652551!2d18.69157931519645!3d47.7328889791932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a66a55744bf6f%3A0xf1eda2000eb18fc0!2zVG9rb2RhbHTDoXLDsywgRG9iw7MgS2F0aWNhIHUuIDEzLCAyNTMy!5e0!3m2!1shu!2shu!4v1619178442158!5m2!1shu!2shu" 
                height="450"
                className="embed-responsive-item w-100"
                title="contact-map"
                loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
