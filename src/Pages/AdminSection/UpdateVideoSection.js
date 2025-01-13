import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const UpdateVideoSection = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);


    const handleVideoSection = (event) => {
        event.preventDefault();
        const headingVideo = event.target.headingVideo.value;
        const videoImage = event.target.videoImage.value;
        const videoLink = event.target.videoLink.value;
        const videopointOne = event.target.videopointOne.value;
        const videopointTwo = event.target.videopointTwo.value;
        const videoButtonText = event.target.videoButtonText.value;
        const videoButtonURL = event.target.videoButtonURL.value;


        const videoSection = {
            headingVideo,
            videoImage,
            videoLink,
            videopointOne,
            videopointTwo,
            videoButtonText,
            videoButtonURL,



        };

        const url = `http://localhost:5000/update-videos/${id}`;
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
                                                    name="headingVideo"
                                                    defaultValue={video.headingVideo}
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
                                                    name="videoImage"
                                                    defaultValue={video.videoImage}
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
                                                    name="videoLink"
                                                    defaultValue={video.videoLink}
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
                                                    name="videopointOne"
                                                    defaultValue={video.videopointOne}
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
                                                    name="videopointTwo"
                                                    defaultValue={video.videopointTwo}
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
                                                    name="videoButtonText"
                                                    defaultValue={video.videoButtonText}
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
                                                    name="videoButtonURL"
                                                    defaultValue={video.videoButtonURL}
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

export default UpdateVideoSection;