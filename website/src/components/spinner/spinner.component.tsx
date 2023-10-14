import React from 'react'
import {ReactComponent as SpinnerSVG} from '../../assets/spinner.svg';
import "./spinner.component.css";

const Spinner = () => {
  return (
    <div className="spinner">
        <SpinnerSVG />
    </div>
  )
}

export default Spinner