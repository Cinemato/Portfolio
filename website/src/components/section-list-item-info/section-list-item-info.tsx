import React from 'react'
import { ListItem } from '../../data/interfaces'
import SectionButton from '../section-button/section-button.component'
import './section-list-item-info.css'

interface IProps {
  item: ListItem
}

const SectionListItemInfo: React.FC<IProps> = ({item}) => {
  return (
    <div className="section-list-item-info">
        <div className="item-title">
          <h3>{item.title}</h3>
          <SectionButton />
        </div>
        <div className="item-date-highlight-container">
          <p className='item-date'>{item.date}</p>
          <p className='item-highlight'>{item.highlight}</p>
        </div>
        <p className='item-desc'>{item.desc}</p>
    </div>
  )
}

export default SectionListItemInfo