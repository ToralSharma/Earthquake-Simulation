import React from 'react'
import PickMeals from "../Assets/acquisation.png";
import ChooseMeals from "../Assets/preprossing.jpeg";
import neuralNetworks from "../Assets/NN.png";
import DeliveryMeals from "../Assets/extraction.png";
const Work = () => {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Data Acquisition",
          text: "Advanced National Seismic System (ANSS), National Earthquake Information Center (NEIC). ",
        },
        {
          image: ChooseMeals,
          title: "Visualization",
          text: "Earthquake visualization on the website is accomplished through interactive graphical representation using data points and mapping techniques.",
        },
        {
          image: DeliveryMeals,
          title: "Simulation",
          text: "Earthquake simulation on the website is achieved through modeling, simulating seismic activity based on user interactions.",
        },
        {
          image: neuralNetworks,
          title: "Model Training",
          text: "Model training for earthquake prediction on the website is accomplished through MATLAB, utilizing algorithms and datasets to train predictive models for seismic events.",
        },
      ];
    return (

    <div className="work-section-wrapper" id="work">
        <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading"  style={{ color: 'black'}}>How It Works</h1>
        <p className="primary-text">
          By analyzing seismic datasets using Neural Networks, we created various graphs representing the Himalayan Alpine belt. 
          We are showcasing the graphs for different regions using various factors.

          Model consists of four phases
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
       
}

export default Work