import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const FAQeditReal = () => {

    const [faqtext, setService] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/faq-real/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);




    const handleFAQText = (event) => {
        event.preventDefault();
        const faqTextReal = event.target.faqTextReal.value;
        const faqHeadingReal = event.target.faqHeadingReal.value;



        const faqSection = {
            faqTextReal,
            faqHeadingReal,


        };

        const url = `http://localhost:5000/faq-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' FAQ Text is Updated');
            });
    };




    return (
        <>
            <HeaderBottom></HeaderBottom>
            {
                <section id="services" className="services-area  vh-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 text-center">
                                <h3>Update FAQ Text</h3>

                                <form className="contact-form" onSubmit={handleFAQText}>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input
                                                    className="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded"
                                                    name="faqTextReal"
                                                    defaultValue={faqtext.faqTextReal}
                                                    placeholder="FAQ Text"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input
                                                    className="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded"
                                                    name="faqHeadingReal"
                                                    defaultValue={faqtext.faqHeadingReal}
                                                    placeholder="FAQ Heading"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="slider-btn text-center">
                                            <button
                                                className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                                                data-animation="fadeInRight"
                                                data-delay=".8s"
                                            >
                                                Update FAQ Text
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default FAQeditReal;