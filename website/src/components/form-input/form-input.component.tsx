import React, { useState, useEffect } from 'react'
import './form-input.component.css'

interface IProps {
    type: string,
    name: string,
    label: string,
    hasSent: boolean
}

const FormInput: React.FC<IProps> = ({type, name, label, hasSent}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if(hasSent) {
      setInputValue("");
    }
  }, [hasSent])

  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} required value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default FormInput