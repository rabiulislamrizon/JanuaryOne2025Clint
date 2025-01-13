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
import seoreport from './Images/reportSEO.png';

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
                        <h5 className='card-title'>Setting</h5>
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

        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card text-center shadow-sm'>
                <Link to='/employees' className='text-decoration-none'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='icon-img mb-3'>
                            <img src={employee} alt="Employees" className='img-fluid' />
                        </div>
                        <h5 className='card-title'>Employees</h5>
                    </div>
                </Link>
            </div>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card text-center shadow-sm'>
                <Link to='/video-template' className='text-decoration-none'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='icon-img mb-3'>
                            <img src={video} alt="Editable Videos" className='img-fluid' />
                        </div>
                        <h5 className='card-title'>Editable Videos</h5>
                    </div>
                </Link>
            </div>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card text-center shadow-sm'>
                <Link to='/graphic-template' className='text-decoration-none'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='icon-img mb-3'>
                            <img src={graphics} alt="Editable Graphics" className='img-fluid' />
                        </div>
                        <h5 className='card-title'>Editable Graphics</h5>
                    </div>
                </Link>
            </div>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card text-center shadow-sm'>
                <Link to='/email-template' className='text-decoration-none'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='icon-img mb-3'>
                            <img src={emailtem} alt="Email Templates" className='img-fluid' />
                        </div>
                        <h5 className='card-title'>Email Templates</h5>
                    </div>
                </Link>
            </div>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className='card text-center shadow-sm'>
                <Link to='/video-tutorial' className='text-decoration-none'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='icon-img mb-3'>
                            <img src={videotew} alt="Video Tutorials" className='img-fluid' />
                        </div>
                        <h5 className='card-title'>Video Tutorials</h5>
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
