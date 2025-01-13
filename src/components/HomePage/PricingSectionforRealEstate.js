import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';

const PricingSectionforRealEstate = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pricings-real`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (
    <div className='container'>
      <section className="pricing-style-two home-5 pb_120 centred p_relative container" id='pricing-sec'>
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }} />
          <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }} />
        </div>

        <div className="auto-container">
          <div className="sec-title mb_55">
            <span className="sub-title">Pricing Plans</span>
            <h2>Affordable Pricing</h2>
          </div>

          <div className="row clearfix">
            {pricing.map((pkg) => (
              <div key={pkg._id} className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                <div className={`pricing-block-two ${pkg.packageNameReal === 'Premium' ? 'active-block' : ''} wow fadeInUp animated`}
                     data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                  <div className="pricing-table">
                    <div className="table-header mb_40">
                      <h3>{pkg.packageNameReal} Plan</h3>
                      <h2>${pkg.packagePriceReal}</h2>
                      <Link to={`/order-now-real/${pkg._id}`} className={`theme-btn ${pkg.packageNameReal === 'Premium' ? 'btn-one' : 'btn-three'}`}>
                        {pkg.packageButtonTextReal}
                      </Link>
                    </div>
                    <div className="table-content">
                      <ul className="feature-list clearfix">
                        <li>{pkg.packagePointOneReal}</li>
                        <li>{pkg.packagePointTwoReal}</li>
                        <li>{pkg.packagePointThreeReal}</li>
                        <li>{pkg.packagePointFourReal}</li>
                        <li>{pkg.packagePointFiveReal}</li>
                        {/* Add more points as needed */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSectionforRealEstate;
