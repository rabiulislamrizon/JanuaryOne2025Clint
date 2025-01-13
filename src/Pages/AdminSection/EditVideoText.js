import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditVideoText = () => {
    const [videotext, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);

    const handleVideoText = (event) => {
        event.preventDefault();
        const headingVideo = event.target.headingVideo.value;
        const videoImage = event.target.videoImage.value;
        const videoLink = event.target.videoLink.value;

        const videoSection = {
            headingVideo,
            videoImage,
            videoLink,
        };

        const url = `http://localhost:5000/update-videos/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Video Text is Updated');
            });
    };

    return (
        <>
            <HeaderBottom />
            <div>
                <section id="services" className="services-area vh-100">
                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h2 className="mb-5 text-center">Update Video Text</h2>
                                <form className="contact-form" onSubmit={handleVideoText}>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="headingVideo"
                                                    defaultValue={videotext.headingVideo}
                                                    placeholder="Heading Video"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="videoImage"
                                                    defaultValue={videotext.videoImage}
                                                    placeholder="Video Image URL"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="videoLink"
                                                    defaultValue={videotext.videoLink}
                                                    placeholder="Video URL"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <button
                                                className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                                                data-animation="fadeInRight"
                                                data-delay=".8s"
                                            >
                                                Update Video Text
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

export default EditVideoText;
