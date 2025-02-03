import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAbouSectionOne = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-one/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);

    const handleAboutSectionOne = (event) => {
        event.preventDefault();

        const aboutImgOneOne = event.target.aboutImgOneOne.value;
        const aboutHeadingOne = event.target.aboutHeadingOne.value;
        const aboutDetailsOne = event.target.aboutDetailsOne.value;
        const aboutTextOne = event.target.aboutTextOne.value;
        const pointOneOne = event.target.pointOneOne.value;
        const pointOneTextOne = event.target.pointOneTextOne.value;
        const pointTwoOne = event.target.pointTwoOne.value;
        const pointTwoTextOne = event.target.pointTwoTextOne.value;

        const aboutSection = {
            aboutImgOneOne,
            aboutHeadingOne,
            aboutDetailsOne,
            aboutTextOne,
            pointOneOne,
            pointOneTextOne,
            pointTwoOne,
            pointTwoTextOne,
        };

        const url = `http://localhost:5000/update-about-one/${id}`;
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
                                            <input type="text" className="form-control" name="aboutImgOneOne" defaultValue={about.aboutImgOneOne} placeholder="Image One" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeadingOne" defaultValue={about.aboutHeadingOne} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutDetailsOne" defaultValue={about.aboutDetailsOne} placeholder="About Details" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutTextOne" defaultValue={about.aboutTextOne} placeholder="About Text" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneOne" defaultValue={about.pointOneOne} placeholder="Point One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOneTextOne" defaultValue={about.pointOneTextOne} placeholder="Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoOne" defaultValue={about.pointTwoOne} placeholder="Point Three" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwoTextOne" hidden defaultValue={about.pointTwoTextOne} placeholder="Point Two Text" required />
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

export default UpdateAbouSectionOne;
