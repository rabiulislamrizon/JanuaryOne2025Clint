import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const FooterContact = () => {
    const [footeraddress, setAddressfooter] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/footer-address`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);

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

        const url = `http://localhost:5000/add-footer-address`;
        fetch(url, {
            method: "POST",
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
                            {
                                footeraddress.length === 1 &&
                                <>
                                    {
                                        footeraddress.map(c =>
                                            <Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white ' to={`/edit-address-footer/${c._id}`}>Edit Now</Link>
                                        )
                                    }
                                </>
                            }
                            {
                                footeraddress.length === 0 &&
                                <form className="contact-form" onSubmit={handlefooterAddress}>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 bg-white rounded"
                                                    name="phoneNumber"
                                                    placeholder="Enter Your Phone Number"
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
                                                    placeholder="Enter Your Email"
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
                                                    placeholder="Enter Your Location"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-delay=".8s">Add Office Address</button>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FooterContact;
