import React from 'react'
import './home.component.css';
import NavBar from '../../components/nav-bar/nav-bar.component';
import Banner from '../../components/banner/banner.component'
import SkillsSection from '../../components/skills-section/skills-section.component';
import SectionList from '../../components/section-list/section-list.component';
import PROJECTS_DATA from '../../data/projects';
import EDUCATION_DATA from '../../data/education';
import ContactSection from '../../components/contact-section/contact-section.component';
import Copyright from '../../components/copyright/copyright.component';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <SkillsSection />
      <SectionList title="Projects & Works" items={PROJECTS_DATA} />
      <SectionList title="Education" items={EDUCATION_DATA} />
      <ContactSection />
      <Copyright />
    </div>
  )
}

export default Home;