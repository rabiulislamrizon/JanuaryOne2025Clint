import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSectionForRealEstate = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-real`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

      {
        about.map(a => <section className="about-style-three pb_150" id="about-sec">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_five">
                  <div className="image-box mr_80">
                    <figure className="image"><img src={a.aboutImgOneReal} alt /></figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_four">
                  <div className="content-box ml_40">
                    <div data-animation-box className="sec-title mb_25">
                      <span data-animation-text className="sub-title " >{a.aboutTextReal}</span>
                      <h2>{a.aboutHeadingReal}</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p>{a.aboutDetailsReal}</p>
                    </div>
                    <div className="inner-box">
                      <div className="single-item mb_40">
                        <div className="icon-box"><i className="icon-13" /></div>
                        <h3>{a.pointOneRealReal}</h3>
                        <p>{a.pointOneTextReal}</p>
                      </div>
                      <div className="single-item">
                        <div className="icon-box"><i className="icon-10" /></div>
                        <h3>{a.pointTwoReal}</h3>
                        <p>{a.pointTwoTextReal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
    </>
  );
};

export default AboutSectionForRealEstate;
