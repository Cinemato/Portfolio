import React from 'react'
import './section-list-item.component.css'
import SectionButton from '../section-button/section-button.component'
import SectionListItemInfo from '../section-list-item-info/section-list-item-info'
import { ListItem } from '../../data/interfaces'

interface IProps {
  item: ListItem
}

const SectionListItem: React.FC<IProps> = ({item}) => {
  return (
    <div className="section-list-item">
        <div className='item-img' style={{backgroundImage: 'url(' + item.img + ')'}}></div>
        <SectionListItemInfo item={item} />
        <SectionButton />
    </div>
  )
}

export default SectionListItem