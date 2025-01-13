import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceSectionForRealEstate = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items-real-estate`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service-real-estate`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (


    

    <>
      <section className="feature-style-three pb_150 centred pt_150" id="services-sec">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }} />
          <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }} />
        </div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }} />
            <div className="row clearfix">
              {
                items.map(e => <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-two">
                    <div className="inner-box">
                      <div className=""><a href="/"> <img src={e.serviceIconReal}  alt="Images" /></a></div>
                      <h3><a href="/">{e.serviceTitleReal}</a></h3>
                      <p>{e.serviceDetailsReal}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </>


  );
};

export default ServiceSectionForRealEstate;
