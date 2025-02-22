import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gear from "./Images/gear.png";
import orders from './Images/orders.png';
import msg from './Images/message.png';
import sub from './Images/subscriber.png';
import payment from './Images/paypal.png';
import emailicon from './Images/email.png';
import employee from './Images/employee.png';
import video from './Images/video-player.png';
import emailtem from './Images/newsletter.png';
import graphics from './Images/web-design.png';
import videotew from './Images/video-tutorials.png';
import addpost from './Images/add-post.png';
import allpost from './Images/allpost.png';
import author from './Images/author.png';
import adcate from './Images/add-category.png';
import allcate from './Images/all-category.png';


import './AdminMenu.css';

const AdminMenu = () => {
    const [paypal, setPaypal] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/paypal-email`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);

    return (
        <>

            <div className='container'>
                <div className='row justify-content-center mt-5 mb-5'>

                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/setting' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={gear} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Setting Home</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/setting-one' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={gear} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Setting Home 1 </h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/setting-two' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={gear} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Setting Home 2</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/total-orders' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={orders} alt="Total Orders" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Total Orders</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/add-post' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={addpost} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Add Post</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/all-post' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={allpost} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>All Post</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/admin/add-category' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={adcate} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Add Category</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/admin/category' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={allcate} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>All Category</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/add-author' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={author} alt="Setting" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Author</h5>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/admin-support' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src="https://i.ibb.co/Mph1Pbj/support.png" alt="Messages" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Support Section</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/all-messages' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={msg} alt="Messages" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Messages</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <div className='card text-center shadow-sm'>
                            <Link to='/all-subscriber' className='text-decoration-none'>
                                <div className='card-body d-flex flex-column align-items-center'>
                                    <div className='icon-img mb-3'>
                                        <img src={sub} alt="Subscribers" className='img-fluid' />
                                    </div>
                                    <h5 className='card-title'>Subscribers</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>




    );
};

export default AdminMenu;
