import React from 'react'
import './home-page.component.css';
import NavBar from '../../components/nav-bar/nav-bar.component';
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component';
import Banner from '../../components/banner/banner.component'
import SkillsSection from '../../components/skills-section/skills-section.component';
import SectionList from '../../components/section-list/section-list.component';
import Copyright from '../../components/copyright/copyright.component';
import { ListItem, Skill } from '../../data/interfaces';

interface IProps {
  projectsList: ListItem[],
  educationList: ListItem[],
  skillsList: Skill[]
}

const HomePage: React.FC<IProps> = ({projectsList, educationList, skillsList}) => {
  return (
    <div className="home-page-container">
      <NavBar activePage="home" />
      <MobileNavBar activePage="home" />
      <Banner skillsList={skillsList} />
      <SkillsSection skillsList={skillsList} />
      <SectionList path="/projects" title="Projects & Works" items={projectsList} count={3} />
      <SectionList path="/education" title="Education" items={educationList} count={2} />
      <Copyright />
    </div>
  )
}

export default HomePage;