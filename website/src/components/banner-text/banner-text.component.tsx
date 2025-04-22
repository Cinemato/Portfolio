import React from 'react'
import './banner-text.component.css';
import TypewriterComponent from 'typewriter-effect';
import { File } from '../../data/interfaces';
// import Resume from '../../assets/files/Khaled_Al Hariri_Resume.pdf';

interface IProps {
  filesList: File[]
}

const BannerText: React.FC<IProps> = ({filesList}) => {
  return (
    <div className="banner-text">
        <h2>Hello!</h2>
        <h3>I'm Khaled Al Hariri</h3>
        <div className="animated-text">
          <h3>a</h3>
          <span>
            <TypewriterComponent 
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Back-End Developer",
                  "Front-End Developer",
                  "Full Stack Developer",
                  "Software Engineer",
                  "DevOps Engineer"
                ],
              }}
            />
          </span>
        </div>
        <a href={filesList.find(f => f.id === "resume")?.url} download="Khaled_Al Hariri_Resume" target='_blank' rel='noreferrer'>
          <button type='button'>Download Resume</button>
        </a>
    </div>
  )
}

export default BannerText