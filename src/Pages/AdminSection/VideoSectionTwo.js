import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const VideoSectionTwo = () => {

    const [video, setVideo] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/videos`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/videos-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

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
            videoButtonURL
        };

        const url = `http://localhost:5000/add-video`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(' Video Section is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area vh-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 text-center">
                                <h2 className="mb-5 mt-5">Update Video Section</h2>
                                {
                                    video.length === 1 &&
                                    video.map(s =>
                                        <Link className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" to={`/video-two/${s._id}`}>
                                            Update Video
                                        </Link>
                                    )
                                }
                                {
                                    video.length === 0 &&
                                    <form className="contact-form" onSubmit={handleVideoSection}>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="headingVideo" placeholder="Video Section Heading" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videoImage" placeholder="Video Image URL" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videoLink" placeholder="Video Embed  URL" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videopointOne" placeholder="Video Point One" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videopointTwo" placeholder="Video Point Two" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videoButtonText" placeholder="Button Text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <div className="contact-field p-relative c-name ">
                                                    <input type="text" className="form-control" name="videoButtonURL" placeholder="Video Button URL" required />
                                                </div>
                                            </div>
                                            <div className="slider-btn">
                                                <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                                    Update Video Section
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default VideoSectionTwo;
