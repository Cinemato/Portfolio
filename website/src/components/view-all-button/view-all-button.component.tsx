import React from 'react';
import './view-all-button.component.css';

interface IProps {
  content: string,
  onClick: () => void
}

const ViewAllButton: React.FC<IProps> = ({content, onClick}) => {
  return (
    <button className='view-all' type='button' onClick={onClick}>{content}</button>
  )
}

export default ViewAllButton