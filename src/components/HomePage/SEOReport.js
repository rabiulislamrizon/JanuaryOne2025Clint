import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";

const SEOReport = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [seoreport, setSEOreports] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:5000/seo-audit/${id}`)
      .then((res) => res.json())
      .then((info) => setSEOreports(info));
  }, []);


  const handleSEOReport = (event) => {
    event.preventDefault();
    const reportId = event.target.reportId.value;
    const websiteURL = event.target.websiteURL.value;
    const MobileLoadingSpeed = event.target.MobileLoadingSpeed.value;
    const DesktopLoadingSpeed = event.target.DesktopLoadingSpeed.value;
    const TypesofCMS = event.target.TypesofCMS.value;
    const MonthlyTraffic = event.target.MonthlyTraffic.value;
    const WebsiteOptimization = event.target.WebsiteOptimization.value;
    const KeywordOptimization = event.target.KeywordOptimization.value;
    const FocusKeyword = event.target.FocusKeyword.value;
    const ImageOptimization = event.target.ImageOptimization.value;
    const MetaTitleDescription = event.target.MetaTitleDescription.value;
    const InternalBacklink = event.target.InternalBacklink.value;
    const IndexingCrawling = event.target.IndexingCrawling.value;


    const addItem = {
      websiteURL,
      reportId,
      MobileLoadingSpeed,
      DesktopLoadingSpeed,
      TypesofCMS,
      MonthlyTraffic,
      WebsiteOptimization,
      KeywordOptimization,
      FocusKeyword,
      ImageOptimization,
      MetaTitleDescription,
      InternalBacklink,
      IndexingCrawling,


    };

    const url = `http://localhost:5000/add-seo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Submit Your SEO Audit Report');
        navigate('/all-reports');  // Navigate to /thanks route
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  };





  return (
    <>

      <HeaderBottom></HeaderBottom>
      <div>
        <section id="services" className="services-area   d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <form className="contact-form text-center" onSubmit={handleSEOReport}>
                  <h2 className="mb-5">Audit Your Website SEO Score</h2>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control mb-3"
                          name="reportId"
                          value={seoreport._id}
                          required
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          name="websiteURL"
                          value={seoreport.websiteURL}
                          required
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          name="MobileLoadingSpeed"
                          placeholder="Mobile Loading Speed"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="DesktopLoadingSpeed"
                          placeholder="Desktop Loading Speed"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="TypesofCMS"
                          placeholder="Types of CMS"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="MonthlyTraffic"
                          placeholder="Monthly Website Traffic"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="WebsiteOptimization"
                          placeholder="Website Optimization"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="KeywordOptimization"
                          placeholder="Keyword Optimization"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="FocusKeyword"
                          placeholder="Focus Keyword"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="ImageOptimization"
                          placeholder="Image Optimization"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="MetaTitleDescription"
                          placeholder="Meta Title & Description"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="InternalBacklink"
                          placeholder="Internal Backlink"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="IndexingCrawling"
                          placeholder="Indexing Crawling"
                          required
                        />
                      </div>
                    </div>

                    <div className="slider-btn text-center">
                      <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                        Submit SEO Report
                      </button>
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </section>
        <HeaderBottom></HeaderBottom>


      </div>

      <HeaderBottom></HeaderBottom>
    </>
  );
};

export default SEOReport;
