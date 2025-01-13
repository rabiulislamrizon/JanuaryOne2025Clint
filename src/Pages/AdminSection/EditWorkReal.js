import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditWorkReal = () => {
    const [stepwork, setWork] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/worksec-real/${id}`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, [stepwork]);

    const handleBannerSection = (event) => {
        event.preventDefault();
        const stepNumberReal = event.target.stepNumberReal.value;
        const stepTitleReal = event.target.stepTitleReal.value;
        const stepDetailsReal = event.target.stepDetailsReal.value;

        const workSection = {
            stepNumberReal,
            stepTitleReal,
            stepDetailsReal,
        };

        const url = `http://localhost:5000/update-worksec-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Work Section is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area vh-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 d-flex flex-column align-items-center">
                                <h2 className="text-center mb-4">Update Work Step</h2>
                                <form className="contact-form w-100" onSubmit={handleBannerSection}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepNumberReal" hidden defaultValue={stepwork.stepNumberReal} placeholder="Step Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepTitleReal" defaultValue={stepwork.stepTitleReal} placeholder="Step Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepDetailsReal" defaultValue={stepwork.stepDetailsReal} placeholder="Step Details" required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                                Update Work Section
                                            </button>
                                        </div>
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

export default EditWorkReal;
