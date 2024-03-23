import React from 'react'
import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {
  return (
    <div className="work-section-wrapper" id="Testimonials">
        <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading"  style={{ color: 'black'}}>Our Mentor</h1>
        <p className="primary-text">
         Your suggesstions value the most !
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
          If you have any suggesstions please contact the below mentioned names...
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Dr. Pooja Asopa</h2>
      </div>
    </div>
  )
}

export default Testimonials