import React from 'react';
import './view-all-button.component.css';

interface IProps {
  content: string
}

const ViewAllButton: React.FC<IProps> = ({content}) => {
  return (
    <button className='view-all' type='button'>{content}</button>
  )
}

export default ViewAllButton