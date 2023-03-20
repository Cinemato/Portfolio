import React, { useState, useEffect } from 'react';
import './banner-skills.component.css';
import SKILLS_DATA, { Skill } from '../../data/skills';


let firstRender = true;

const BannerSkills = () => {
  const CREATE_CIRCLE_MS = 5000;
  const ARRAY_OF_SKILLS: Skill[] = [];

  useEffect(() => {
    if(!firstRender) {
      return;
    }

    const skillsContainer = document.getElementsByClassName('banner-skills-container')[0];
    let prevInitPos = Math.floor(Math.random() * 1650) - 150;

    const createDiagonalCircle = (): void => {
      const circle = document.createElement('div');
      circle.classList.add('skill-circle');
      skillsContainer.appendChild(circle);
      const logo = document.createElement('img');
      let randomSkill = SKILLS_DATA[Math.floor(Math.random() * SKILLS_DATA.length)];
      
      while(ARRAY_OF_SKILLS.indexOf(randomSkill) >= 0) {
        randomSkill = SKILLS_DATA[Math.floor(Math.random() * SKILLS_DATA.length)];
      }

      logo.src = randomSkill.img;
      ARRAY_OF_SKILLS.push(randomSkill);
      circle.appendChild(logo);

      let size = Math.floor(Math.random() * 70) + 70;
      circle.style.width = size + 'px';
      circle.style.height = size + 'px';

      let posTop = -150;
      let posLeft = Math.floor(Math.random() * (window.screen.width * 0.85)) - (window.screen.width * 0.08);

      while(Math.abs(posLeft - prevInitPos) < (window.screen.width * 0.13)) {
        posLeft = Math.floor(Math.random() * (window.screen.width * 0.85)) - (window.screen.width * 0.08);
      }
      
      prevInitPos = posLeft;
      let moveCirclesInterval = setInterval(frame, size - (size * 0.65));
      
      function frame() {
        if (posTop === 600) {
          skillsContainer.removeChild(circle);
          ARRAY_OF_SKILLS.splice(ARRAY_OF_SKILLS.indexOf(randomSkill), 1);
          clearInterval(moveCirclesInterval);
        } else {
          posTop++;
          posLeft++;
          circle.style.top = posTop + 'px';
          circle.style.left = posLeft + 'px';
          circle.style.visibility = 'visible';
        }
      }

      firstRender = false;
    }

    createDiagonalCircle();

    const spawnCirclesInterval = setInterval(createDiagonalCircle, CREATE_CIRCLE_MS);

    return () => clearInterval(spawnCirclesInterval);
  }, [])

  return (
    <div className="banner-skills-container"></div>
  )
}

export default BannerSkills