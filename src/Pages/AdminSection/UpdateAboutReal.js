import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutReal = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-us-real/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);

    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImgOneReal = event.target.aboutImgOneReal.value;
        const aboutHeadingReal = event.target.aboutHeadingReal.value;
        const aboutDetailsReal = event.target.aboutDetailsReal.value;
        const aboutTextReal = event.target.aboutTextReal.value;
        const pointOneReal = event.target.pointOneReal.value;
        const pointOneTextReal = event.target.pointOneTextReal.value;
        const pointTwoReal = event.target.pointTwoReal.value;
        const pointTwoTextReal = event.target.pointTwoTextReal.value;

        const aboutSection = {
            aboutImgOneReal,
            aboutHeadingReal,
            aboutDetailsReal,
            aboutTextReal,
            pointOneReal,
            pointOneTextReal,
            pointTwoReal,
            pointTwoTextReal,
        };

        const url = `http://localhost:5000/update-about-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('About is Updated');
            });
    };

    return (
        <>
            
            <section id="services" className="services-area vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">


                            <form className="contact-form" onSubmit={handleAboutSection}>
                                <h2 className='mb-5'>Update About</h2>
                                <div className="row justify-content-center">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgOneReal" defaultValue={about.aboutImgOneReal} placeholder="Image One" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeadingReal" defaultValue={about.aboutHeadingReal} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutDetailsReal" defaultValue={about.aboutDetailsReal} placeholder="About Details" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutTextReal" defaultValue={about.aboutTextReal} placeholder="About Text" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneReal" defaultValue={about.pointOneReal} placeholder="Point One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneTextReal" defaultValue={about.pointOneTextReal} placeholder="Point One Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoReal" defaultValue={about.pointTwoReal} placeholder="Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoTextReal" defaultValue={about.pointTwoTextReal} placeholder="Point Two Text" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 text-center">
                                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Update About</button>
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

export default UpdateAboutReal;
