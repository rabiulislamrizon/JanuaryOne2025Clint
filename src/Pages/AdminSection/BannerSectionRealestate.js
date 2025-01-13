import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const BannerSectionRealestate = () => {
  const [bannerreal, setBannerReal] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/banner-real`)
      .then((res) => res.json())
      .then((info) => setBannerReal(info));
  }, []);

  const handleBannerSectionReal = (event) => {
    event.preventDefault();
    const bannerHeading = event.target.bannerHeading.value;
    const bannerDetails = event.target.bannerDetails.value;
    const bannerText = event.target.bannerText.value;
    const imageOne = event.target.imageOne.value;
    const buttonText = event.target.buttonText.value;
    const buttonURL = event.target.buttonURL.value;
    const buttonTextTwo = event.target.buttonTextTwo.value;
    const buttonURLTwo = event.target.buttonURLTwo.value;
    const bannerTextTwo = event.target.bannerTextTwo.value;

    const bannerSectionReal = {
      bannerHeading,
      bannerDetails,
      bannerText,
      imageOne,
      buttonText,
      buttonURL,
      buttonTextTwo,
      buttonURLTwo,
      bannerTextTwo,
    };

    const url = `http://localhost:5000/add-banner-real`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bannerSectionReal),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Real Estate Banner is Updated');
      });
  };

  return (
    <>
   


      <div>
        <section id="services" className="services-area d-flex align-items-center vh-100 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <h2 className="mb-5 mt-5">Update Banner</h2>

                {bannerreal.length === 1 && (
                  <>
                    {bannerreal.map((c) => (
                      <Link className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-4" to={`/banner-real/${c._id}`}>
                        Edit Banner Section
                      </Link>
                    ))}
                  </>
                )}
                {bannerreal.length === 0 && (
                  <form className="contact-form text-center" onSubmit={handleBannerSectionReal}>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mb-3"
                            name="bannerHeading"
                            placeholder="Banner Heading One"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="bannerTextTwo"
                            placeholder="Banner Heading Two"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="bannerText"
                            placeholder="Banner Heading Three"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="bannerDetails"
                            placeholder="Banner Details"
                            required
                          />
                        </div>
                      </div>
                     
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="imageOne"
                            placeholder="Image One"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="buttonText"
                            placeholder="Button Text"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="buttonURL"
                            placeholder="Button URL"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="buttonTextTwo"
                            placeholder="Second Button Text"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="buttonURLTwo"
                            placeholder="Second Button URL"
                            required
                          />
                        </div>
                      </div>

                      <div className="slider-btn text-center">
                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                          Add Banner
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BannerSectionRealestate;
