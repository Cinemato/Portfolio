import React from 'react'
import SectionTitle from '../section-title/section-title.component'
import ViewAllButton from '../view-all-button/view-all-button.component'
import SectionListItem from '../section-list-item/section-list-item.component'
import { Link } from 'react-router-dom'

import { ListItem } from '../../data/interfaces'
import './section-list.component.css'

interface IProps {
    path: string,
    title: string,
    items: ListItem[]
}

const SectionList: React.FC<IProps> = ({path, items, title}) => {
    return (
        <div className="section-list-container">
            <SectionTitle title={title} />
            <div className="section-list-items-container">
                {items.map(item => {
                    return <SectionListItem item={item} key={item.id} />
                })}
            </div>
            <Link to={path}><ViewAllButton content='View all'/></Link>
        </div>
    )
}

export default SectionList