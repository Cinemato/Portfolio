import React from 'react'
import './contact-page.component.css'
import NavBar from '../../components/nav-bar/nav-bar.component'
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component'
import ContactSection from '../../components/contact-section/contact-section.component'
import Copyright from '../../components/copyright/copyright.component'

const ContactPage = () => {
  return (
    <div className="education-page-container">
      <NavBar activePage="contact" />
      <MobileNavBar activePage="contact" />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default ContactPage