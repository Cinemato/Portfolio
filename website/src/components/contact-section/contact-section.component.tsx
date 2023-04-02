import React from 'react'
import './contact-section.component.css'
import SectionTitle from '../section-title/section-title.component'
import ContactInfo from '../contact-info/contact-info.component'
import ContactForm from '../contact-form/contact-form.component'

const ContactSection = () => {
  return (
    <div className="contact-section-container">
         <SectionTitle title="Contact Me" />
         <ContactInfo />
         <ContactForm />
    </div>
  )
}

export default ContactSection