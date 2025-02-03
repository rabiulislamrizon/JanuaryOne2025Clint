import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import UserDashboardMenu from './UserDashboardMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';

const PendingOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    // Pagination for Orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders
        .filter(order => order.customerEmail === user?.email)
        .slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <MargingTop></MargingTop>
            <section id="services" className="services-area pb-90 fix mb-5 vh-100">
                <div className="container">
                    <div></div>
                    <div>

                        <div>
                            <h2>Your Pending Orders</h2>

                            {/* Responsive Table */}
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover shadow-sm">
                                    <thead className="table-light text-dark">
                                        <tr>
                                            <th scope="col" className="text-center">#</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment Status</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={order._id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.customerName}</td>
                                                <td>${order.packagePrice} USD</td>
                                                <td>
                                                    <span
                                                        className={`badge ${order.orderStatus === 'Completed' ? 'bg-success' : 'bg-warning'} p-2`}
                                                    >
                                                        {order.orderStatus}
                                                    </span>
                                                </td>
                                                <td>
                                                    {order.paymentStatus === 'UnPaid' && (
                                                        <Link
                                                            className="btn btn-outline-warning btn-sm fw-bold rounded-pill"
                                                            to={`/pay-now/${order._id}`}
                                                        >
                                                            <i className="fas fa-credit-card me-1"></i> Pay Now
                                                        </Link>
                                                    )}
                                                    {order.paymentStatus === 'Paid' && (
                                                        <span className="badge bg-success p-2">
                                                            <i className="fas fa-check-circle me-1"></i> Paid
                                                        </span>
                                                    )}

                                                    {order.paymentStatus === 'Cancelled' && (
                                                        <>
                                                            <span className="badge bg-danger p-2">
                                                                <i className="fas fa-times-circle me-1"></i> Cancelled
                                                            </span>
                                                            <Link
                                                                className="btn btn-outline-warning btn-sm fw-bold rounded-pill m-1"
                                                                to={`/pay-now/${order._id}`}
                                                            >
                                                                <i className="fas fa-credit-card me-1"></i> Pay Now 
                                                            </Link>
                                                        </>
                                                    )}
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Bootstrap Pagination for Orders */}
                            <nav aria-label="Orders Page Navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</span>
                                    </li>
                                    {Array.from({ length: Math.ceil(orders.filter(order => order.customerEmail === user?.email).length / ordersPerPage) }, (_, i) => (
                                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <span className="page-link" onClick={() => paginate(i + 1)}>
                                                {i + 1} {currentPage === i + 1 && <span className="sr-only">(current)</span>}
                                            </span>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(orders.filter(order => order.customerEmail === user?.email).length / ordersPerPage) ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <MargingTop></MargingTop>
            </section>
        </>
    );
};

export default PendingOrder;
