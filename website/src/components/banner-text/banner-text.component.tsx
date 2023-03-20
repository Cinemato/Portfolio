import React, { useEffect } from 'react'
import './banner-text.component.css';

const BannerText = () => {
  
  setTimeout(() => {
    const animatedText = document.getElementsByClassName('animated-text')[0];

    const changeAnimatedText = (): void => {
      setTimeout(() => {
        console.log(animatedText);
        animatedText.textContent = "Back-End Web Developer";
      }, 0)
  
      setTimeout(() => {
        animatedText.textContent = "Front-End Web Developer";
      }, 4000)
  
      setTimeout(() => {
        animatedText.textContent = "Full Stack Web Developer";
      }, 8000)
  
      setTimeout(() => {
        animatedText.textContent = "Software Engineer";
      }, 12000)
    }

  changeAnimatedText();
  setInterval(changeAnimatedText, 16000);
  }, 1);

  return (
    <div className="banner-text">
        <h2>Hello!</h2>
        <h3>I'm Khaled Al Hariri</h3>
        <h3>a <span className='animated-text'>Back-End Web Developer</span></h3>
        <button type='button'>Download Resume</button>
    </div>
  )
}

export default BannerText