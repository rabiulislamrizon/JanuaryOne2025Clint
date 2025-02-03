import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import UserDashboardMenu from './UserDashboardMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import { signOut } from 'firebase/auth';
import MargingTop from '../components/HomePage/MargingTop';

const UserDashboard = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse()))
            .catch((error) => console.error('Error fetching orders:', error));
    }, []);

    const handleSignout = () => {
        signOut(auth);
    };

    // Pagination Logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders
        .filter(order => order.customerEmail === user?.email)
        .slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <HeaderBottom />
            <MargingTop></MargingTop>

            <section id="services" className="services-area pt-120 pb-90 fix mb-5 ">
                <div className="container">
                    <div className="text-center mb-4">
                        {/* <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-3" onClick={handleSignout}>Signout</button> */}
                        <h2>Welcome to User Dashboard</h2>
                    </div>

                    <UserDashboardMenu />

                    <div className="text-center mb-4">
                        <h2>My Orders</h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover shadow-sm">
                            <thead className="table-light text-dark">
                                <tr>
                                    <th scope="col" className="text-center">SL No</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Package Price</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Payment Status</th>
                                    {/* <th scope="col" className="text-center">Actions</th> */}
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
                                        {/* <td className="text-center">
                        <button className="btn btn-outline-primary btn-sm rounded-circle me-2">
                            <i className="fas fa-eye"></i>
                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </td> */}
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
                <MargingTop></MargingTop>
            </section>

            <MargingTop></MargingTop>
        </>
    );
};

export default UserDashboard;
