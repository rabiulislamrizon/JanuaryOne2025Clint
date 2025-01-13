import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (


    //     <>

    // {
    //   countersec.map(c=><div className="counter-area">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="single-counter">
    //             <i className="flaticon-confetti" />
    //             <div className="content">
    //               <h3>{c.yearofExperienceNumber} +</h3>
    //               <p>{c.yearofExperienceText}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="single-counter">
    //             <i className="flaticon-project" />
    //             <div className="content">
    //               <h3>{c.projectCompleteNumber} +</h3>
    //               <p>{c.projectCompleteText}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="single-counter">
    //             <i className="flaticon-customers" />
    //             <div className="content">
    //               <h3>{c.happyClientsNumber} +</h3>
    //               <p>{c.happyClientsText}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="single-counter">
    //             <i className="flaticon-financial-advisor" />
    //             <div className="content">
    //               <h3>{c.teamNumber} +</h3>
    //               <p>{c.teamText}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> )
    // }









    //     </>

    <>

      {
        countersec.map(c => <div className="counter-area-two pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-3">
                <div className="counter-card">
                  <h3> {c.yearofExperienceNumber} Years</h3>
                  <p>{c.yearofExperienceText}</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-3">
                <div className="counter-card">
                  <h3>{c.projectCompleteNumber}+</h3>
                  <p>{c.projectCompleteText}</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-3">
                <div className="counter-card">
                  <h3>{c.happyClientsNumber}+</h3>
                  <p>{c.happyClientsText}</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-3">
                <div className="counter-card">
                  <h3>{c.teamNumber}+</h3>
                  <p>{c.teamText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-shape-top">
            <img src="assets/img/counter/counter-shape.png" alt="Images" />
          </div>
        </div>)}


    </>
  );
};

export default CounterSection;