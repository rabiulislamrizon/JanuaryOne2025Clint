import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const AdminReply = () => {
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
            user_id: "admin",
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
                        <div className="col-lg-8 col-md-10">
                            <div className="card p-4 mb-4 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title">Ticket Details</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Sender Date:</strong> {ticket.tickteDate}</li>
                                        <li className="list-group-item"><strong>Sender Name:</strong> {ticket.ticketName}</li>
                                        <li className="list-group-item"><strong>Sender Email:</strong> {ticket.customerEmail}</li>
                                        <li className="list-group-item"><strong>Sender Subject:</strong> {ticket.ticketsubject}</li>
                                    </ul>
                                    <p className="mt-3"><strong>Message:</strong> {ticket.ticketmessage}</p>
                                </div>
                            </div>

                            <div className="card p-4 mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Replies</h5>
                                    {replies.length > 0 ? (
                                        replies.map((reply, index) => (
                                            <div
                                                key={index}
                                                className={`d-flex mb-3 ${reply.user_id === "admin" ? "justify-content-end" : "justify-content-start"}`}
                                            >
                                                <div className={`alert ${reply.user_id === "admin" ? "bg-primary text-white" : "bg-light text-dark"} p-3`} style={{ maxWidth: "60%" }}>
                                                    <strong>{reply.user_id === "admin" ? "Admin" : "User"}:</strong>
                                                    <p className="mb-1 text-black ">{reply.ticketmessage}</p>
                                                    <small className="text-muted ">{reply.replyDate}</small>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No replies yet.</p>
                                    )}
                                </div>
                            </div>

                            <div className="card p-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Send a Reply</h5>
                                    <form onSubmit={handleReply}>
                                        <div className="form-group mb-3">
                                            <textarea
                                                name="ticketmessage"
                                                className="form-control"
                                                placeholder="Write your reply here..."
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn-sm">Send Reply</button>
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

export default AdminReply;
