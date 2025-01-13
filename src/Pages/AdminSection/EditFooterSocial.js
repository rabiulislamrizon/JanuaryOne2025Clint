import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFooterSocial = () => {
    const [footersocial, setFootersocial] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/footer-social/${id}`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, [id]);

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

        const url = `http://localhost:5000/footer-social/${id}`;
        fetch(url, {
            method: "PUT",
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
          
            <div className='container'>
                <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 text-center">
                            <h2 className='mb-5'>Update Footer Text and Social Links</h2>
                            <form className="contact-form" onSubmit={handleFootersocial}>
                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="aboutText"
                                                defaultValue={footersocial.aboutText}
                                                placeholder="About Text"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="youlink"
                                                defaultValue={footersocial.youlink}
                                                placeholder="Twitter URL"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="fblink"
                                                defaultValue={footersocial.fblink}
                                                placeholder="Facebook URL"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="inslink"
                                                defaultValue={footersocial.inslink}
                                                placeholder="Instagram URL"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-delay=".8s">Update Footer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EditFooterSocial;
