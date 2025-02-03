import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSectionTwo = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-two/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);

    const handleAboutSectionOne = (event) => {
        event.preventDefault();

        const aboutImgOneTwo = event.target.aboutImgOneTwo.value;
        const aboutHeadingTwo = event.target.aboutHeadingTwo.value;
        const aboutDetailsTwo = event.target.aboutDetailsTwo.value;
        const aboutTextTwo = event.target.aboutTextTwo.value;
        const pointOneTwo = event.target.pointOneTwo.value;
        const pointOneTextTwo = event.target.pointOneTextTwo.value;
        const pointTwoTwo = event.target.pointTwoTwo.value;
        const pointTwoTextTwo = event.target.pointTwoTextTwo.value;

        const aboutSection = {
            aboutImgOneTwo,
            aboutHeadingTwo,
            aboutDetailsTwo,
            aboutTextTwo,
            pointOneTwo,
            pointOneTextTwo,
            pointTwoTwo,
            pointTwoTextTwo,
        };

        const url = `http://localhost:5000/update-about-two/${id}`;
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

        <HeaderBottom></HeaderBottom>
            
            <section id="services" className="services-area vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">


                            <form className="contact-form" onSubmit={handleAboutSectionOne}>
                                <h2 className='mb-5'>Update About</h2>
                                <div className="row justify-content-center">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgOneTwo" defaultValue={about.aboutImgOneTwo} placeholder="Image One" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeadingTwo" defaultValue={about.aboutHeadingTwo} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutDetailsTwo" defaultValue={about.aboutDetailsTwo} placeholder="About Details" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutTextTwo" defaultValue={about.aboutTextTwo} placeholder="About Text" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneTwo" defaultValue={about.pointOneTwo} placeholder="Point One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneTextTwo" defaultValue={about.pointOneTextTwo} placeholder="Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoTwo" defaultValue={about.pointTwoTwo} placeholder="Point Three" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoTextTwo" hidden defaultValue={about.pointTwoTextTwo} placeholder="Point Two Text" required />
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

export default UpdateAboutSectionTwo;
