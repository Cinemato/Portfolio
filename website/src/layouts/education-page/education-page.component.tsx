import React from 'react'
import './education-page.component.css'
import NavBar from '../../components/nav-bar/nav-bar.component'
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component'
import SectionList from '../../components/section-list/section-list.component'
import Copyright from '../../components/copyright/copyright.component'
import { ListItem } from '../../data/interfaces';

interface IProps {
  educationList: ListItem[]
}

const EducationPage: React.FC<IProps> = ({educationList}) => {
  return (
    <div className="education-page-container">
      <NavBar activePage="education" />
      <MobileNavBar activePage="education" />
      <SectionList path="education" title="Education" items={educationList} count={educationList.length} />
      <Copyright />
    </div>
  )
}

export default EducationPage