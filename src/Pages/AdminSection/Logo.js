import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Logo = () => {
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/logo`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);

    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;

        const logoSection = { logo };

        const url = `http://localhost:5000/add-logo`;
        fetch(url, {
            method: "POST",
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
            <section id="services" className="services-area vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h2 className="mb-5">Update Your Logo</h2>

                            {logo.length === 1 && (
                                <>
                                    {logo.map((c) => (
                                        <Link
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-4"
                                            to={`/edit-logo/${c._id}`}
                                            key={c._id}
                                        >
                                            Please Edit Your Logo
                                        </Link>
                                    ))}
                                </>
                            )}

                            {logo.length === 0 && (
                                <form className="contact-form" onSubmit={handleLogo}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="logo"
                                                    placeholder="Submit Logo"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-3">
                                                Update Your Logo
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Logo;
