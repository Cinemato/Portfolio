import React from 'react'
import './education-page.component.css'
import NavBar from '../../components/nav-bar/nav-bar.component'
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component'
import SectionList from '../../components/section-list/section-list.component'
import EDUCATION_DATA from '../../data/education'
import Copyright from '../../components/copyright/copyright.component'

const EducationPage = () => {
  return (
    <div className="education-page-container">
      <NavBar activePage="education" />
      <MobileNavBar activePage="education" />
      <SectionList path="education" title="Education" items={EDUCATION_DATA} count={EDUCATION_DATA.length} />
      <Copyright />
    </div>
  )
}

export default EducationPage