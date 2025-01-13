import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from './MargingTop';

const MessageNow = () => {
    const [ticket, setTicket] = useState({});
    const [replies, setReplies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch ticket details including replies
        fetch(`http://localhost:5000/ticket/${id}`)
            .then((res) => res.json())
            .then((info) => {
                setTicket(info);
                setReplies(info.replies || []); // Assuming replies are part of the ticket info
            });
    }, [id]);

    const handleReply = (event) => {
        event.preventDefault();

        const newReply = {
            user_id: "user", 
            ticketmessage: event.target.ticketmessage.value,
            replyDate: new Date().toLocaleString(),
        };

        const updatedReplies = [...replies, newReply];

        // Update ticket with new reply
        const url = `http://localhost:5000/ticket/${ticket._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...ticket, replies: updatedReplies }),
        })
            .then((res) => res.json())
            .then((result) => {
                setReplies(updatedReplies);
                event.target.reset(); // Reset the form after submission
            });
    };

    return (
        <>
            <HeaderBottom />
            <MargingTop></MargingTop>
            <section id="services" className="services-area mb-5 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Ticket Details</h5>
                                </div>
                                <div className="card-body">
                                    <h5><strong>Sender Date:</strong> {ticket.tickteDate}</h5>
                                    <h5><strong>Sender Name:</strong> {ticket.ticketName}</h5>
                                    <h5><strong>Sender Email:</strong> {ticket.customerEmail}</h5>
                                    <h5><strong>Subject:</strong> {ticket.ticketsubject}</h5>
                                    <p><strong>Message:</strong> {ticket.ticketmessage}</p>
                                </div>
                            </div>

                            <div className="card shadow-sm mb-4">
                                <div className="card-header bg-secondary text-white">
                                    <h5 className="mb-0">Replies</h5>
                                </div>
                                <div className="card-body">
                                    {replies.length > 0 ? (
                                        replies.map((reply, index) => (
                                            <div
                                                key={index}
                                                className={`d-flex mb-3 ${reply.user_id === "admin" ? "justify-content-start" : "justify-content-end"}`}
                                            >
                                                <div className={`border rounded p-3 ${reply.user_id === "admin" ? "bg-primary text-white" : "bg-light text-dark"}`} style={{ maxWidth: "60%" }}>
                                                    <strong>{reply.user_id === "admin" ? "Admin" : "User"}:</strong>
                                                    <p className="mb-1 text-black">{reply.ticketmessage}</p>
                                                    <small className="text-muted text-white">{reply.replyDate}</small>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted">No replies yet.</p>
                                    )}
                                </div>
                            </div>

                            <div className="card shadow-sm">
                                <div className="card-header bg-light">
                                    <h5 className="mb-0">Write a Reply</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleReply}>
                                        <div className="form-group mb-3">
                                            <textarea
                                                name="ticketmessage"
                                                className="form-control"
                                                placeholder="Write your reply here..."
                                                rows="4"
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className=" jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn-sm ">Send Reply</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MargingTop></MargingTop>
            </section>
        </>
    );
};

export default MessageNow;
