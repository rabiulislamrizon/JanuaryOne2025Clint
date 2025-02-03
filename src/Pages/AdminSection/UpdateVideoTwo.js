import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const UpdateVideoTwo = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos-two/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const headingVideoTwo = event.target.headingVideoTwo.value;
        const videoImageTwo = event.target.videoImageTwo.value;
        const videoLinkTwo = event.target.videoLinkTwo.value;
        const videopointOneTwo = event.target.videopointOneTwo.value;
        const videopointTwoTwo = event.target.videopointTwoTwo.value;
        const videoButtonTextTwo = event.target.videoButtonTextTwo.value;
        const videoButtonURLTwo = event.target.videoButtonURLTwo.value;


        const videoSection = {
            headingVideoTwo,
            videoImageTwo,
            videoLinkTwo,
            videopointOneTwo,
            videopointTwoTwo,
            videoButtonTextTwo,
            videoButtonURLTwo,



        };

        const url = `http://localhost:5000/update-videos-two/${id}`;
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
                                                    name="headingVideoTwo"
                                                    defaultValue={video.headingVideoTwo}
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
                                                    name="videoImageTwo"
                                                    defaultValue={video.videoImageTwo}
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
                                                    name="videoLinkTwo"
                                                    defaultValue={video.videoLinkTwo}
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
                                                    name="videopointOneTwo"
                                                    defaultValue={video.videopointOneTwo}
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
                                                    name="videopointTwoTwo"
                                                    defaultValue={video.videopointTwoTwo}
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
                                                    name="videoButtonTextTwo"
                                                    defaultValue={video.videoButtonTextTwo}
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
                                                    name="videoButtonURLTwo"
                                                    defaultValue={video.videoButtonURLTwo}
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

export default UpdateVideoTwo;