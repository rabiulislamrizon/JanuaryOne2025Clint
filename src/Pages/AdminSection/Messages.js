import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [currentPageUnread, setCurrentPageUnread] = useState(1);
    const [currentPageRead, setCurrentPageRead] = useState(1);
    const [messagesPerPage] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:5000/messages`)
            .then((res) => res.json())
            .then((info) => setMessages(info));
    }, []);

    const paginateUnread = (pageNumber) => setCurrentPageUnread(pageNumber);
    const paginateRead = (pageNumber) => setCurrentPageRead(pageNumber);

    const renderMessages = (messageStatus, currentPage, paginate) => {
        const filteredMessages = messages.filter(message => message.messageStatus === messageStatus);
        const indexOfLastMessage = currentPage * messagesPerPage;
        const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
        const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

        return (
            <tbody>
                {currentMessages.map((message, index) => (
                    <tr key={message._id} className={messageStatus === 'Read' ? 'bg-primary text-white' : ''}>
                        <th scope="row">{index + 1}</th>
                        <td>{message.name}</td>
                        <td>{message.number}</td>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.messageStatus}</td>
                        <td>
                            <Link to={`/view/${message._id}`} className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn-sm">
                                View Message
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const createPaginationItems = (totalPages, currentPage, paginate) => {
        const items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            );
        }
        return items;
    };

    return (
        <>
            <HeaderBottom />
            <MargingTop></MargingTop>
            <section className="services-area vh-100">
         
            
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Unread Messages</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Message Status</th>
                                            <th scope="col">Read Now</th>
                                        </tr>
                                    </thead>
                                    {renderMessages('UnRead', currentPageUnread, paginateUnread)}
                                </table>
                            </div>
                            <nav aria-label="Unread messages pagination">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPageUnread === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginateUnread(currentPageUnread - 1)}>
                                            Previous
                                        </button>
                                    </li>
                                    {createPaginationItems(
                                        Math.ceil(messages.filter(message => message.messageStatus === 'UnRead').length / messagesPerPage),
                                        currentPageUnread,
                                        paginateUnread,
                                    )}
                                    <li className={`page-item ${currentPageUnread === Math.ceil(messages.filter(message => message.messageStatus === 'UnRead').length / messagesPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginateUnread(currentPageUnread + 1)}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                            <h2 className='mt-5'>Read Messages</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Message Status</th>
                                            <th scope="col">Read Now</th>
                                        </tr>
                                    </thead>
                                    {renderMessages('Read', currentPageRead, paginateRead)}
                                </table>
                            </div>

                            <nav aria-label="Read messages pagination">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPageRead === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginateRead(currentPageRead - 1)}>
                                            Previous
                                        </button>
                                    </li>
                                    {createPaginationItems(
                                        Math.ceil(messages.filter(message => message.messageStatus === 'Read').length / messagesPerPage),
                                        currentPageRead,
                                        paginateRead,
                                    )}
                                    <li className={`page-item ${currentPageRead === Math.ceil(messages.filter(message => message.messageStatus === 'Read').length / messagesPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => paginateRead(currentPageRead + 1)}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Messages;
