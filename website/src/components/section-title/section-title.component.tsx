import React from 'react'
import './section-title.component.css'

interface IProps {
    title: string
}

const SectionTitle: React.FC<IProps> = ({title}) => {
  return (
    <h2 className='section-title'>{title}</h2>
  )
}

export default SectionTitle