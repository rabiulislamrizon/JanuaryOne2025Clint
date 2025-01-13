import React, { useEffect, useState } from 'react';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MargingTop from '../components/HomePage/MargingTop';

const VideoTutorial = () => {
    const [canvasvideo, setCanvasVideo] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Shah-Limon/canvaProjectImage/main/canva7200.json`)
            .then((res) => res.json())
            .then((info) => setCanvasVideo(info));
    }, []);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < Math.ceil(canvasvideo.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Calculate the start and end index of the items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = canvasvideo.slice(startIndex, endIndex);

    return (
        
        <section className="box nobox">
            <HeaderBottom />
            <MargingTop></MargingTop>
            <div className="content-body container">
                <div className="row">
                <div className="pull-left">
                                <h1 className="title">Video Tutorials</h1>
                            </div>
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="page-title">
                            
                        </div>
                        <section id="services" className="services-area pt-120 pb-90 fix">
                            <div className="row">
                                {paginatedData.map(canva => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={canva.id}>
                                        <div className="product mb-40 bg-light p-2">
                                            <div className="product__img">
                                                <a href="#"><img className='canva-img img-fluid' src={canva.imageLink} alt='Canva-Template' /></a>
                                                <div className="product-action text-center mt-3 ">
                                                    <a href={canva.videoLink} target="_blank" className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white ' rel="noopener noreferrer">
                                                        Edit Video
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination mt-4 d-flex justify-content-between">
                                <button 
                                    className="btn btn-secondary"
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button 
                                    className="btn btn-secondary"
                                    onClick={handleNext}
                                    disabled={currentPage === Math.ceil(canvasvideo.length / itemsPerPage)}
                                >
                                    Next
                                </button>
                            </div>
                        </section>
                        <MargingTop></MargingTop>
                    </div>
                </div>
            </div>
            <MargingTop></MargingTop>
        </section>
    );
};

export default VideoTutorial;
