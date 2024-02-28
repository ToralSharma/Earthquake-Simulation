import React from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/quack1.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className="home-container">
       <Navbar/>
       <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" style={{ color: 'black'}}>
            First to Predict Faster to react
          </h1>
          <p className="primary-text">
            Stay ahead of seismic shifts with lightning-fast predictins, ensuring safety before the
            ground even begins to rumble.
          </p>
          <button className="secondary-button">
            Start Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Home