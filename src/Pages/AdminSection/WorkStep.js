import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const WorkStep = () => {
    const [stepwork, setWork] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/worksec`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, []);

    const handleWorkSection = (event) => {
        event.preventDefault();
        const stepNumber = event.target.stepNumber.value;
        const stepTitle = event.target.stepTitle.value;
        const stepDetails = event.target.stepDetails.value;

        const workSection = { stepNumber, stepTitle, stepDetails };

        const url = `http://localhost:5000/add-worksec`;
        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Work Step is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section className="services-area vh-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <h3 className="text-center">Add Work Section</h3>
                                <form className="contact-form" onSubmit={handleWorkSection}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepNumber" placeholder="Step Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepTitle" placeholder="Step Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepDetails" placeholder="Step Details" required />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-3">Add Work Step</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <h3 className="text-center mt-5 mb-3">Your Work Step List</h3>
                        <div className="row justify-content-center">
                            {
                                stepwork.map((work, index) => (
                                    <div className="col-lg-4 col-md-6 mb-4" key={work._id}>
                                        <div className="card h-100 text-center">
                                            <div className="card-body">
                                                <h5 className="card-title">{work.stepNumber}: {work.stepTitle}</h5>
                                                <p className="card-text">{work.stepDetails}</p>
                                            </div>
                                            <div className="card-footer">
                                                <Link to={`/edit-work/${work._id}`} className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Edit Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WorkStep;
