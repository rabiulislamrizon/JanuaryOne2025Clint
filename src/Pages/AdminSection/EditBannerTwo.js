import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditBannerTwo = () => {
    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner-two/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);

    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeadingTwo = event.target.bannerHeadingTwo.value;
        const bannerDetailsTwo = event.target.bannerDetailsTwo.value;
        const imageOneTwo = event.target.imageOneTwo.value;
        const buttonTextTwo = event.target.buttonTextTwo.value;
        const buttonURLTwo = event.target.buttonURLTwo.value;

        const bannerSection = {
            bannerHeadingTwo,
            bannerDetailsTwo,
            imageOneTwo,
            buttonTextTwo,
            buttonURLTwo,
        };

        const url = `http://localhost:5000/update-banner-two/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Banner is Updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" className="services-area vh-100 d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 text-center">
                                <h2 className='mb-5 mt-5'>Update Banner</h2>
                                <form className="contact-form" onSubmit={handleBannerSection}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerHeadingTwo" defaultValue={banner.bannerHeadingTwo} placeholder="Banner Heading One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetailsTwo" defaultValue={banner.bannerDetailsTwo} placeholder="Banner Details " required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="imageOneTwo" defaultValue={banner.imageOneTwo} placeholder="Image One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTextTwo" defaultValue={banner.buttonTextTwo} placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonURLTwo" defaultValue={banner.buttonURLTwo} placeholder="Button URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-4">Update Banner</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <HeaderBottom />
            </div>
        </>
    );
};

export default EditBannerTwo;
