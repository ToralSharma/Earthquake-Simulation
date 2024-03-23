import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/quack2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className='about-section-container' id="About">
         <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" style={{ height: '450px', width: '450px'}}/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading"  style={{ color: 'black'}}>
          Quakes: Earth's harsh reminder, leaving scares unseen
        </h1>
        <p className="primary-text">
        Earthquakes can trigger devastating disasters, including tsunamis, landslides, and building collapses, 
        resulting in loss of life and infrastructure damage. 
        Predicting earthquakes is crucial for implementing 
        timely evacuation plans, reinforcing infrastructure resilience, and minimizing casualties and 
        economic losses through early warning systems and preparedness measures.
        </p>
        
      </div>
    </div>
  )
}

export default About