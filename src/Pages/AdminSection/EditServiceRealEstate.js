import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditServiceRealEstate = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items-real-estate/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIconReal = event.target.serviceIconReal.value;
        const serviceTitleReal = event.target.serviceTitleReal.value;
        const serviceDetailsReal = event.target.serviceDetailsReal.value;

        const itemSection = {

            serviceIconReal,
            serviceTitleReal,
            serviceDetailsReal,
        };

        const url = `http://localhost:5000/service-real-estate/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Updated');
            });
    };


    return (
        <>

        

            <div className='container  vh-100 d-flex align-items-center justify-content-center'>
                <form class="contact-form" onSubmit={handleAddItem}>
                    <div class="row">

                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceIconReal" defaultValue={item.serviceIconReal} placeholder="Service Image" required />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceTitleReal" defaultValue={item.serviceTitleReal} placeholder="Service Title" required />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceDetailsReal" defaultValue={item.serviceDetailsReal} placeholder="Service Details" required />
                            </div>
                        </div>



                        <div class="slider-btn">
                            <button class="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-5" data-animation="fadeInRight" data-delay=".8s"> Update service </button>
                        </div>
                    </div>

                </form>

            </div>

        </>
    );
};

export default EditServiceRealEstate;