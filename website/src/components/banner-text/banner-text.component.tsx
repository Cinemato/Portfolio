import React, { useEffect } from 'react'
import './banner-text.component.css';
import TypewriterComponent from 'typewriter-effect';

const BannerText = () => {
  
  // setTimeout(() => {
  //   const animatedText = document.getElementsByClassName('animated-text')[0];

  //   const changeAnimatedText = (): void => {
  //     setTimeout(() => {
  //       console.log(animatedText);
  //       animatedText.textContent = "Back-End Web Developer";
  //     }, 0)
  
  //     setTimeout(() => {
  //       animatedText.textContent = "Front-End Web Developer";
  //     }, 4000)
  
  //     setTimeout(() => {
  //       animatedText.textContent = "Full Stack Web Developer";
  //     }, 8000)
  
  //     setTimeout(() => {
  //       animatedText.textContent = "Software Engineer";
  //     }, 12000)
  //   }

  // changeAnimatedText();
  // setInterval(changeAnimatedText, 16000);
  // }, 1);

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
                  "Back-End Web Developer",
                  "Front-End Web Developer",
                  "Full Stack Web Developer",
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