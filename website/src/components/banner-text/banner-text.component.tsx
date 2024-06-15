import React from 'react'
import './banner-text.component.css';
import TypewriterComponent from 'typewriter-effect';
import Resume from '../../assets/files/Khaled_Al Hariri_Resume.pdf';

const BannerText = () => {
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
                  "Software Engineer"
                ],
              }}
            />
          </span>
        </div>
        <a href={Resume} download="Khaled_Al Hariri_Resume" target='_blank' rel='noreferrer'>
          <button type='button'>Download Resume</button>
        </a>
    </div>
  )
}

export default BannerText