import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const AllReports = () => {
    const [reports, setReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [seoreport, setSEOreports] = useState([]);

    useEffect(() => {
        // Fetch SEO reports
        fetch(`http://localhost:5000/seos`)
            .then((res) => res.json())
            .then((info) => setSEOreports(info));
    }, []);

    useEffect(() => {
        // Fetch general reports
        fetch('http://localhost:5000/reports')
            .then((res) => res.json())
            .then((info) => setReports(info.reverse()))
            .catch((error) => console.error('Error fetching reports:', error));
    }, []);

    // Pagination calculation
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentReports = reports.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Handle Previous and Next buttons
    const handlePrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    const handleNextPage = () => setCurrentPage((nextPage) => Math.min(nextPage + 1, Math.ceil(reports.length / itemsPerPage)));

    // Generate pagination items
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reports.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <HeaderBottom />
            <section id="services" className="services-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mt-5 mb-5">All SEO Reports</h2>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Website URL</th>
                                            <th scope="col">Customer Email</th>                                           
                                         
                                            <th scope="col">View Report</th>
                                            <th scope="col">Audit Now</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentReports.map((t, index) => (
                                            <tr key={t._id}>
                                                <th scope="row">{indexOfFirstItem + index + 1}</th>
                                                <td>{t.websiteURL}</td>
                                                <td>{t.Useremail}</td>
                                                <td>
                                                    {/* Check if there's a matching report in seoreport */}
                                                    {seoreport
                                                        .filter(report => report.reportId === t._id)
                                                        .map(report => (
                                                            <Link
                                                                key={report._id}
                                                                className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn-sm'
                                                                to={`/view-report/${report._id}`}
                                                            >
                                                                View
                                                            </Link>
                                                        ))}
                                                </td>
                                                <td>
                                                    <Link to={`/seo-reports/${t._id}`}>
                                                        <img src="https://i.ibb.co/6FgrxJ7/edit-1.png" alt="edit" />
                                                    </Link>
                                                </td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <Pagination>
                                    <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
                                    {pageNumbers.map((number) => (
                                        <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                                            {number}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next onClick={handleNextPage} disabled={currentPage === pageNumbers.length} />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HeaderBottom />
        </>
    );
};

export default AllReports;
