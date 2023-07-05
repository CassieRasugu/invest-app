import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";
const About = () => {
  return (
    <>

    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>ABOUT OUR WEBSITE </h2>
            <p className='fs-17'>Whether you're a seasoned investor or just starting out, our team of experts is here to guide you every step of the way. From stocks and bonds to real estate and alternative investments, we provide valuable insights and personalized advice to help you make informed decisions.<p>At our investing website, we offer a comprehensive range of investment opportunities tailored to suit your financial goals.<p>Don't miss out on the chance to secure your financial future. Contact us today and embark on a profitable investment journey with confidence.</p></p></p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
