import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditLogo = () => {
    const [editlogo, setLogo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/logo/${id}`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);

    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;

        const logoSection = { logo };

        const url = `http://localhost:5000/logo/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Logo is Updated');
            });
    };

    return (
        <>

        <HeaderBottom></HeaderBottom>
           
            <section id="services" className="services-area vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h2 className="mb-5">Update Your Logo</h2>

                            <form className="contact-form" onSubmit={handleLogo}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="logo" defaultValue={editlogo.logo} placeholder="Submit Logo" required />
                                        </div>
                                    </div>

                                    <div className="slider-btn">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Update Your Logo</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditLogo;
