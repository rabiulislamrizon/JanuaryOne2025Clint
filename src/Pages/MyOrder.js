import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';

const MyOrder = () => {
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

    const handleCancelOrder = (orderId) => {
        // Implement cancellation logic here (e.g., make an API call to update the order)
        console.log("Cancel Order ID: ", orderId);
    };

    return (
        <>
            <HeaderBottom />
            <MargingTop />
            <section id="services" className="services-area mb-5 vh-100">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2>My Orders</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover shadow-sm">
                            <thead className="table-light text-dark">
                                <tr>
                                    <th scope="col" className="text-center">SL</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Package Price</th>
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
                        <ul className="pagination justify-content-center">
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
            </section>
        </>
    );
};

export default MyOrder;
