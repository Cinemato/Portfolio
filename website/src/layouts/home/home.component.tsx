import React from 'react'
import Banner from '../../components/banner/banner.component'
import NavBar from '../../components/nav-bar/nav-bar.component';
import './home.component.css';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Banner />
    </div>
  )
}

export default Home;