import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './layouts/home-page/home-page.component';
import ProjectsPage from './layouts/projects-page/projects-page.component';
import EducationPage from './layouts/education-page/education-page.component';
import ContactPage from './layouts/contact-page/contact-page.component';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path='/projects' element={<ProjectsPage />}/>
      <Route path='/education' element={<EducationPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
    </Routes>
  );
}

export default App;
