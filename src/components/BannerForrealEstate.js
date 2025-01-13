import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const BannerForrealEstate = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner-real`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>
    {
      banners.map(b=> <section className="banner-style-five centred">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-27.png)' }} />
          <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-28.png)' }} />
          <div className="pattern-3 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }} />
          <div className="pattern-4 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }} />
          <div className="pattern-5 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }} />
          <div className="pattern-6" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }} />
        </div>
        <div className="auto-container">
          <div className="inner-box">
            <div className="content-box mb_80">
              <h2>{b.bannerHeadingReal} <span>{b.bannerTextRealTwo}</span>  <br />{b.bannerTextReal}</h2>
              <p>{b.bannerDetailsReal}</p>
              <div className="btn-box">
                <a href={b.buttonURLReal} className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mr_20">{b.buttonTextReal}</a>
                <a href={b.buttonURLTwoReal} className="theme-btn btn-two">{b.buttonTextTwoReal}</a>
              </div>
            </div>
            <figure className="image-box"><img src={b.imageOneReal} alt /></figure>
          </div>
        </div>
      </section>)
    }

      



    </>
  );
};

export default BannerForrealEstate;
