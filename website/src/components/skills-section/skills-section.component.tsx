import { useState } from 'react';
import './skills-section.component.css';
import SKILLS_DATA from '../../data/skills';
import SectionTitle from '../section-title/section-title.component';
import SkillInfo from '../skill-info/skill-info.component';
import ViewAllButton from '../view-all-button/view-all-button.component';

const SkillsSection = () => {
  const [isViewAll, setIsViewAll] = useState(false);

  const viewAllToggle = (): void => {
    setIsViewAll(!isViewAll);
  }

  return (
    <div className="skills-section-container">
        <SectionTitle title="Technical Skills" />
        <div className="skills-container">
            {SKILLS_DATA.map((skill, index) => {
              if(index < 8) {
                return <SkillInfo skill={skill} key={skill.id} view={true} />
              }
              
              return <SkillInfo skill={skill} key={skill.id} view={isViewAll} />
            })}
        </div>
        <button onClick={viewAllToggle}><ViewAllButton content={isViewAll ? "Hide" : "View all"} /></button>
    </div>
  )
}

export default SkillsSection