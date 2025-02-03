import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditServicesTwo = () => {
    const [servicetext, setService] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/service-two/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, [id]);

    const handleServiceText = (event) => {
        event.preventDefault();
        const servicesubHeadingTwo = event.target.servicesubHeadingTwo.value;
      

        const serviceSection = {
            servicesubHeadingTwo,
          
        };

        const url = `http://localhost:5000/update-service-two/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Service Text is Updated');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
           
            <section id="services" className="services-area vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <h2 className="text-center mb-4">Update Service Text</h2>
                            <form
                                className="contact-form d-flex flex-column align-items-center"
                                onSubmit={handleServiceText}
                            >
                            
                                <div className="form-group w-100 mb-3">
                                    <input
                                   
                                        type="text"
                                        className="form-control"
                                        name="servicesubHeadingTwo"
                                        defaultValue={servicetext.servicesubHeadingTwo}
                                        placeholder="Service Sub Heading"
                                        required
                                    />
                                </div>
                                <div className="slider-btn">
                                    <button
                                        className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white "
                                        data-animation="fadeInRight"
                                        data-delay=".8s"
                                    >
                                        Update Services Text
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditServicesTwo;
