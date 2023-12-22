import { useEffect, useRef } from 'react';
import './banner-skills.component.css';
import { Skill } from '../../data/interfaces';

interface IProps {
  skillsList: Skill[]
}

const BannerSkills: React.FC<IProps> = ({skillsList}) => {
  const CREATE_CIRCLE_MS = 4500;
  const CREATE_CIRCLE_MS_MOBILE = 7000;
  const ARRAY_OF_SKILLS: Skill[] = [];
  const isFirstRender = useRef(true);
  const spawnCirclesIntervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if(skillsList.length > 0) {
      const skillsContainer = document.getElementsByClassName('banner-skills-container')[0];
      let minScreenSize = window.innerWidth * 0.08
      let maxScreenSize = window.innerWidth * 0.85
      let maxCircles = 6;
      let prevInitPos = Math.floor(Math.random() * maxScreenSize) - minScreenSize;
  
      const createDiagonalCircle = () => {
        if(window.innerWidth <= 550) {
          minScreenSize = window.innerWidth * 0.8
          maxCircles = 4;
        }
        else {
          minScreenSize = window.innerWidth * 0.08
          maxCircles = 6;
        }
  
        if(ARRAY_OF_SKILLS.length >= maxCircles) {
          return;
        }
        
        const circle = document.createElement('div');
        circle.classList.add('skill-circle');
        skillsContainer.appendChild(circle);
        const logo = document.createElement('img');
        let randomSkill = skillsList[Math.floor(Math.random() * skillsList.length)];
        
        while(ARRAY_OF_SKILLS.indexOf(randomSkill) >= 0) {
          randomSkill = skillsList[Math.floor(Math.random() * skillsList.length)];
        }
  
        logo.src = randomSkill.image;
        ARRAY_OF_SKILLS.push(randomSkill);
        circle.appendChild(logo);
  
        let size = Math.floor(Math.random() * 70) + 70;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
  
        let posTop = -150;
        let posLeft = Math.floor(Math.random() * maxScreenSize) - minScreenSize;
  
        while(Math.abs(posLeft - prevInitPos) < (window.innerWidth * 0.13)) {
          posLeft = Math.floor(Math.random() * maxScreenSize) - minScreenSize;
        }
        
        prevInitPos = posLeft;
        let moveCirclesInterval = setInterval(frame, size - (size * 0.65));
        
        function frame() {
          if (posTop === 500) {
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
        
        isFirstRender.current = false;
      }
  
      if (isFirstRender.current) {
        createDiagonalCircle();
        spawnCirclesIntervalRef.current = setInterval(
          createDiagonalCircle,
          window.innerWidth <= 500 ? CREATE_CIRCLE_MS_MOBILE : CREATE_CIRCLE_MS
        );
      }

      const handleBlur = () => {
        // Use setTimeout to allow for a grace period before clearing the interval
        setTimeout(() => {
          clearInterval(spawnCirclesIntervalRef.current!);
          spawnCirclesIntervalRef.current = null;
        }, 1000); // Adjust the delay as needed
      };
  
      const handleFocus = () => {
        if (!spawnCirclesIntervalRef.current) {
          createDiagonalCircle();
          spawnCirclesIntervalRef.current = setInterval(
            createDiagonalCircle,
            window.innerWidth <= 500 ? CREATE_CIRCLE_MS_MOBILE : CREATE_CIRCLE_MS
          );
        }
      };
  
      window.addEventListener('blur', handleBlur);
      window.addEventListener('focus', handleFocus);

      return () => {
        clearInterval(spawnCirclesIntervalRef.current!);
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, [skillsList])

  return (
    <div className="banner-skills-container"></div>
  )
}

export default BannerSkills