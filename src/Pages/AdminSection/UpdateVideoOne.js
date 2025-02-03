import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const UpdateVideoOne = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos-one/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const headingVideoOne = event.target.headingVideoOne.value;
        const videoImageOne = event.target.videoImageOne.value;
        const videoLinkOne = event.target.videoLinkOne.value;
        const videopointOneOne = event.target.videopointOneOne.value;
        const videopointTwoOne = event.target.videopointTwoOne.value;
        const videoButtonTextOne = event.target.videoButtonTextOne.value;
        const videoButtonURLOne = event.target.videoButtonURLOne.value;


        const videoSection = {
            headingVideoOne,
            videoImageOne,
            videoLinkOne,
            videopointOneOne,
            videopointTwoOne,
            videoButtonTextOne,
            videoButtonURLOne,



        };

        const url = `http://localhost:5000/update-videos-one/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Video Section is Updated');
            });
    };


    return (
        <>
            <HeaderBottom></HeaderBottom>

            <div>
               

                <section id="services" className="services-area  pb-90 fix mb-5 vh-100 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 col-md-12">
                                <h2 className="mb-5">Update Video</h2>

                                <form className="contact-form" onSubmit={handleVideoSection}>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="headingVideoOne"
                                                    defaultValue={video.headingVideoOne}
                                                    placeholder="Video Icon URL"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videoImageOne"
                                                    defaultValue={video.videoImageOne}
                                                    placeholder="Video Section Details"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videoLinkOne"
                                                    defaultValue={video.videoLinkOne}
                                                    placeholder="Video Link"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videopointOneOne"
                                                    defaultValue={video.videopointOneOne}
                                                    placeholder="Video Point One"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videopointTwoOne"
                                                    defaultValue={video.videopointTwoOne}
                                                    placeholder="Video Point Two"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videoButtonTextOne"
                                                    defaultValue={video.videoButtonTextOne}
                                                    placeholder="Video Button Text"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name">
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    name="videoButtonURLOne"
                                                    defaultValue={video.videoButtonURLOne}
                                                    placeholder="Video Button URL"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="slider-btn text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                                Update Video Section
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

export default UpdateVideoOne;