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




      <main className="main-wrapper relative overflow-hidden">
  {/*...::: 404 Section Start :::... */}
  <section id="404-section">
    {/* Section Spacer */}
    <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
      {/* Section Container */}
      <div className="global-container">
        {/* 404 Content */}
        <div className="mx-auto max-w-[954px] text-center">
          <h1 className="bg-[url(../img/th-1/404-text-image.jpg)] bg-contain bg-clip-text bg-center bg-no-repeat text-[150px] text-transparent sm:text-[220px] lg:text-[300px] xl:text-[350px]">
            404
          </h1>
          <h2 className="mb-[50px]">
            The page you are looking for cannot be found
          </h2>
          <a href="/" className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white">Go to homepage</a>
        </div>
        {/* 404 Content */}
      </div>
      {/* Section Container */}
    </div>
    {/* Section Spacer */}
  </section>
  {/*...::: 404 Section End :::... */}
</main>


    </>
  );
};

export default ErrorPage;
