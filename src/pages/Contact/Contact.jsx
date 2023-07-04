import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="section-title">Talk to Us</h2>
        <p className="section-subtitle">Get in touch with our team ~Anita~Cassie~Lyon~Manasse~Ryan </p>
        <div className="contact-form">
          <input type="text" className="form-input" placeholder="Your Name" />
          <input type="email" className="form-input" placeholder="Your Email" />
          <textarea className="form-input" placeholder="Your Message"></textarea>
          <button className="form-button">Send Inquiries</button>
        </div>
        <div className="contact-info">
          <div className="info-box">
            <h3 className="info-title">Office</h3>
            <p className="info-text">NgongLanePlazaaa, NairobiiiCity</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Phone</h3>
            <p className="info-text">0722918134</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">Email</h3>
            <p className="info-text">invest@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
