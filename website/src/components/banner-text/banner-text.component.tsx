import React from 'react'
import './banner-text.component.css';
import TypewriterComponent from 'typewriter-effect';

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
        <button type='button'>Download Resume</button>
    </div>
  )
}

export default BannerText