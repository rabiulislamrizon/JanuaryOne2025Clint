import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Pagination from './Pagination';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';

const EmailTemplate = () => {
    const [emails, setEmails] = useState([]);
    const [filteredEmails, setFilteredEmails] = useState([]);
    const [searchSubject, setSearchSubject] = useState('');
    const [searchBody, setSearchBody] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Shah-Limon/em-list/master/amazon-lead/email-templates/email-templates.json`)
            .then((res) => res.json())
            .then((info) => {
                const shuffledEmails = info.map(email => ({
                    ...email
                }));
                setEmails(shuffledEmails);
                setFilteredEmails(shuffledEmails);
            });
    }, []);

    useEffect(() => {
        filterEmails();
    }, [searchSubject, searchBody]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchSubject, searchBody]);

    const filterEmails = () => {
        const filtered = emails.filter(email => {
            const subjectMatch = email.subject.toLowerCase().includes(searchSubject.toLowerCase());
            const bodyMatch = email.category.toLowerCase().includes(searchBody.toLowerCase());
            return subjectMatch && bodyMatch;
        });
        setFilteredEmails(filtered);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Successfully Copied!');
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEmails = filteredEmails.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <MargingTop></MargingTop>
            <div className="main-content mb-5 container" >
                <div className="page-content">
                    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary" id='new-dashboard'>
                        <div className="flex-grow-1 overflow-y-lg-auto">
                            <div className="container-fluid mt-5 mb-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="table-filter-info">
                                                    <div className="d-flex flex-wrap justify-content-between">
                                                        <div className="form-group col-6">
                                                            <input
                                                                type="text"
                                                                className="form-control border"
                                                                placeholder="Search by Subject"
                                                                value={searchSubject}
                                                                onChange={(e) => setSearchSubject(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <input
                                                                type="text"
                                                                className="form-control border"
                                                                placeholder="Search by Category"
                                                                value={searchBody}
                                                                onChange={(e) => setSearchBody(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='mt-50 row'>

                                    {currentEmails.map((email, index) =>
                                        <div className="col-lg-4 col-md-6 col-12 mb-15" key={index}>
                                            <div className="card text-center">
                                                <div className="card-header">Category: {email.category}</div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Subject: {email.subject}</h5>
                                                    <div className="d-flex justify-content-evenly">
                                                        <a href="#" type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#colorModal${index}`}>
                                                            View Full Email
                                                        </a>
                                                        <div className="modal fade" id={`colorModal${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabelStatus${index}`} aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id={`exampleModalLabelStatus${index}`}>Category: {email.category}</h5>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <h5 className="card-title mb-1">
                                                                            Subject:
                                                                            <button
                                                                                className="btn btn-sm"
                                                                                onClick={() => copyToClipboard(email.subject)}
                                                                                style={{ backgroundColor: '#c4e73a' }}
                                                                            >
                                                                              <i class="bx bxs-copy"></i>
                                                                            </button>
                                                                        </h5>
                                                                        <textarea
                                                                            type="text"
                                                                            className="form-control border"
                                                                            placeholder="Message Subject"
                                                                            defaultValue={email.subject}
                                                                        />
                                                                        <h5 className="card-title mb-2 mt-2">Message: <button className="btn btn-sm" onClick={() => copyToClipboard(email.message)} style={{ backgroundColor: '#c4e73a' }}>
                                                                        <i class="bx bxs-copy"></i>
                                                                        </button>
                                                                        </h5>
                                                                        <textarea
                                                                            type="text"
                                                                            rows={5}
                                                                            className="form-control border"
                                                                            placeholder="Message Body"
                                                                            defaultValue={email.message}
                                                                        />
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {filteredEmails.length > itemsPerPage && (
                                    <div className="pagination-container mt-5">
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={Math.ceil(filteredEmails.length / itemsPerPage)}
                                            onPageChange={handlePageChange}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <MargingTop></MargingTop>
            </div>
        </>
    );
};

export default EmailTemplate;
