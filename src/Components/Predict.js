import React from "react";
import { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import afg_freq from "../Assets/afg_freq.png";
import afg_mag from "../Assets/afg_mag.png";
import afg from "../Assets/afg.png";
import arunachal_freq from "../Assets/arunachal_freq.png";
import arunachal_mag from "../Assets/arunachal_mag.png";
import arunachal from "../Assets/arunachal.png";
import assam_freq from "../Assets/assam_freq.png";
import assam_mag from "../Assets/assam_mag.png";
import assam from "../Assets/assam.png";
import bangladesh_freq from "../Assets/bangladesh_freq.png";
import bangladesh_mag from "../Assets/bangladesh_mag.png";
import bangladesh from "../Assets/bangladesh.png";
import bb_freq from "../Assets/bb_freq.png";
import bb_mag from "../Assets/bb_mag.png";
import bhutan_freq from "../Assets/bhutan_freq.png";
import bhutan_mag from "../Assets/bhutan_mag.png";
import bhutan from "../Assets/bhutan.png";
import bob from "../Assets/bob.png";
import final_freq from "../Assets/final_freq.png";
import final_mag from "../Assets/final_mag.png";
import hp_freq from "../Assets/hp_freq.png";
import hp_mag from "../Assets/hp_mag.png";
import hp from "../Assets/hp.png";
import kashmir_freq from "../Assets/kashmir_freq.png";
import kashmir_mag from "../Assets/kashmir_mag.png";
import kashmir from "../Assets/kashmir.png";
import nepal_freq from "../Assets/nepal_freq.png";
import nepal_mag from "../Assets/nepal_mag.png";
import nepal from "../Assets/nepal.png";
import pak_freq from "../Assets/pak_freq.png";
import pak_mag from "../Assets/pak_mag.png";
import pak from "../Assets/pak.png";
import sikkim_freq from "../Assets/sikkim_freq.png";
import sikkim_mag from "../Assets/sikkim_mag.png";
import sikkim from "../Assets/sikkim.png";
import sumatra_freq from "../Assets/sumatra_freq.png";
import sumatra_mag from "../Assets/sumatra_mag.png";
import sumatra from "../Assets/sumatra.png";
import final from "../Assets/final.png";
import world_freq from "../Assets/world_freq.png";
import world_mag from "../Assets/world_mag.png";
import world from "../Assets/world.png";
import Pred2Navbar from "./Pred2Navbar";

const Predict = () => {
  const [region, setRegion] = useState("Final");
  const optionImages = {
    "Afghanistan": {
      image: afg,
      freqImage: afg_freq,
      magImage: afg_mag
    },
    "Arunachal Pradesh": {
      image: arunachal,
      freqImage: arunachal_freq,
      magImage: arunachal_mag
    },
    "Assam": {
      image: assam,
      freqImage: assam_freq,
      magImage: assam_mag
    },
    "Bangladesh": {
      image: bangladesh,
      freqImage: bangladesh_freq,
      magImage: bangladesh_mag
    },
    "Bhutan": {
      image: bhutan,
      freqImage: bhutan_freq,
      magImage: bhutan_mag
    },
    "Bay of Bengal": {
      image: bob,
      freqImage: bb_freq,
      magImage: bb_mag
    },
    "Final": {
      image: final,
      freqImage: final_freq,
      magImage: final_mag
    },
    "Himachal Pradesh": {
      image: hp,
      freqImage: hp_freq,
      magImage: hp_mag
    },
    "Kashmir": {
      image: kashmir,
      freqImage: kashmir_freq,
      magImage: kashmir_mag
    },
    "Nepal": {
      image: nepal,
      freqImage: nepal_freq,
      magImage: nepal_mag
    },
    "Pakistan": {
      image: pak,
      freqImage: pak_freq,
      magImage: pak_mag
    },
    "Sikkim": {
      image: sikkim,
      freqImage: sikkim_freq,
      magImage: sikkim_mag
    },
    "Sumatra": {
      image: sumatra,
      freqImage: sumatra_freq,
      magImage: sumatra_mag
    },
    // "World": {
    //   image: world,
    //   freqImage: world_freq,
    //   magImage: world_mag
    // }
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="home-container">
      <Pred2Navbar />
      <div className="home-banner-container" style={{ display: "flex", flexDirection: "column" }}>
      <div className="pred2-container">
        <p className="primary-text" style={{ textAlign: "left", marginBottom: "20px" }}>
        Our interactive graphs and maps provide a clear and intuitive representation of earthquake data, including magnitude, location, and frequency. Visualize seismic trends effortlessly, empowering you to analyze patterns, monitor seismic activity, and make informed decisions for safety and preparedness. 
        Select the required place from the Himalayan-Alpine-Indonesian belt in the Indian subcontinent.
        </p>
        <div className="dropdown-container">
          <select value={region} onChange={handleRegionChange} style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}>
          <option value="Final">Himalayan-Indonesian-Alpine belt</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bay of Bengal">Bay of Bengal</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Afghanistan">Hindukush, Afghanistan</option>
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
              <img src={optionImages[region].freqImage} alt={`Selected ${region}`} style={{ width: "2000px", height: "350px", marginRight: "20px" }} />
            </div>
            <div>
              <img src={optionImages[region].magImage} alt={`Selected ${region}`} style={{ width: "2000px", height: "350px", marginBottom: "20px" }} />
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

export default Predict;