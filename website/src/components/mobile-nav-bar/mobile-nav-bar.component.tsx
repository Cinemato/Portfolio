import React, { useState } from 'react'
import './mobile-nav-bar.component.css'
import { ReactComponent as Menu } from '../../assets/nav/menu.svg'
import { Link } from 'react-router-dom';

interface IProps {
  activePage: string
}

const MobileNavBar: React.FC<IProps> = ({activePage}) => {
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
            <li><Link to={'/'} className={`link ${activePage === 'home' ? 'link-active' : ''}`}>Home</Link></li>
            <li><Link to={'/projects'} className={`link ${activePage === 'projects' ? 'link-active' : ''}`}>Projects</Link></li>
            <li><Link to={'/education'} className={`link ${activePage === 'education' ? 'link-active' : ''}`}>Education</Link></li>
            <li><Link to={'/contact'} className={`link ${activePage === 'contact' ? 'link-active' : ''}`}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default MobileNavBar