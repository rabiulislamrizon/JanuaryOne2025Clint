// src/components/ErrorPage.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../HomePage/HeaderBottom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>

      <HeaderBottom></HeaderBottom>




      <section className="error-section centred">
        <div className="auto-container">
          <div className="inner-box">
            <figure className="error-image"><img src="assets/images/icons/error-1.png" alt /></figure>
            <h2>Oops! That Page Can Not be Found.</h2>
            <div className="btn-box">
           
              <a href="/" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Go to Homepage</a>
            </div>
          </div>
        </div>
      </section>

      <HeaderBottom></HeaderBottom>


    </>
  );
};

export default ErrorPage;
