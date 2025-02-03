import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditBannerOne = () => {
    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner-one/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);

    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeadingOne = event.target.bannerHeadingOne.value;
        const bannerDetailsOne = event.target.bannerDetailsOne.value;
        const imageOneOne = event.target.imageOneOne.value;
        const buttonTextOne = event.target.buttonTextOne.value;
        const buttonURLOne = event.target.buttonURLOne.value;

        const bannerSection = {
            bannerHeadingOne,
            bannerDetailsOne,
            imageOneOne,
            buttonTextOne,
            buttonURLOne,
        };

        const url = `http://localhost:5000/update-banner-one/${id}`;
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
                                                <input type="text" className="form-control" name="bannerHeadingOne" defaultValue={banner.bannerHeadingOne} placeholder="Banner Heading One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetailsOne" defaultValue={banner.bannerDetailsOne} placeholder="Banner Details " required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="imageOneOne" defaultValue={banner.imageOneOne} placeholder="Image One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTextOne" defaultValue={banner.buttonTextOne} placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonURLOne" defaultValue={banner.buttonURLOne} placeholder="Button URL" required />
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

export default EditBannerOne;
