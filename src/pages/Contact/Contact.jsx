import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="section-title">Talk to Us</h2>
        <p className="section-subtitle">Get in touch with our team</p>
        <div className="contact-form">
          <input type="text" className="form-input" placeholder="Your Name" />
          <input type="email" className="form-input" placeholder="Your Email" />
          <textarea className="form-input" placeholder="Your Message"></textarea>
          <button className="form-button">Send</button>
        </div>
        <div className="contact-info">
          <div className="info-box">
            <h3 className="info-title">Office</h3>
            <p className="info-text">123 Street, City</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Phone</h3>
            <p className="info-text">+123 456 789</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Email</h3>
            <p className="info-text">info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
