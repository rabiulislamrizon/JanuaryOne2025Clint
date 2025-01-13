import React, { useEffect, useState } from "react";

const StepSection = () => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/steps`)
      .then((res) => res.json())
      .then((info) => setSteps(info));
  }, []);

  return (
    <>


      {/* <section
        id="eventes"
        className="eventes-area fix pt-120 pb-120"
        style={{
          backgroundImage: "url(img/bg/event-bg-aliments.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center mb-50">
                <h5>Our Events</h5>
                <h2>Upcoming Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              steps.map(step =>
                <div className="col-lg-6 col-md-12">
                  <div className="eventes-box">
                    <div className="date-box">
                      <h3>{step.stepNumber}</h3>
                    </div>
                    <div className="text">
                      <h5>
                        <a href="#">
                          {step.stepTitle}
                        </a>
                      </h5>

                      <p>
                        {step.stepDetails}
                      </p>
                    </div>
                  </div>
                </div>

              )
            }

          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="slider-btn mt-30">
                <a
                  href="events.html"
                  className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                  data-animation="fadeInRight"
                  data-delay=".8s"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

 {/* Progress Area */}
 <div className="progress-area pt-100 pb-70">
     <div className="container">
       <div className="section-title text-center">
         <span className="sp-after">Real Progress</span>
         <h2 className="h2-color">Super Great Things From <b>Your Desire Wishes</b></h2>
       </div>
       <div className="row pt-45">
         <div className="col-lg-4 col-sm-6">
           <div className="progress-card pr-bg-color-1">
             <img src="assets/img/progress-icon/progress-icon1.png" alt="Images" />
             <h3>28,998</h3>
             <p>RANKING KEYWORDS</p>
           </div>
         </div>
         <div className="col-lg-4 col-sm-6">
           <div className="progress-card pr-bg-color-2">
             <img src="assets/img/progress-icon/progress-icon2.png" alt="Images" />
             <h3>600%</h3>
             <p>ANNUAL ORGANIC TRAFFIC</p>
           </div>
         </div>
         <div className="col-lg-4 col-sm-6 offset-sm-3  offset-lg-0">
           <div className="progress-card pr-bg-color-3">
             <img src="assets/img/progress-icon/progress-icon3.png" alt="Images" />
             <h3>50,234</h3>
             <p>RANKING KEYWORDS</p>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* Progress Area End */}


      
    </>
  );
};

export default StepSection;
