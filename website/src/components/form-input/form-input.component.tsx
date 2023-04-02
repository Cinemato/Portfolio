import React from 'react'
import './form-input.component.css'

interface IProps {
    name: string,
    label: string
}

const FormInput: React.FC<IProps> = ({name, label}) => {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} />
    </div>
  )
}

export default FormInput