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
    items: ListItem[],
    count: number
}

const SectionList: React.FC<IProps> = ({path, title, items, count}) => {
    return (
        <div className="section-list-container">
            <SectionTitle title={title} />
            <div className="section-list-items-container">
                {[...items].sort((a,b) => a.order - b.order).map((item, index) => {
                    if(index < count)
                        return <SectionListItem item={item} key={item.id} />
                })}
            </div>
            <Link to={path}><ViewAllButton content='View all' onClick={() => {}} /></Link>
        </div>
    )
}

export default SectionList