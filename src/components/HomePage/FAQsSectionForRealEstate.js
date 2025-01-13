import React, { useEffect, useState } from 'react';

const FAQsSectionForRealEstate = () => {
  const [countersec, setCounter] = useState([]);
  const [items, setItems] = useState([]);
  const [faq, setFAQsection] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch FAQ section data
  useEffect(() => {
    fetch(`http://localhost:5000/faq-real`)
      .then((res) => res.json())
      .then((info) => setFAQsection(info));
  }, []);

  // Fetch FAQ items data
  useEffect(() => {
    fetch(`http://localhost:5000/faq-items-real`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);

  // Fetch counter section data
  useEffect(() => {
    fetch(`http://localhost:5000/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  // Accordion toggle handler
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="faq-style-three pb_140 pt_100">
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}
        />
        <div className="auto-container">
          {
            faq.map(a =>  <div className="sec-title mb_55 text-center">
              <span className="sub-title">{a.faqTextReal}</span>
              <h2>{a.faqHeadingReal}</h2>
            </div>)
          }
          <div className="row clearfix">
            {/* FAQ Items Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="inner-box mr_30">
                <ul className="accordion-box">
                  {items.map((item, index) => (
                    <li className="accordion block" key={item._id}>
                      <div
                        className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="icon-box" />
                        <h4>{item.accodingTitleReal}</h4>
                      </div>
                      {/* Conditionally render the accordion content */}
                      <div
                        className="acc-content"
                        style={{ display: activeIndex === index ? 'block' : 'none' }}
                      >
                        <div className="text">
                          <p>{item.accodingTextReal}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box ml_30">
                <figure className="image">
                  <img src="https://i.ibb.co.com/qsvXp9Z/faq-1.jpg" alt="FAQ illustration" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section End */}
    </>
  );
};

export default FAQsSectionForRealEstate;
