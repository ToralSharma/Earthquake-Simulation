import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading"  style={{ color: 'black'}}>Have Question In Mind?</h1>
      <h1 className="primary-heading"  style={{ color: 'black'}}>Read our Review Paper</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="our review paper link" />
        <button className="secondary-button">Go</button>
      </div>
      <h5 className="primary-heading"  style={{ color: 'black'}}>For more questions</h5>
      <br></br>
      <a href="mailto:ritikaagarwal111222@gmail.com">our mail</a>
    </div>
  )
};

export default Contact;