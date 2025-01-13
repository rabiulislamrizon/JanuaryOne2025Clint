import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditPricingReal = () => {
    const [pricingone, setPricingOne] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/pricing-real/${id}`)
            .then((res) => res.json())
            .then((info) => setPricingOne(info));
    }, [id]);

    const handlePackegeOne = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const PackageSection = Object.fromEntries(formData.entries());

        const url = `http://localhost:5000/pricing-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(PackageSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Pricing Package Is Updated');
            });
    };

    return (
        <>
           
            <section id="services" className="services-area py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            
                            <form className="contact-form" onSubmit={handlePackegeOne}>
                            <h2 className="mb-5 text-center">Update Your Pricing Plan</h2>
                                <div className="row">
                                    {['packageNameReal', 'packagePriceReal', 'packageButtonTextReal', 'packagePointOneReal', 'packagePointTwoReal', 'packagePointThreeReal', 'packagePointFourReal', 'packagePointFiveReal', 'packagePointSixReal', 'packagePointSevenReal', 'packagePointEightReal', 'packagePointNineReal', 'packagePointTenReal'].map((field, index) => (
                                        <div className="col-lg-12 " key={index}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded"
                                                    name={field}
                                                    defaultValue={pricingone[field]}
                                                  
                                                    required
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Update Plan</button>
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

export default EditPricingReal;
