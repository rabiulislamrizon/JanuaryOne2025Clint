import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [orderStatusFilter, setOrderStatusFilter] = useState('');
    const [paymentStatusFilter, setPaymentStatusFilter] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => {
                const reversedOrders = info.reverse();
                setOrders(reversedOrders);
                setFilteredOrders(reversedOrders); // Set initial filtered orders
            });
    }, []);

    // Handle Filters
    useEffect(() => {
        let filtered = orders;

        if (searchTerm) {
            filtered = filtered.filter(order =>
                order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (orderStatusFilter) {
            filtered = filtered.filter(order => order.orderStatus === orderStatusFilter);
        }

        if (paymentStatusFilter) {
            filtered = filtered.filter(order => order.paymentStatus === paymentStatusFilter);
        }

        setFilteredOrders(filtered);
    }, [searchTerm, orderStatusFilter, paymentStatusFilter, orders]);

    // Pagination for Orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <HeaderBottom />

            <MargingTop></MargingTop>

            <section id="services" className="services-area  mb-150 ">

                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Customer Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={orderStatusFilter}
                                onChange={(e) => setOrderStatusFilter(e.target.value)}
                            >
                                <option value="">Filter by Order Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Delivered">Completed</option>

                            </select>
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={paymentStatusFilter}
                                onChange={(e) => setPaymentStatusFilter(e.target.value)}
                            >
                                <option value="">Filter by Payment Status</option>
                                <option value="Paid">Paid</option>
                                <option value="UnPaid">Unpaid</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <h2>Total Orders</h2>
                            <div className="container table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">SL.</th>
                                            <th scope="col">Order Date</th>
                                           
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Customer Email</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Payment Method</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={order._id}>
                                                <th scope="row">{index + 1 + (currentPage - 1) * ordersPerPage}</th>
                                                <td>{order.orderDate}</td>
                                                
                                                <td>{order.customerName}</td>
                                                <td>{order.customerEmail}</td>
                                                <td>${order.packagePrice}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.paymentStatus}</td>
                                                <td>PayPal</td>
                                                <td><Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white  ' to={`/admin/payment-status/${order._id}`}>Update Order</Link></td>
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
                                    {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }, (_, i) => (
                                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <span className="page-link" onClick={() => paginate(i + 1)}>
                                                {i + 1}
                                            </span>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(filteredOrders.length / ordersPerPage) ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <MargingTop></MargingTop>
            </section>

            <MargingTop></MargingTop>
        </>
    );
};

export default TotalOrders;
