import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from './Images/banner.png';
import logo from './Images/logo.png';
import about from './Images/about.png';
import service from './Images/service.png';
import counter from './Images/counter.png';
import team from './Images/teammembers.png';
import quality from './Images/price.png';
import features from './Images/calltoaction.png';
import pri from './Images/price.png';
import footerad from './Images/contact.png';
import footersocial from './Images/social-media.png';
import copyright from './Images/copyright.png';
import timeline from './Images/timeline.png';
import testimonial from './Images/testimonial.png';
import paypalss from './Images/paypal.png';
import mail from './Images/email.png';
import video from './Images/video-tutorials.png';

import "./Setting.css";
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const RealestateSetting = () => {
    const [paypal, setPaypal] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);

    return (
        <>
         
            <div className='setting-menu mb-5'>
                <div className="container text-center mb-5">
            
                    <div className="row justify-content-center mt-5 mb-5">
                        {/* Static Settings Links */}
                        
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-banner-realestate'> 
                                    <img src={banner} alt="Banner" />
                                    <h6>Banner Setting</h6>
                                </Link>
                            </div>
                                       
                       
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-about-real'>  
                                    <img src={about} alt="About" /> 
                                    <h6>About Setting</h6> 
                                </Link>
                            </div>
                    
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-service-real-estate'> 
                                    <img src={service} alt="Service" /> 
                                    <h6>Service Setting</h6> 
                                </Link>
                            </div>
                     
                       
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/add-pricing-real'>  
                                    <img src={quality} alt="Pricing" /> 
                                    <h6>Pricing Setting</h6> 
                                </Link>
                            </div>
                    
                    
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-faq-real'>  
                                    <img src={team} alt="Counter" /> 
                                    <h6>FAQ Setting</h6>
                                </Link>
                            </div>
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-video-real'>  
                                    <img src={video} alt="Counter" /> 
                                    <h6>Video Setting</h6>
                                </Link>
                            </div>
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-work-real'>  
                                    <img src={timeline} alt="Counter" /> 
                                    <h6>Step Section</h6>
                                </Link>
                            </div>
                      
                        
                            <div className='single-card  d-flex justify-content-center col-lg-3 col-md-5 col-sm-10'>
                                <Link to='/edit-testimonial-real'>  
                                    <img src={testimonial} alt="Testimonial" />
                                    <h6>Testimonials</h6> 
                                </Link>
                            </div>
                          
                    </div>
                </div>
            </div>
            <HeaderBottom />
        </>
    );
};

export default RealestateSetting;
