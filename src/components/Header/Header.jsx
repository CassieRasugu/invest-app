import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";
const Header = () => {
    return (
      <div className='holder'>
          <header className='header'>
              <Navbar />
              <div className='header-content flex flex-c text-center text-black'>
                  <h2 className='header-title text-capitalize'>Invest With The Best </h2><br />
                  <p className='header-text fs-18 fw-3'>Welcome to our investment program !! ITS SUPPER SIMPLE !! earn your first profit today!!!!! </p>
              </div>
          </header>
      </div>
    )
  }

  export default Header
