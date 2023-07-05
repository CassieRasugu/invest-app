import React from 'react';
import Navbar from "../Navbar/Navbar";
import aboutHeaderImg from "../../images/about-header.jpg";
import "./AboutHeader.css";

const AboutHeader = () => {
  return (
    <header className="about-header">
      <Navbar />
      <div className="about-header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">Discover Our Story</h2>
        <p className="header-text fs-18 fw-3">Learn more about us and our mission.</p>
      </div>
    </header>
  );
}

export default AboutHeader;
