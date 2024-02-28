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
          title: "Preprocessing",
          text: "Filtering and reformatting of the acquired data by MATLAB.",
        },
        {
          image: DeliveryMeals,
          title: "Feature extraction",
          text: "Reducing the initial set of raw data to more manageable groups for processing.",
        },
        {
          image: neuralNetworks,
          title: "Neural Network Training and Testing",
          text: "Network constructed with different configurations is trained and tested using Back-propagation.",
        },
      ];
    return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading"  style={{ color: 'black'}}>How It Works</h1>
        <p className="primary-text">
          By analyzing seismic datasets using Neural Networks we created a model. 
          We used NN hidden layers with feedforward technique to eliminate error in earthquake prediction.
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