import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditVideoTextReal = () => {
    const [videotext, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/videos-real/${id}`)
            .then((res) => res.json())
            .then((info) => setVideo(info));
    }, [id]);

    const handleVideoText = (event) => {
        event.preventDefault();
        const headingVideoReal = event.target.headingVideoReal.value;
        const videoImageReal = event.target.videoImageReal.value;
        const videoLinkReal = event.target.videoLinkReal.value;

        const videoSection = {
            headingVideoReal,
            videoImageReal,
            videoLinkReal,
        };

        const url = `http://localhost:5000/update-videos-real/${id}`;
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
                                                    name="headingVideoReal"
                                                    defaultValue={videotext.headingVideoReal}
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
                                                    name="videoImageReal"
                                                    defaultValue={videotext.videoImageReal}
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
                                                    name="videoLinkReal"
                                                    defaultValue={videotext.videoLinkReal}
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

export default EditVideoTextReal;
