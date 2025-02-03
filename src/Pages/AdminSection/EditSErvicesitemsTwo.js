import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditSErvicesitemsTwo = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-item-two/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItemOne = (event) => {
        event.preventDefault();

        const serviceIconTwo = event.target.serviceIconTwo.value;
        const serviceTitleTwo = event.target.serviceTitleTwo.value;
        const serviceDetailsTwo = event.target.serviceDetailsTwo.value;

        const itemSection = {

            serviceIconTwo,
            serviceTitleTwo,
            serviceDetailsTwo,
        };

        const url = `http://localhost:5000/update-service-item-two/${id}`;
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

            <HeaderBottom></HeaderBottom>
            <div className='container  vh-100 d-flex align-items-center justify-content-center'>
                <form class="contact-form" onSubmit={handleAddItemOne}>
                    <div class="row">
                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceIconTwo" defaultValue={item.serviceIconTwo} placeholder="Service Image" required />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceTitleTwo" defaultValue={item.serviceTitleTwo} placeholder="Service Title" required />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="serviceDetailsTwo" defaultValue={item.serviceDetailsTwo} placeholder="Service Details" required />
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

export default EditSErvicesitemsTwo;