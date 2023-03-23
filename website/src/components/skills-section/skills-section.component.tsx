import React from 'react'
import './skills-section.component.css';
import SKILLS_DATA from '../../data/skills';
import SectionTitle from '../section-title/section-title.component';
import SkillInfo from '../skill-info/skill-info.component';

const SkillsSection = () => {
  return (
    <div className="skills-section-container">
        <SectionTitle title="Technical Skills" />
        <div className="skills-container">
            {SKILLS_DATA.map((skill) => (
                <SkillInfo skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default SkillsSection