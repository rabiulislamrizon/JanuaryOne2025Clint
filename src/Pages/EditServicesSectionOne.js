import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';


const EditServicesSectionOne = () => {
    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-one`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-item-one`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;

        const serviceSection = {
            servicesubHeading,
            serviceHeading,
        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Item is Added');
            });
    };

    return (
        <>

            <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area  d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <h2 className="mt-5 text-center">Update Service Text</h2>
                            {service.length === 1 && (
                                <>
                                    {service.map((s) => (
                                        <Link
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white my-3"
                                            to={`/servicetext-edit-one/${s._id}`}
                                        >
                                            Update Service
                                        </Link>
                                    ))}
                                </>
                            )}
                            {service.length === 0 && (
                                <form className="contact-form" onSubmit={handleServiceSection}>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="serviceHeading"
                                                    placeholder="Service Heading"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="servicesubHeading"
                                                    placeholder="Service Sub Heading"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                                                data-animation="fadeInRight"
                                                data-delay=".8s"
                                            >
                                                Update Services
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}


                        </div>
                    </div>

                    {/* Service Items List */}
                    <div className="row justify-content-center mt-5">
                        {items.map((s) => (
                            <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={s._id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h4 className="card-title">{s.serviceTitleOne}</h4>
                                        <p className="card-text">{s.serviceDetailsOne}</p>
                                        <Link
                                            to={`/service-edit-one/${s._id}`}
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-2"
                                        >
                                            Edit Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <MargingTop></MargingTop>
        </>
    );
};

export default EditServicesSectionOne;
