import React from "react";

const Contact = () => {
  return (
    <div id="contact-us-section">
    <div className="contact-page-wrapper">
      <h1 className="primary-heading"  style={{ color: 'black'}}>Have Any Questions In Mind?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Ask us anything" />
        <button className="secondary-button">Go</button>
      </div>
      <h5 className="primary-heading"  style={{ color: 'black'}}>For more questions</h5>
      <br></br>
      <a href="mailto:ritikaagarwal111222@gmail.com">our mail</a>
    </div>
    </div>
  )
};

export default Contact;