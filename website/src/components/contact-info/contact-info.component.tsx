import React from 'react'
import './contact-info.component.css'
import { ReactComponent as Email }  from '../../assets/contact/email.svg'
import { ReactComponent as Phone } from '../../assets/contact/phone.svg'
import { ReactComponent as Linkedin } from '../../assets/contact/linkedin.svg'

const ContactInfo = () => {
  return (
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
  )
}

export default ContactInfo