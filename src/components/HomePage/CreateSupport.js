import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import HeaderBottom from './HeaderBottom';

const CreateSupport = () => {
    const [user] = useAuthState(auth);
    const [currentDate, setCurrentDate] = useState('');
    const navigate = useNavigate();  // Initialize navigate

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setCurrentDate(formattedDate);
    }, []);

    const handleTicket = (event) => {
        event.preventDefault();
        const customerEmail = event.target.customerEmail.value;
        const tickteDate = event.target.tickteDate.value;
        const ticketName = event.target.ticketName.value;
        const ticketsubject = event.target.ticketsubject.value;
        const ticketmessage = event.target.ticketmessage.value;
        const ticketStatus = event.target.ticketStatus.value;

        const addItem = {
            customerEmail,
            tickteDate,
            ticketName,
            ticketsubject,
            ticketmessage,
            ticketStatus,
        };

        const url = `http://localhost:5000/add-ticket`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Your Ticket is Submitted');
                navigate('/support');  // Navigate to /support after submission
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <section id="services" className="services-area w-100">
                    <div className="container py-5">
                        <div className="text-center mb-4">
                            <h2 className="display-6 fw-bold">Submit Your Ticket</h2>
                        </div>
                        <div className="row justify-content-center">
                            <form className="col-md-8" onSubmit={handleTicket}>
                                <div className="row g-3">

                                    <div className="col-md-12">
                                        <input
                                            disabled
                                            type="email"
                                            value={user?.email}
                                            name="customerEmail"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="tickteDate"
                                            value={currentDate}
                                            placeholder="Date"
                                            required
                                            readOnly
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="ticketName"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="ticketsubject"
                                            className="form-control form-control-lg"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea
                                            name="ticketmessage"
                                            className="form-control form-control-lg"
                                            rows={5}
                                            required
                                            placeholder="Your Message"
                                        />
                                    </div>

                                    <input type="hidden" name="ticketStatus" value="UnRead" />

                                    <div className="col-md-12 text-center mt-4">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white px-5" type="submit">
                                            Submit Ticket
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <HeaderBottom />
        </>
    );
};

export default CreateSupport;
