import React from 'react'
import './skill-info.component.css'
import { Skill } from '../../data/interfaces'

interface IProps {
    skill: Skill,
    view: boolean,
    width: string
}

const SkillInfo: React.FC<IProps> = ({skill, view, width}) => {
  return (
    <div className={`skill ${view ? 'skill-active' : ''} ${width === '175px' ? 'cert' : ''}`}>
        <img src={skill.image} alt={skill.title} width={width} />
        <p>{skill.title}</p>
    </div>
  )
}

export default SkillInfo