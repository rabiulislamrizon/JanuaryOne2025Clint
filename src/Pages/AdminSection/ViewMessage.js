import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MargingTop from '../../components/HomePage/MargingTop';

const ViewMessage = () => {
    const [message, setMessage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/message/${id}`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, [id]);

    const handleMessage = (event) => {
        event.preventDefault();

        const messageStatus = event.target.messageStatus.value;

        const updateMessageStatus = {
            messageStatus,
        };

        const url = `http://localhost:5000/message/${message._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateMessageStatus),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Message marked as Read');
                setMessage(prevState => ({ ...prevState, messageStatus: "Read" }));
            });
    };

    return (
        <>
            <HeaderBottom />
            <MargingTop></MargingTop>
            <section id="view-message" className="vh-100">
           
                <div className="container">
                
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="mb-0">Message Details</h4>
                                </div>
                                <div className="card-body">
                                    <dl className="row">
                                        <dt className="col-sm-3">Sender Name:</dt>
                                        <dd className="col-sm-9">{message.name}</dd>

                                        <dt className="col-sm-3">Sender Email:</dt>
                                        <dd className="col-sm-9">{message.email}</dd>

                                        <dt className="col-sm-3">Sender Phone:</dt>
                                        <dd className="col-sm-9">{message.number}</dd>

                                        <dt className="col-sm-3">Sender Subject:</dt>
                                        <dd className="col-sm-9">{message.subject}</dd>

                                        <dt className="col-sm-3">Message:</dt>
                                        <dd className="col-sm-9">{message.message}</dd>
                                    </dl>
                                    {message.messageStatus === "UnRead" && (
                                        <form onSubmit={handleMessage}>
                                            <input type="hidden" name="messageStatus" value="Read" />
                                            <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Mark as Read</button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewMessage;
