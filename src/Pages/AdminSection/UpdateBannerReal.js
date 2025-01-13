import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateBannerReal = () => {
    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner-real/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);

    const handleBannerSectionReal = (event) => {
        event.preventDefault();
        const bannerHeadingReal = event.target.bannerHeadingReal.value;
        const bannerTextRealTwo = event.target.bannerTextRealTwo.value;
        const bannerDetailsReal = event.target.bannerDetailsReal.value;
        const bannerTextReal = event.target.bannerTextReal.value;
        const imageOneReal = event.target.imageOneReal.value;
        const buttonTextReal = event.target.buttonTextReal.value;
        const buttonURLReal = event.target.buttonURLReal.value;
        const buttonTextTwoReal = event.target.buttonTextTwoReal.value;
        const buttonURLTwoReal = event.target.buttonURLTwoReal.value;
       

        const bannerSection = {
            bannerHeadingReal,
            bannerTextRealTwo,
            bannerDetailsReal,
            bannerTextReal,
            imageOneReal,
            buttonTextReal,
            buttonURLReal,
            buttonTextTwoReal,
            buttonURLTwoReal,
           
        };

        const url = `http://localhost:5000/update-banner-real/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Real Banner is Updated');
            });
    };

    return (
        <>
            
            <div>
                <section id="services" className="services-area vh-100 d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 text-center">
                                <h2 className='mb-5 mt-5'>Update Banner</h2>
                                <form className="contact-form" onSubmit={handleBannerSectionReal}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerHeadingReal" defaultValue={banner.bannerHeadingReal} placeholder="Banner Heading One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerTextRealTwo" defaultValue={banner.bannerTextRealTwo} placeholder="Banner Heading Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerTextReal" defaultValue={banner.bannerTextReal} placeholder="Banner Heading Three" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetailsReal" defaultValue={banner.bannerDetailsReal} placeholder="Banner Details " required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="imageOneReal" defaultValue={banner.imageOneReal} placeholder="Image One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTextReal" defaultValue={banner.buttonTextReal} placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonURLReal" defaultValue={banner.buttonURLReal} placeholder="Button One URL" required />
                                            </div>
                                        </div>
                                     
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTextTwoReal" defaultValue={banner.buttonTextTwoReal} placeholder="Button URL Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonURLTwoReal" defaultValue={banner.buttonURLTwoReal} placeholder="Button URL" required />
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

export default UpdateBannerReal;
