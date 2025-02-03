import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const BannerSectionTwo = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/banner-two`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);

  const handleBannerSection = (event) => {
    event.preventDefault();
    const bannerHeadingOne = event.target.bannerHeadingOne.value;
    const bannerDetailsOne = event.target.bannerDetailsOne.value;
    const imageOneOne = event.target.imageOneOne.value;
    const buttonTextOne = event.target.buttonTextOne.value;
    const buttonURLOne = event.target.buttonURLOne.value;
    
    
    

    const bannerSection = {
      bannerHeadingOne,
      bannerDetailsOne,
      imageOneOne,
      buttonTextOne,
      buttonURLOne,
     
      
      
    };

    const url = `http://localhost:5000/add-banner`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bannerSection),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Banner is Updated');
      });
  };

  return (
    <>

      <HeaderBottom></HeaderBottom>

      <div>
        <section id="services" className="services-area d-flex align-items-center  ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center vh-100">
                <h2 className="mb-5 mt-5">Update Banner</h2>

                {banner.length === 1 && (
                  <>
                    {banner.map((c) => (
                      <Link className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-4" to={`/banner-two/${c._id}`}>
                        Edit Banner Section
                      </Link>
                    ))}
                  </>
                )}
                {banner.length === 0 && (
                  <form className="contact-form text-center" onSubmit={handleBannerSection}>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mb-3"
                            name="bannerHeadingOne"
                            placeholder="Banner Heading "
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="bannerDetailsOne"
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
                            name="imageOneOne"
                            placeholder="Banner Image"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="buttonTextOne"
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
                            name="buttonURLOne"
                            placeholder="Button URL"
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

export default BannerSectionTwo;
