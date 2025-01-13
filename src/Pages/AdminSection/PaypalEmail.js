import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaypalEmail = () => {
    const [paypal, setPaypal] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email/${id}`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, [id]);

    const handleUpdatePaypal = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;

        const PaypalEmailUpdate = {
            paypalEmail,
        };

        const url = `http://localhost:5000/paypal-email/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PaypalEmailUpdate),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Paypal Email Updated');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <h3 className="text-center mb-4">Update Paypal Email</h3>
                            <form className="contact-form" onSubmit={handleUpdatePaypal}>
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded"
                                        name="paypalEmail"
                                        defaultValue={paypal.paypalEmail}
                                        placeholder="Paypal Email"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                        Update Now
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

export default PaypalEmail;
