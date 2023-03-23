import React from 'react'
import './home.component.css';
import NavBar from '../../components/nav-bar/nav-bar.component';
import Banner from '../../components/banner/banner.component'
import SkillsSection from '../../components/skills-section/skills-section.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}

export default Home;