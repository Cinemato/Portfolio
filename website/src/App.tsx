import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './layouts/home/home.component';

function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
  );
}

export default App;
