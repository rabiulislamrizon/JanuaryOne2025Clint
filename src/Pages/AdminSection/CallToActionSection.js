import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const CallToActionSection = () => {
    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, []);

    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;

        const actionSection = {
            heading,
            subHeading,
        };

        const url = `http://localhost:5000/add-action`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(actionSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Action is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
            <HeaderBottom />
                <section id="services" className="services-area vh-100">
                    <div className="container">
                        <div className="row justify-content-center"> {/* Center the content */}
                            <div className="col-lg-8 col-md-12 text-center"> {/* Center the text */}
                                <h2 className='mb-5'>Update Call To Action</h2>

                                {
                                    action.length === 1 ?
                                    action.map(c =>
                                        <Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-3' to={`/edit-call/${c._id}`}>Edit Call To Action</Link>
                                    ) : (
                                        <form className="contact-form" onSubmit={handleActionSection}>
                                            <div className="row justify-content-center"> {/* Center the form */}
                                                <div className="col-lg-12 col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="heading" placeholder="Heading" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subHeading" placeholder="Heading Two" required />
                                                    </div>
                                                </div>
                                                <div className="slider-btn mb-3">
                                                    <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Add Call To Action</button>
                                                </div>
                                            </div>
                                        </form>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CallToActionSection;
