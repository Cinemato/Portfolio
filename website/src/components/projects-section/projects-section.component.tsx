import React from 'react'
import './projects-section.component.css'
import SectionTitle from '../section-title/section-title.component'
import ProjectImage from '../../assets/projects/portfolio-home.jpg'

const ProjectsSection = () => {
  return (
    <div className="projects-section-container">
        <SectionTitle title="Projects & Works" />
        <div className="projects-container">
            <div className="project">
                <img src={ProjectImage} alt="project-image" width="20%" />
                <div className="project-info">
                    <h3>Portfolio Website</h3>
                    <div className='project-skills'>
                        <p>React</p>
                        <p>&nbsp;/ JavaScript</p>
                        <p>&nbsp;/ HTML /</p>
                        <p>&nbsp;CSS</p>
                    </div>
                    <p className='project-date'>Completed in: 23/03/2023</p>
                    <p className='project-for'>For: Personal Project</p>
                    <p className='project-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam magna, facilisis nec sodales posuere, fringilla vel quam. Praesent eget pulvinar orci, vitae vestibulum mi. Donec dapibus rhoncus condimentum. Praesent pharetra elit et enim venenatis tempus. Praesent commodo vehicula est. Nunc hendrerit vitae metus eu cursus. Mauris imperdiet turpis justo, eget ornare elit egestas suscipit. Sed enim mi, varius eget quam et, dapibus euismod eros.</p>
                </div>
                <button type='button'>Open</button>
            </div>
            <div className="project">
                <img src={ProjectImage} alt="project-image" width="20%" />
                <div className="project-info">
                    <h3>Portfolio Website</h3>
                    <div className='project-skills'>
                        <p>React</p>
                        <p>&nbsp;/ JavaScript</p>
                        <p>&nbsp;/ HTML /</p>
                        <p>&nbsp;CSS</p>
                    </div>
                    <p className='project-date'>Completed in: 23/03/2023</p>
                    <p className='project-for'>For: Personal Project</p>
                    <p className='project-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam magna, facilisis nec sodales posuere, fringilla vel quam. Praesent eget pulvinar orci, vitae vestibulum mi. Donec dapibus rhoncus condimentum. Praesent pharetra elit et enim venenatis tempus. Praesent commodo vehicula est. Nunc hendrerit vitae metus eu cursus. Mauris imperdiet turpis justo, eget ornare elit egestas suscipit. Sed enim mi, varius eget quam et, dapibus euismod eros.</p>
                </div>
                <button type='button'>Open</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection