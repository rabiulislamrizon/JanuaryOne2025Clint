import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const BannerTwo = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner-two`)
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
        banners.map(b => <section id="hero-section  ">
          <div className="relative overflow-hidden bg-black text-white">
            {/* Section Spacer */}
            <div className="pb-28 pt-28 md:pb-40 lg:pt-28 xl:pb-[90px] xl:pt-[122px]  mb-5 mt-5">
              {/* Section Container */}
              <div className="global-container mb-5 mt-5">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,_1fr)_0.7fr]">
                  {/* Hero Content */}
                  <div>
                    {/* <h4  style={{color: '#FE330A'}}>Our Marketing Agency</h4> */}
                    <h1 className="jos mb-6 max-w-md break-words font-clashDisplay text-5xl font-medium leading-none text-white md:max-w-full md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[100px]">
                      {b.bannerHeadingTwo}
                    </h1>
                    <p className="jos mb-11">
                    {b.bannerDetailsTwo}
                    </p>
                    <a href={b.buttonURLTwo} className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white">
                    {b.buttonTextTwo}
                      <img src="assets/img/th-2/icon-white-long-arrow-right.svg" alt="icon-white-long-arrow-right" /></a>
                  </div>
                  {/* Hero Content */}
                  {/* Hero Image */}
                  <div className="">
                    <img src={b.imageOneTwo} alt="hero-img-2" width={1296} height={640} className="h-auto w-full" />
                  </div>
                  {/* Hero Image */}
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Spacer */}
            {/* Background Gradient */}
            <div className="absolute left-1/2 top-[80%] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]">
            </div>
            <div className="absolute bottom-0 left-1/2 h-[77px] w-full -translate-x-1/2 bg-[url(../img/th-2/arc-top-shape-1.svg)] bg-cover bg-center bg-no-repeat">
            </div>
          </div>
        </section>)
      }



    </>
  );
};

export default BannerTwo;
