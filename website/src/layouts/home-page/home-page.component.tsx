import React from 'react'
import './home-page.component.css';
import NavBar from '../../components/nav-bar/nav-bar.component';
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component';
import Banner from '../../components/banner/banner.component'
import SkillsSection from '../../components/skills-section/skills-section.component';
import CertsSection from '../../components/certs-section/certs-section.component';
import SectionList from '../../components/section-list/section-list.component';
import Copyright from '../../components/copyright/copyright.component';
import { ListItem, Skill, File } from '../../data/interfaces';

interface IProps {
  projectsList: ListItem[],
  educationList: ListItem[],
  skillsList: Skill[],
  certsList: Skill[],
  filesList: File[]
}

const HomePage: React.FC<IProps> = ({projectsList, educationList, skillsList, certsList, filesList}) => {
  return (
    <div className="home-page-container">
      <NavBar activePage="home" />
      <MobileNavBar activePage="home" />
      <Banner skillsList={skillsList} filesList={filesList} />
      <SkillsSection skillsList={skillsList} />
      <CertsSection certsList={certsList} />
      <SectionList path="/projects" title="Projects & Works" items={projectsList} count={3} />
      <SectionList path="/education" title="Education" items={educationList} count={2} />
      <Copyright />
    </div>
  )
}

export default HomePage;