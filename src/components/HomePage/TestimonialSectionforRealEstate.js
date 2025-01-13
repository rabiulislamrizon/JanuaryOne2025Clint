import React, { useEffect, useState } from "react";

const TestimonialSectionforRealEstate = () => {
    const [testimonial, setTestimonial] = useState([]);

    const [testimonialtext, setTestimonialText] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext-real`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials-real`)
            .then((res) => res.json())
            .then((info) => setTestimonial(info));
    }, []);


    const divStyle = {
        backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#fff7f5",
    };

    return (



        <>
            {/* testimonial-section */}
            <section className="testimonial-section centred pb_140">
                <div className="shape">
                    <div className="shape-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-45.png)' }} />
                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-46.png)' }} />
                </div>
                {
                    testimonialtext.map(b => <div className="auto-container">
                        <div className="sec-title mb_55">
                            <span className="sub-title" >{b.testimonialTextReal}</span>
                            <h2>{b.testimonialHeadingReal}</h2>
                        </div>

                        <div className="container">
                            <div className="row three-item-carousel dots-style-one">
                                {
                                    testimonial.map(a => <div className="col-md-4">
                                        <div className="testimonial-block-one">
                                            <div className="inner-box">
                                                <figure className="thumb-box"><img src={a.imageReal} alt /></figure>
                                                <h4>{a.personNameReal}</h4>
                                                <span className="designation">{a.personTitleReal}</span>
                                                <ul className="rating">
                                                    <li><i className="icon-19" /></li>
                                                    <li><i className="icon-19" /></li>
                                                    <li><i className="icon-19" /></li>
                                                    <li><i className="icon-19" /></li>
                                                    <li><i className="icon-19" /></li>
                                                </ul>
                                                <p>{a.descReal}</p>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>

                    </div>)
                }

            </section>
            {/* testimonial-section end */}

        </>



    );
};

export default TestimonialSectionforRealEstate;
