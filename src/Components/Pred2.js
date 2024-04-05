import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import afg from "../Assets/afg.png";
import arunachal_Dept from "../Assets/predict2/Arunachal_Dept.jpg";
import arunachal_mag from "../Assets/predict2/Arunachal_Mag.jpg";
import arunachal from "../Assets/arunachal.png";
import assam_Dept from "../Assets/predict2/Assam_Dept.jpg";
import assam_mag from "../Assets/predict2/Assam_Mag.jpg";
import assam from "../Assets/assam.png";
import bangladesh_Dept from "../Assets/predict2/Bangla_Dept.jpg";
import bangladesh_mag from "../Assets/predict2/Bangla_Mag.jpg";
import bangladesh from "../Assets/bangladesh.png";
import bb_Dept from "../Assets/predict2/BOB_Dept.jpg";
import bb_mag from "../Assets/predict2/BOB_Mag.jpg";
import bhutan_Dept from "../Assets/predict2/Bhutan_Dept.jpg";
import bhutan_mag from "../Assets/predict2/Bhutan_Mag.jpg";
import bhutan from "../Assets/bhutan.png";
import bob from "../Assets/bob.png";
import hp_Dept from "../Assets/predict2/Hima_Dept.jpg";
import hp_mag from "../Assets/predict2/Hima_Mag.jpg";
import hp from "../Assets/hp.png";
import hindu_Dept from "../Assets/predict2/Hindu_Dept.jpg";
import hindu_mag from "../Assets/predict2/Hindukush_Mag.jpg";
import kashmir_Dept from "../Assets/predict2/Kash_Dept.jpg";
import kashmir_mag from "../Assets/predict2/Kash_Mag.jpg";
import kashmir from "../Assets/kashmir.png";
import nepal_Dept from "../Assets/predict2/Nepal_Dept.jpg";
import nepal_mag from "../Assets/predict2/Nepal_Mag.jpg";
import nepal from "../Assets/nepal.png";
import pak_Dept from "../Assets/predict2/Pakistan_Dept.jpg";
import pak_mag from "../Assets/predict2/Pakistan_Mag.jpg";
import pak from "../Assets/pak.png";
import sikkim_Dept from "../Assets/predict2/sikkim_Dept.jpg";
import sikkim_mag from "../Assets/predict2/sikkim_Mag.jpg";
import sikkim from "../Assets/sikkim.png";
import sumatra_Dept from "../Assets/predict2/Sumatra_Dept.jpg";
import sumatra_mag from "../Assets/predict2/Sumatra_Mag.jpg";
import sumatra from "../Assets/sumatra.png";
import PredictNavbar from "./PredictNavbar";
/*import world_Dept from "../Assets/world_freq.png";
import world_mag from "../Assets/world_mag.png";
import world from "../Assets/world.png";*/

const Pred2 = () => {
  const [region, setRegion] = useState("Arunachal Pradesh");
  const optionImages = {
    "Arunachal Pradesh": {
      image: arunachal,
      deptImage: arunachal_Dept,
      magImage: arunachal_mag
    },
    "Assam": {
      image: assam,
      deptImage: assam_Dept,
      magImage: assam_mag
    },
    "Bangladesh": {
      image: bangladesh,
      deptImage: bangladesh_Dept,
      magImage: bangladesh_mag
    },
    "Bhutan": {
      image: bhutan,
      deptImage: bhutan_Dept,
      magImage: bhutan_mag
    },
    "Bay of Bengal": {
      image: bob,
      deptImage: bb_Dept,
      magImage: bb_mag
    },
    "Himachal Pradesh": {
      image: hp,
      deptImage: hp_Dept,
      magImage: hp_mag
    },
    "Hindukush": {
      image: afg,
      deptImage: hindu_Dept,
      magImage: hindu_mag
    },
    "Kashmir": {
      image: kashmir,
      deptImage: kashmir_Dept,
      magImage: kashmir_mag
    },
    "Nepal": {
      image: nepal,
      deptImage: nepal_Dept,
      magImage: nepal_mag
    },
    "Pakistan": {
      image: pak,
      deptImage: pak_Dept,
      magImage: pak_mag
    },
    "Sikkim": {
      image: sikkim,
      deptImage: sikkim_Dept,
      magImage: sikkim_mag
    },
    "Sumatra": {
      image: sumatra,
      deptImage: sumatra_Dept,
      magImage: sumatra_mag
    },
    /*"World": {
      image: world,
      deptImage: world_Dept,
      magImage: world_mag
    }*/
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    
    <div className="home-container">
        <PredictNavbar /> 
      <div className="home-banner-container" style={{ display: "flex", flexDirection: "column" }}>
        <div className="pred2-container">
        <p className="primary-text" style={{ textAlign: "left", marginBottom: "20px" }}>
        PREDICTION: The predicted values plotting for the depth-frequency graph and magnitude-time graph, generated using a neural network ML model, provide visual insights into seismic activity. The depth-frequency graph illustrates the distribution of earthquakes at different depths over time, while the magnitude-time graph displays the occurrence of earthquakes of varying magnitudes over time. These plots offer a concise representation of seismic trends.
        Select the required place from the Himalayan-Alpine-Indonesian belt in the Indian subcontinent:
        </p>
        <div className="dropdown-container">
          <select value={region} onChange={handleRegionChange} style={{ padding: "10px", fontSize: "16px", marginBottom: "20px"}}>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bay of Bengal">Bay of Bengal</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Hindukush">Hindukush, Afghanistan</option>            
            <option value="Kashmir">Kashmir</option>
            <option value="Nepal">Nepal</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Sumatra">Sumatra</option>
          </select>
          <img src={optionImages[region].image} alt={`Selected ${region}`} style={{ width: "1000px", height: "auto", marginBottom: "20px" }} />
          </div>
        </div>
        <div className="image-container">
          <div style={{ display: "flex" }}>
            <div>
              <img src={optionImages[region].deptImage} alt={`Selected ${region}`} style={{ width: "2000px", height: "300px", marginRight: "20px" }} />
            </div>
            <div>
              <img src={optionImages[region].magImage} alt={`Selected ${region}`} style={{ width: "2000px", height: "300px", marginBottom: "20px" }} />
            </div>
          </div>
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pred2;
