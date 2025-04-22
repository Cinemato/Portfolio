import { useState } from 'react';
import './skills-section.component.css';
import { Skill } from '../../data/interfaces';
import SectionTitle from '../section-title/section-title.component';
import SkillInfo from '../skill-info/skill-info.component';
import ViewAllButton from '../view-all-button/view-all-button.component';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Spinner from '../spinner/spinner.component'

interface IProps {
  skillsList: Skill[]
}

const SkillsSection: React.FC<IProps> = ({skillsList}) => {
  const { hasLoaded } = useSelector((state: RootState) => state.info);
  const [isViewAll, setIsViewAll] = useState(false);

  const viewAllToggle = (): void => {
    setIsViewAll(!isViewAll);
  }

  return (
    <div className="skills-section-container">
        <SectionTitle title="Technical Skills" />
        {hasLoaded ?
        <>
          <div className="skills-container">
              {[...skillsList].sort((a,b) => a.order - b.order).map((skill, index) => {
                if(index < 8) {
                  return <SkillInfo skill={skill} key={skill.id} view={true} width='125px' />
                }
                
                return <SkillInfo skill={skill} key={skill.id} view={isViewAll} width='125px' />
              })}
          </div>
          <ViewAllButton content={isViewAll ? "Hide" : "View all"} onClick={viewAllToggle} />
        </>   
        : <Spinner />
        }
    </div>
  )
}

export default SkillsSection