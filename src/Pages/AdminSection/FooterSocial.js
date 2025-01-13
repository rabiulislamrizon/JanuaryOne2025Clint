import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const FooterSocial = () => {
    const [footersocial, setFootersocial] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/footer-social`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, []);

    const handleFootersocial = (event) => {
        event.preventDefault();

        const aboutText = event.target.aboutText.value;
        const youlink = event.target.youlink.value;
        const fblink = event.target.fblink.value;
        const inslink = event.target.inslink.value;

        const footerSection = {
            aboutText,
            youlink,
            fblink,
            inslink,
        };

        const url = `http://localhost:5000/add-footer-social`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(footerSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Social Link is Updated');
            });
    };

    return (
        <>

            <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 text-center">
                            <h2 className="mb-5">Update Footer Social Link</h2>
                            {
                                footersocial.length === 1 &&
                                <div className="mb-4">
                                    {
                                        footersocial.map(c =>
                                            <Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mx-2' to={`/edit-social-footer/${c._id}`}>Edit Social URL</Link>
                                        )
                                    }
                                </div>
                            }
                            {
                                footersocial.length === 0 &&
                                <form className="contact-form" onSubmit={handleFootersocial}>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name ">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                    name="aboutText"
                                                    placeholder="About Text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name ">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                    name="youlink"
                                                    placeholder="Youtube URL"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name ">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                    name="fblink"
                                                    placeholder="Facebook URL"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name ">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                    name="inslink"
                                                    placeholder="Instagram URL"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-delay=".8s">Add Footer Social</button>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <MargingTop></MargingTop>
        </>
    );
};

export default FooterSocial;
