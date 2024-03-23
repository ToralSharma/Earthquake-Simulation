import React from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/quack1.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home-container" id="home">
       <Navbar/>
       <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" style={{ color: 'black'}}>
            First to Visualise Faster to react
          </h1>
          <p className="primary-text">
            Stay ahead of seismic shifts with lightning-fast visualisations , ensuring accuracy before the
            ground even begins to rumble.
          </p>
          <button className="primary-button" style={{ backgroundColor: 'orange' }}>Predict Now</button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;
