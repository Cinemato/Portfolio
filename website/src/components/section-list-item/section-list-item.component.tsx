import React from 'react'
import './section-list-item.component.css'
import SectionListItemInfo from '../section-list-item-info/section-list-item-info'
import { ListItem } from '../../data/interfaces'

interface IProps {
  item: ListItem
}

const SectionListItem: React.FC<IProps> = ({item}) => {
  return (
    <div className="section-list-item">
        <div className='section-list-item-image'>
          <img src={item.img} alt="" />
        </div>
        <SectionListItemInfo item={item} />
    </div>
  )
}

export default SectionListItem