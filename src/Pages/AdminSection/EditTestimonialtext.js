import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditTestimonialtext = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);



    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
     

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            
        };

        const url = `http://localhost:5000/testimonialtext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Testimonial Text Is Updated');
            });
    };








    return (
        <> 
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area vh-100">
        <div className='mt-5'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">

                        

                        <form class="contact-form " onSubmit={handleTestimonialSection}>
                        <h3 className='mb-5 text-center'> Update Testimonial Text </h3>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input  className="form-control mb-3" name="testimonialText" hidden defaultValue={testimonialtext.testimonialText} placeholder="Testimonial Text" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name ">
                                        <input className="form-control mb-3" name="testimonialHeading" defaultValue={testimonialtext.testimonialHeading} placeholder="Testimonial Heading" required />
                                    </div>
                                </div>
                                <div class="slider-btn text-center">
                                    <button class="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                </div>
                            </div>

                        </form>



                    </div>


                </div>
            </div>





        </div>
    </section></>
       
    );
};

export default EditTestimonialtext;