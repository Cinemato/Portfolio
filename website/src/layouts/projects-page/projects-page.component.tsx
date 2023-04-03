import React from 'react'
import './projects-page.component.css'
import NavBar from '../../components/nav-bar/nav-bar.component'
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component'
import SectionList from '../../components/section-list/section-list.component'
import PROJECTS_DATA from '../../data/projects'
import Copyright from '../../components/copyright/copyright.component'

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <NavBar activePage="projects" />
      <MobileNavBar activePage="projects" />
      <SectionList title="Projects & Works" items={PROJECTS_DATA} />
      <Copyright />
    </div>
  )
}

export default ProjectsPage