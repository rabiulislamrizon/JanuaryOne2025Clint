import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFooterContact = () => {
    const [footerad, setAddressfooter] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, [id]);

    const handlefooterAddress = (event) => {
        event.preventDefault();

        const phoneNumber = event.target.phoneNumber.value;
        const emailAddress = event.target.emailAddress.value;
        const location = event.target.location.value;

        const contactSection = {
            phoneNumber,
            emailAddress,
            location,
        };

        const url = `http://localhost:5000/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Footer Address is Updated');
            });
    };

    return (
        <>
            <div className='container mt-5 mb-5'>
                <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 text-center">
                            <h2 className='mb-5'>Update Footer Contact</h2>
                            <form className="contact-form" onSubmit={handlefooterAddress}>
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="phoneNumber"
                                                defaultValue={footerad.phoneNumber}
                                                placeholder="Your Phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="emailAddress"
                                                defaultValue={footerad.emailAddress}
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                name="location"
                                                defaultValue={footerad.location}
                                                placeholder="Your Location"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Update Address Details</button>
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

export default EditFooterContact;
