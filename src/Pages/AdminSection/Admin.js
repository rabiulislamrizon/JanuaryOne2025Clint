import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import MargingTop from '../../components/HomePage/MargingTop';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orderss, setOrderss] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
    const [currentPageSubscribers, setCurrentPageSubscribers] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page
    const [subscribersPerPage] = useState(3); // Adjust the number of subscribers per page
    const currentDomain = window.location.hostname;

    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    };


    const [users, setUsers] = useState([]);
    const [subscription, setSubscription] = useState([]);
    const [day, setDay] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((info) => setUsers(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/get-subscribtion`)
            .then((res) => res.json())
            .then((info) => setSubscription(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info.reverse())); // Reverse the array initially
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then((res) => res.json())
            .then((info) => setOrderss(info.reverse())); // Reverse the array initially
    }, []);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://server.enjoywiki.com/agency-main-server/orders`)
            .then((res) => res.json())
            .then((info) => {
                setOrders(info);
            });
    }, [user?.email]);

    const calculateRemainingDays = () => {
        const filteredOrders = orders.filter(order => order.customerWebsite === currentDomain);

        const remainingDays = filteredOrders.map(order => {
            const { serviceEnd } = order;
            if (!serviceEnd) return null;
            const endDate = new Date(serviceEnd);
            const currentDate = new Date();
            const timeDifference = endDate.getTime() - currentDate.getTime();
            return Math.ceil(timeDifference / (1000 * 3600 * 24));
        });
        return remainingDays;
    };



    const paidOrders = orderss.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    // Pagination for Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orderss.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination for Subscribers
    const indexOfLastSubscriber = currentPageSubscribers * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);
    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);
    const paginateSubscribers = (pageNumber) => setCurrentPageSubscribers(pageNumber);
    console.log(`Current Domain: ${currentDomain}`);

    return (
        <>
           <HeaderBottom></HeaderBottom>
            <div>
                <MargingTop></MargingTop>
                
                <section id="services" className="services-area pt-4 pb-4 mt-100 mb-100">
                    <div className='d-flex justify-content-center'>
                     
                    </div>
                    <h2 className="text-center mb-4 d-flex justify-content-center">Welcome to Admin Panel</h2>
                    {users.filter(u => u.userEmail === user?.email).length === 1 && (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className='total-sales text-center mb-4 d-flex justify-content-center'>
                                        <h3>Total Sales: ${totalSalesAmount}</h3>
                                    </div>
                                    {/* <div className='d-flex justify-content-center'><Link className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" onClick={handleSignout}>Signout</Link></div> */}
                                    <AdminMenu></AdminMenu>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Orders</h2>

                                    <div className="container table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sl.</th>
                                                    <th scope="col">Order Date</th>
                                                   
                                                    <th scope="col">Customer Name</th>
                                                    <th scope="col">Customer Email</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Order Status</th>
                                                    <th scope="col">Payment Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentOrders.map((order, index) => (
                                                    <tr key={order._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{order.orderDate}</td>
                                                        
                                                        <td>{order.customerName}</td>
                                                        <td>{order.customerEmail}</td>
                                                        <td>${order.packagePrice}</td>
                                                        <td>{order.orderStatus}</td>
                                                        <td>{order.paymentStatus}</td>
                                                        <td><Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white ' to={`/admin/payment-status/${order._id}`}>Update Order</Link></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Bootstrap Pagination for Orders */}
                                    <nav aria-label="Orders Page Navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPageOrders === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(currentPageOrders - 1)} href="javascript:void(0)" tabIndex="-1">Pre</a>
                                            </li>
                                            {Array.from({ length: Math.ceil(orderss.length / ordersPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${currentPageOrders === i + 1 ? 'active' : ''}`}>
                                                    <a className="page-link" onClick={() => paginateOrders(i + 1)} href="javascript:void(0)">
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPageOrders === Math.ceil(orderss.length / ordersPerPage) ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(currentPageOrders + 1)} href="javascript:void(0)">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="mt-5">Total Subscribers</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sl No.</th>
                                                <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentSubscribers.map((subscribe, index) => (
                                                <tr key={subscribe._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{subscribe.subemail}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Bootstrap Pagination for Subscribers */}
                                    <nav aria-label="Subscribers Page Navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPageSubscribers === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers - 1)} href="javascript:void(0)" tabIndex="-1">Pre</a>
                                            </li>
                                            {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }, (_, i) => (
                                                <li key={i} className={`page-item ${currentPageSubscribers === i + 1 ? 'active' : ''}`}>
                                                    <a className="page-link" onClick={() => paginateSubscribers(i + 1)} href="javascript:void(0)">
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPageSubscribers === Math.ceil(subscribers.length / subscribersPerPage) ? 'disabled' : ''}`}>
                                                <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers + 1)} href="javascript:void(0)">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}

                    {users.filter((u) => user.userEmail === u?.email).length === 0 && (
                        <div className="container d-flex justify-content-center">
                            <h4>You don't have any permission Admin</h4>
                        </div>
                    )}
                </section>
                <MargingTop></MargingTop>
                <MargingTop></MargingTop>
            </div>
        </>
    );
};

export default Admin;
