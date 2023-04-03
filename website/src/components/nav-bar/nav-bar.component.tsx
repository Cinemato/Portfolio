import React from 'react'
import './nav-bar.component.css';
import { Link } from 'react-router-dom';

interface IProps {
  activePage: string
}

const NavBar: React.FC<IProps> = ({activePage}) => {
  return (
    <div className='nav-bar-container'>
      <Link to={'/'} className={`link ${activePage === 'home' ? 'link-active' : ''}`}><p>Home</p></Link>
      <Link to={'/projects'} className={`link ${activePage === 'projects' ? 'link-active' : ''}`}><p>Projects</p></Link>
      <Link to={'/education'} className={`link ${activePage === 'education' ? 'link-active' : ''}`}><p>Education</p></Link>
      <Link to={'/contact'} className={`link ${activePage === 'contact' ? 'link-active' : ''}`}><p>Contact</p></Link>
    </div>
  )
}

export default NavBar