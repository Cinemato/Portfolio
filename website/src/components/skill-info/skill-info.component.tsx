import React from 'react'
import './skill-info.component.css'
import { Skill } from '../../data/interfaces'

interface IProps {
    skill: Skill,
    view: boolean
}

const SkillInfo: React.FC<IProps> = ({skill, view}) => {
  return (
    <div className={`skill ${view ? 'skill-active' : ''}`}>
        <img src={skill.image} alt={skill.title} width="125px" />
        <p>{skill.title}</p>
    </div>
  )
}

export default SkillInfo