import React from 'react'
import './contact-info.component.css'
import { ReactComponent as Email }  from '../../assets/contact/email.svg'
import { ReactComponent as Phone } from '../../assets/contact/phone.svg'
import { ReactComponent as Linkedin } from '../../assets/contact/linkedin.svg'
import { ReactComponent as Github } from '../../assets/contact/github.svg'
import { Link } from 'react-router-dom'

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
        <div className="contact-info">
            <Email />
            <Link to="mailto:alharerekhaled@gmail.com" className='contact-text'>alharerekhaled@gmail.com</Link>
        </div>
        <div className="contact-info">
            <Phone />
            <Link to="tel:+965 52550206" className='contact-text'>Kuwait: +965 52550206</Link>
        </div>
        <div className="social-info">
            <Link to="https://www.linkedin.com/in/khaled-alhariri/" target='_blank'><Linkedin /></Link>
            <Link to="https://github.com/Cinemato" target='_blank'><Github /></Link>
        </div>
    </div>
  )
}

export default ContactInfo