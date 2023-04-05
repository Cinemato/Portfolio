import React, { useState, useEffect } from 'react'
import './form-textarea.component.css'

interface IProps {
    name: string,
    label: string,
    hasSent: boolean
}

const FormTextarea: React.FC<IProps> = ({name, label, hasSent}) => {
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
        <textarea name={name} id="" cols={30} rows={10} required value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default FormTextarea