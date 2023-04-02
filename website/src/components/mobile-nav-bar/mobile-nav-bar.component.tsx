import React, { useState } from 'react'
import './mobile-nav-bar.component.css'
import { ReactComponent as Menu } from '../../assets/nav/menu.svg'

const MobileNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const mobileMenuToggle = (): void  => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className={`mobile-nav-bar-container ${isNavOpen ? 'mobile-nav-active' : ''}`}>
        <div className="mobile-nav-icon">
            <Menu onClick={mobileMenuToggle} />
        </div>
        <ul className="mobile-nav-list">
            <li>Home</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default MobileNavBar