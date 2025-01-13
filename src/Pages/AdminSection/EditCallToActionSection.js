import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditCallToActionSection = () => {

    const [call, setAction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/actions/${id}`)
            .then((res) => res.json())
            .then((info) => setAction(info));
    }, [call]);

    const handleActionSection = (event) => {
        event.preventDefault();
        const heading = event.target.heading.value;
        const subHeading = event.target.subHeading.value;

        const actionSection = {
            heading,
            subHeading,
        };

        const url = `http://localhost:5000/update-actions/${id}`;
        fetch(url, {
            method: "PUT",
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
                        <div className="row justify-content-center"> {/* Center the row */}
                            <div className="col-lg-8 col-md-12 text-center"> {/* Center the content */}
                                <h2 className="mb-5">Update Action</h2>

                                <form className="contact-form" onSubmit={handleActionSection}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="heading" defaultValue={call.heading} placeholder="Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control"hidden="subHeading" defaultValue={call.subHeading} placeholder="Heading two" required />
                                            </div>
                                        </div> 
                                        
                                    </div>

                                    <div className="d-flex justify-content-center"> {/* Center the button */}
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Update Action</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EditCallToActionSection;
