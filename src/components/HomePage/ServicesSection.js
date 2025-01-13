import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>

      {/* Separator */}
      <div >
        <div className="mt-5" id="services-sec" />
      </div>
      {/* Separator */}

      <section id="feature-section">
        {/* Section Spacer */}
        <div className="pb-20 pt-1 xl:pb-[130px] xl:pt-[53px]">
          {/* Section Container */}
          <div className="global-container">
            {/* Section Content Block */}
            {
              service.map(a=>   <div className="jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
                <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                {a.serviceHeading}
                </h2>
              </div>)
            }
          
            {/* Section Content Block */}
            {/* Feature List */}
            <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">

              {
                items.map(e => <li className="jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row" data-jos_delay="0.1">

                  <div className="flex flex-1 flex-col gap-y-5">
                    <div className="h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]">
                      <img src={e.serviceIcon} alt="icon-feature-1" width={49} height={45} />
                    </div>
                    <div className="font-clashDisplay text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5">
                    {e.serviceTitle}
                    </div>
                    <p>
                    {e.serviceDetails}
                    </p>
                  </div>
                </li>)

              }





              {/* Feature Item */}
            </ul>
            {/* Feature List */}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
    </>


  );
};

export default ServicesSection;
