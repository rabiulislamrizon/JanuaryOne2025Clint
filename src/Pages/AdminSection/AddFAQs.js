import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const AddFAQs = () => {
    const [faq, setFAQsection] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faq`)
            .then((res) => res.json())
            .then((info) => setFAQsection(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/faq-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

    const handleFAQtext = (event) => {
        event.preventDefault();
        const faqText = event.target.faqText.value;
        const faqHeading = event.target.faqHeading.value;

        const faqSection = {
            faqText,
            faqHeading,
        };

        const url = `http://localhost:5000/add-faq`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('FAQ is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const accodingText = event.target.accodingText.value;
        const accodingTitle = event.target.accodingTitle.value;

        const faqitemSection = {
            accodingText,
            accodingTitle,
        };

        const url = `http://localhost:5000/add-faq-item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqitemSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('FAQ Item is Added');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div className='mt-5'>
                <section id='services' className='services-area '>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 text-center'>
                                <h3>Update FAQs Text</h3>
                                {faq.length === 1 && (
                                    <>
                                        {faq.map((s) => (
                                            <Link
                                                className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white'
                                                to={`/faqtext-edit/${s._id}`}
                                            >
                                                Update FAQ
                                            </Link>
                                        ))}
                                    </>
                                )}
                                {faq.length === 0 && (
                                    <form
                                        className='contact-form d-flex flex-column align-items-center'
                                        onSubmit={handleFAQtext}
                                    >
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <div className='contact-field p-relative c-name '>
                                                    <input
                                                        className='form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded'
                                                        type='text'
                                                        name='faqText'
                                                        placeholder='FAQ Text'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='contact-field p-relative c-name '>
                                                    <input
                                                        className='form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded'
                                                        type='text'
                                                        name='faqHeading'
                                                        placeholder='FAQ Heading'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='slider-btn text-center'>
                                                <button
                                                    className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white'
                                                >
                                                    FAQ Services
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                <h3 className='mt-5'>Add FAQ</h3>
                                <form
                                    className='contact-form d-flex flex-column align-items-center'
                                    onSubmit={handleAddItem}
                                >
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='contact-field p-relative c-name '>
                                                <input
                                                    className='form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded'
                                                    name='accodingTitle'
                                                    placeholder='Accordion Title'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='contact-field p-relative c-name '>
                                                <input
                                                    className='form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded'
                                                    name='accodingText'
                                                    placeholder='Accordion Text'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='slider-btn text-center'>
                                            <button
                                                className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white'
                                            >
                                                Add Accordion
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='col-lg-8 col-md-12 mt-5'>
                                <div className='' id='accordion'>
                                    {items.map((e, index) => (
                                        <div key={index} className='card mb-3'>
                                            <div className='card-header d-flex justify-content-between align-items-center'>
                                                <div className='col-lg-3 d-flex flex-column'>
                                                    <h2 className='mb-0'>{e.accodingTitle}</h2>
                                                </div>
                                                <Link to={`/faq-edit/${e._id}`}>
                                                    <button className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white'>
                                                        Edit Now
                                                    </button>
                                                </Link>
                                            </div>
                                            <div
                                                id={`collapse${index}`}
                                                className='collapse accordion-collapse'
                                                data-bs-parent='#accordion'
                                            >
                                                <div className=''>
                                                    {/* Add accordion content here */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <MargingTop></MargingTop>
                </section>

            </div>
        </>
    );
};

export default AddFAQs;
