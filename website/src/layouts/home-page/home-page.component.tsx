import React from 'react'
import './home-page.component.css';
import NavBar from '../../components/nav-bar/nav-bar.component';
import MobileNavBar from '../../components/mobile-nav-bar/mobile-nav-bar.component';
import Banner from '../../components/banner/banner.component'
import SkillsSection from '../../components/skills-section/skills-section.component';
import SectionList from '../../components/section-list/section-list.component';
import PROJECTS_DATA from '../../data/projects';
import EDUCATION_DATA from '../../data/education';
import Copyright from '../../components/copyright/copyright.component';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <NavBar activePage="home" />
      <MobileNavBar activePage="home" />
      <Banner />
      <SkillsSection />
      <SectionList title="Projects & Works" items={PROJECTS_DATA} />
      <SectionList title="Education" items={EDUCATION_DATA} />
      <Copyright />
    </div>
  )
}

export default HomePage;