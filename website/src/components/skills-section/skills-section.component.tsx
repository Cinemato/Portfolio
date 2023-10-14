import { useState } from 'react';
import './skills-section.component.css';
import { Skill } from '../../data/interfaces';
import SectionTitle from '../section-title/section-title.component';
import SkillInfo from '../skill-info/skill-info.component';
import ViewAllButton from '../view-all-button/view-all-button.component';

interface IProps {
  skillsList: Skill[]
}

const SkillsSection: React.FC<IProps> = ({skillsList}) => {
  const [isViewAll, setIsViewAll] = useState(false);

  const viewAllToggle = (): void => {
    setIsViewAll(!isViewAll);
  }

  return (
    <div className="skills-section-container">
        <SectionTitle title="Technical Skills" />
        <div className="skills-container">
            {[...skillsList].sort((a,b) => a.order - b.order).map((skill, index) => {
              if(index < 8) {
                return <SkillInfo skill={skill} key={skill.id} view={true} />
              }
              
              return <SkillInfo skill={skill} key={skill.id} view={isViewAll} />
            })}
        </div>
        <ViewAllButton content={isViewAll ? "Hide" : "View all"} onClick={viewAllToggle} />
    </div>
  )
}

export default SkillsSection