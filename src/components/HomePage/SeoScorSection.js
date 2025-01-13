import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SeoScorSection = () => {

  const navigate = useNavigate();

  const handleReport = (event) => {
    event.preventDefault();
    const websiteURL = event.target.websiteURL.value;
    const Useremail = event.target.Useremail.value;
    const ReportStatus = event.target.ReportStatus.value;

    const addItem = {
      websiteURL,
      Useremail,
      ReportStatus,
    };

    const url = `http://localhost:5000/add-report`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Submit Your Request is sent');
        navigate('/thanks-for-submit');  // Navigate to /thanks route
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  };





  return (
    <>

      {/* SEO Area */}
      <div className="seo-area">
        <div className="container-fluid">
          <div className="seo-width">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="seo-form">
                  <h2>What is My SEO Score?</h2>
                  <div className="seo-form-area">
                    <form onSubmit={handleReport} className="seo-form-option">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-4">
                          <div className="form-group">
                            <i className="flaticon-place" />
                            <input className="form-control form-border" name="websiteURL" type="text" placeholder="Your Website URL" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4">
                          <div className="form-group">
                            <i className="flaticon-vision" />
                            <input className="form-control" type="email" name="Useremail" placeholder="Enter Your Email" />
                            <input className="form-control" name="ReportStatus" value='Pending' hidden />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0 offset-lg-0">
                          <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">
                            Get started
                            <i className="bx bx-plus" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="seo-img">
                  <img src="https://i.ibb.co.com/sJFjwjP/note-1.png" alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SEO Area End */}


    </>
  );
};

export default SeoScorSection;
