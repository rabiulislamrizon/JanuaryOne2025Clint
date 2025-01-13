import React, { useEffect, useState } from 'react';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddPaypalEmail = () => {
    const [email, setEmail] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email`)
            .then((res) => res.json())
            .then((info) => setEmail(info));
    }, [email]);

    const handleEmailSection = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;

        const paypalAdded = {
            paypalEmail
        };

        fetch(`http://localhost:5000/add-email`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(paypalAdded),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Paypal Email Added');
            });
    };

    return (
        <>
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <h3 className="text-center mb-4">Add Paypal Email</h3>
                            <form className="contact-form" onSubmit={handleEmailSection}>
                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded"
                                        name="paypalEmail"
                                        placeholder="Paypal Email"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                        Add Paypal Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddPaypalEmail;
