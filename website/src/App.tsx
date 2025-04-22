import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './layouts/home-page/home-page.component';
import ProjectsPage from './layouts/projects-page/projects-page.component';
import EducationPage from './layouts/education-page/education-page.component';
import ContactPage from './layouts/contact-page/contact-page.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo, setHasLoaded } from './redux/info-slice';
import { AppDispatch, RootState } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, education, skills, files, hasLoaded, storedDate } = useSelector((state: RootState) => state.info);
  const RESET_DATA_AFTER_DAYS = 2;
  
  useEffect(() => {
    if(((new Date().getTime() - new Date(storedDate).getTime()) / (1000 * 3600 * 24)) >= RESET_DATA_AFTER_DAYS) {
      dispatch(setHasLoaded(false));
    }

    if(!hasLoaded) {
      dispatch(getInfo());
      console.log("Data Loaded.");
    }
  }, [dispatch, hasLoaded, storedDate]);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage projectsList={projects} educationList={education} skillsList={skills} filesList={files} />}/>
        <Route path='/projects' element={<ProjectsPage projectsList={projects} />}/>
        <Route path='/education' element={<EducationPage educationList={education} />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
