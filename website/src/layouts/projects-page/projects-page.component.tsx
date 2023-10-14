import React from 'react'
import './projects-page.component.css'
import NavBar from '../../components/nav-bar/nav-bar.component'
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component'
import SectionList from '../../components/section-list/section-list.component'
import Copyright from '../../components/copyright/copyright.component'
import { ListItem } from '../../data/interfaces';

interface IProps {
  projectsList: ListItem[]
}

const ProjectsPage: React.FC<IProps> = ({projectsList}) => {
  return (
    <div className="projects-page-container">
      <NavBar activePage="projects" />
      <MobileNavBar activePage="projects" />
      <SectionList path="/projects" title="Projects & Works" items={projectsList} count={projectsList.length} />
      <Copyright />
    </div>
  )
}

export default ProjectsPage