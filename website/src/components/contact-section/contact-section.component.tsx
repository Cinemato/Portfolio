import React from 'react'
import './contact-section.component.css'
import SectionTitle from '../section-title/section-title.component'
import { ReactComponent as Email }  from '../../assets/contact/email.svg'
import { ReactComponent as Phone } from '../../assets/contact/phone.svg'
import { ReactComponent as Linkedin } from '../../assets/contact/linkedin.svg'

const ContactSection = () => {
  return (
    <div className="contact-section-container">
         <SectionTitle title="Contact Me" />
         <div className="contact-info-container">
            <div className="contact-info">
              <Email />
              <p>alharerekhaled@gmail.com</p>
            </div>
            <div className="contact-info">
              <Phone />
              <p>+90 539 361 5823</p>
            </div>
            <div className="social-info">
              <Linkedin />
              <Linkedin />
            </div>
         </div>
         
         <form action="" className='contact-form'>
          <p>Want to send me a message quickly?</p>
          <div className="form-input">
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="" />
          </div>
          <div className="form-input">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="" cols={30} rows={10}></textarea>
          </div>
          <button>Send Message</button>
         </form>
    </div>
  )
}

export default ContactSection