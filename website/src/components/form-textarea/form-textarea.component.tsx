import React from 'react'
import './form-textarea.component.css'

interface IProps {
    name: string,
    label: string
}

const FormTextarea: React.FC<IProps> = ({name, label}) => {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <textarea name={name} id="" cols={30} rows={10}></textarea>
    </div>
  )
}

export default FormTextarea