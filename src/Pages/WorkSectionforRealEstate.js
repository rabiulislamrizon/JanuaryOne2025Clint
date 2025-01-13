import React, { useEffect, useState } from 'react';

const WorkSectionforRealEstate = () => {

  const [stepwork, setWork] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    // Fetch video data
    fetch(`http://localhost:5000/videos-real`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  useEffect(() => {
    // Fetch work steps data
    fetch(`http://localhost:5000/worksec-real`)
      .then((res) => res.json())
      .then((info) => setWork(info));
  }, []);

  return (
    <>
      {
        video.map(v => (
          <section className="working-style-three centred pb_120" key={v._id}>
            <div className="pattern-layer">
              <div className="pattern-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-39.png)' }} />
              <div className="pattern-2 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }} />
            </div>
            <div className="auto-container">
              <div data-animation-box className="sec-title mb_55">
                <h2>{v.headingVideoReal}</h2>
              </div>
              <div className="upper-box mb_50 p_relative">
                <div className="image-shape">
                  <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-36.png)' }} />
                  <div className="shape-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-37.png)' }} />
                  <div className="shape-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }} />
                </div>
                <div className="video-inner" style={{ backgroundImage: `url(${v.videoImageReal})` }}>
                  <div className="video-btn">
                    <a
                      href={v.videoLinkReal}
                      className="lightbox-image video-btn"
                      data-caption
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-15" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                {
                  stepwork.map(step => (
                    <div className="col-lg-4 col-md-6 col-sm-12 working-block" key={step._id}>
                      <div className="working-block-two">
                        <div className="inner-box">
                          <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }} />
                          <div className="icon-box">{step.stepNumberReal}</div>
                          <h3>{step.stepTitleReal}</h3>
                          <p>{step.stepDetailsReal}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        ))
      }
    </>
  );
};

export default WorkSectionforRealEstate;
