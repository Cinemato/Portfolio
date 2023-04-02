import React from 'react'
import './contact-form.component.css'
import FormInput from '../form-input/form-input.component'
import FormTextarea from '../form-textarea/form-textarea.component'

const ContactForm = () => {
  return (
    <form action="" className='contact-form'>
        <p>Want to send me a message quickly?</p>
        <FormInput name="name" label="Full Name:" />
        <FormInput name="email" label="Email:" />
        <FormTextarea name="message" label="Message:" />
        <button>Send Message</button>
    </form>
  )
}

export default ContactForm