import React from 'react'
import './contact-section.component.css'
import SectionTitle from '../section-title/section-title.component'
import ContactInfo from '../contact-info/contact-info.component'
import ContactForm from '../contact-form/contact-form.component'

const ContactSection = () => {
  return (
    <div className="contact-section-container" id='contact'>
         <SectionTitle title="Contact Me" />
         <div className="contact-container">
          <ContactInfo />
          <ContactForm />
         </div>
    </div>
  )
}

export default ContactSection