import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTestimonialReal = () => {
    const [testimonialtext, setTestimonialText] = useState([]);
    const [testimonials, settestimonials] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext-real`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials-real`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
        };

        const url = `http://localhost:5000/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Service is Updated');
            });
    };

    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;

        const stepSection = {
            image,
            personName,
            personTitle,
            desc,
        };

        const url = `http://localhost:5000/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Step Section is Updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area mb-100 ">
                <div className='mt-5'>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 text-center">
                                <h3 className='mb-5'>Update Testimonial Text</h3>
                                {testimonialtext.length === 1 &&
                                    <>
                                        {testimonialtext.map(text =>
                                            <Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white' to={`/testimonialtext-edit-real/${text._id}`}>Update Now</Link>
                                        )}
                                    </>
                                }
                                {testimonialtext.length === 0 &&
                                    <form className="contact-form" onSubmit={handleTestimonialSection}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control mb-3" name="testimonialText" placeholder="Testimonial Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-field p-relative c-name mb-20">
                                                    <input type="text" className="form-control mb-3" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                                </div>
                                            </div>
                                            <div className="slider-btn text-center">
                                                <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Update Testimonial Text</button>
                                            </div>
                                        </div>
                                    </form>
                                }

                                {/* <h3 className='mb-5 mt-5'>Add Testimonial Item</h3>
                                <form className="contact-form" onSubmit={handleStepSection}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="image" placeholder="Person Image URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="personName" placeholder="Person Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="personTitle" placeholder="Person Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control mb-3" name="desc" placeholder="Details" required />
                                            </div>
                                        </div>
                                        <div className="slider-btn text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-delay=".8s">Add Testimonial</button>
                                        </div>
                                    </div>
                                </form> */}

                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        {testimonials.map(t => (
                                            <div className="col-md-3 mb-4" key={t._id}>
                                                <div className="card h-100 text-center shadow-sm">
                                                    <div className="card-body">
                                                        <div className="testimonial_image mb-3">
                                                            {/* Image content here */}
                                                        </div>
                                                        <h5 className="card-title">{t.personNameReal}</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted">{t.personTitleReal}</h6>
                                                        <p className="card-text">{t.descReal}</p>
                                                        <Link to={`/edit-testimonial-real/${t._id}`} className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">
                                                            Edit Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <HeaderBottom></HeaderBottom>
            </section>
        </>
    );
};

export default AddTestimonialReal;
