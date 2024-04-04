import React from "react";

const Contact = () => {
  return (
    <div id="contact-us-section">
    <div className="contact-page-wrapper">
      <h1 className="primary-heading"  style={{ color: 'black'}}>Have Any Questions In Mind?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Ask us anything" />
        <a href="mailto:ritikaagarwal111222@gmail.com"><button className="secondary-button">Go</button></a>
      </div>
    </div>
    </div>
  )
};

export default Contact;

// ContactForm.js

// ContactForm.js

// ContactForm.js

// ContactForm.js




// import React, { useState } from 'react';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const json = JSON.stringify(formData);

//         // Submit form data using fetch API
//         fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status === 200) {
//                 console.log(json.message); // Optionally, you can handle the response here
//             } else {
//                 console.log(response);
//                 console.error(json.message);
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             console.error("Something went wrong!");
//         });

//         // Reset form fields after submission
//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };

//     const sendEmail = () => {
//         const { name, email, message } = formData;
//         const subject = encodeURIComponent('Question/Inquiry');
//         const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
//         window.location.href = `mailto:toralsharma31@gmail.com?subject=${subject}&body=${body}`;
//     };

//     return (
//       <div id="contact-us-section">
//         <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '500px', margin: '0 auto' }}>
//             <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//             <input type="hidden" name="access_key" value="530591d8-8788-497c-9f1f-4bce32935736"/>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', minHeight: '100px' }}
//                     ></textarea>
//                 </div>
//                 <button type="submit" style={{ display: 'block', width: '100%', padding: '12px 0', fontSize: '1.2em', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit</button>
//             </form>
//         </div>
//         </div>
//     );
// }

// export default Contact;


// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const json = JSON.stringify(formData);

//         // Submit form data using fetch API
//         fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status === 200) {
//                 console.log(json.message); // Optionally, you can handle the response here
//             } else {
//                 console.log(response);
//                 console.error(json.message);
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             console.error("Something went wrong!");
//         });

//         // Reset form fields after submission
//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();
//         const { name, email, message } = formData;
//         // const form = document.getElementById('contact-form');

//         // Define sender and receiver email addresses
//         const senderEmail = email; // Assuming sender's email is entered in the form
//         const receiverEmail = 'toralsharma2003@gmail.com'; // Replace with the receiver's email address
    
//         // Send email using emailjs-com library
//         emailjs.sendForm('service_yu6nbbh', 'template_3xnubin', e.target, 'hyweGtIM-zebCvBjA')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.error(error.text);
//             });
    
//         // Reset form fields after sending email
//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };
    

//     return (
//         <div id="contact-us-section">
//             <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '500px', margin: '0 auto' }}>
//                 <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
//                 <form id="contact-form" onSubmit={handleSubmit}>
//                     <input type="hidden" name="access_key" value="530591d8-8788-497c-9f1f-4bce32935736"/>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
//                         />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
//                         />
//                     </div>
//                     <div style={{ marginBottom: '15px' }}>
//                         <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', minHeight: '100px' }}
//                         ></textarea>
//                     </div>
//                     {/* <button type="submit" style={{ display: 'block', width: '100%', padding: '12px 0', fontSize: '1.2em', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit</button> */}
//                 </form>
//                 <button onClick={sendEmail} style={{ display: 'block', width: '100%', padding: '12px 0', fontSize: '1.2em', backgroundColor: 'orange', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', marginTop: '10px' }}>Send Email</button>
//             </div>
//         </div>
//     );
// }

// export default Contact;
