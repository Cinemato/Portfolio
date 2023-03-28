import React from 'react'
import { ListItem } from '../../data/interfaces'
import './section-list-item-info.css'

interface IProps {
  item: ListItem
}

const SectionListItemInfo: React.FC<IProps> = ({item}) => {
  return (
    <div className="section-list-item-info">
        <h3>{item.title}</h3>
        <p className='item-highlight'>{item.highlight}</p>
        <p className='item-date'>{item.date}</p>
        <p className='item-desc'>{item.desc}</p>
    </div>
  )
}

export default SectionListItemInfo