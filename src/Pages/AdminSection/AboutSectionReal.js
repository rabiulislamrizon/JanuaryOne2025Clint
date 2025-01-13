import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AboutSectionReal = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);

    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImgOne = event.target.aboutImgOne.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutText = event.target.aboutText.value;
        const pointOne = event.target.pointOne.value;
        const pointOneText = event.target.pointOneText.value;
        const pointTwo = event.target.pointTwo.value;
        const pointTwoText = event.target.pointTwoText.value;

        const aboutSection = {
            aboutImgOne,
            aboutHeading,
            aboutDetails,
            aboutText,
            pointOne,
            pointOneText,
            pointTwo,
            pointTwoText,
        };

        const url = `http://localhost:5000/add-about`;
        fetch(url, {
            method: "POST",
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
           
            <section  className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h2 className='mb-5'> Update About </h2>
                            {
                                about.length === 1 &&
                                about.map(a => (
                                    <Link className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-4' to={`/about-real/${a._id}`}>
                                        Update About Section
                                    </Link>
                                ))
                            }
                            {
                                about.length === 0 &&
                                <form className="contact-form" onSubmit={handleAboutSection}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutImgOne" placeholder="About Image URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutHeading" placeholder="About Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutDetails" placeholder="About Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="aboutText" placeholder="About Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOne" placeholder="Point One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOneText" placeholder="Point One Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwo" placeholder="Point Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwoText" placeholder="Point Two Text" required />
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" type="submit"> Update About </button>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSectionReal;
