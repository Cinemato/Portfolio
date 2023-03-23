import React from 'react'
import './skill-info.component.css'
import { Skill } from '../../data/skills'

interface IProps {
    skill: Skill
}

const SkillInfo: React.FC<IProps> = ({skill}) => {
  return (
    <div className="skill">
        <img src={skill.img} alt={skill.title} width="125px" />
        <p>{skill.title}</p>
    </div>
  )
}

export default SkillInfo