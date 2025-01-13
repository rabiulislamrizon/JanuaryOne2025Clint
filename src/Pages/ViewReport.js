import React, { useEffect, useState } from 'react';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewReport = () => {
    const [seoreport, setSEOReport] = useState(null);
    const { id } = useParams();

    // Fetch the specific SEO report by ID
    useEffect(() => {
        fetch(`http://localhost:5000/seo/${id}`)
            .then((res) => res.json())
            .then((info) => setSEOReport(info))
            .catch((error) => console.error('Error fetching report:', error));
    }, [id]);

    return (
        <>
            <HeaderBottom />
            <section className="services-area py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center mb-4">Comprehensive SEO Audit Report</h1>
                            {seoreport ? (
                                <>
                                    <div className="card shadow-lg mb-4">
                                        <div className="card-header bg-danger text-white text-center">
                                            <h5 className="mb-0">Website: {seoreport.websiteURL}</h5>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Id:</strong>
                                                    <span>{seoreport.reportId}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Mobile Loading Speed:</strong>
                                                    <span className="badge bg-success">{seoreport.MobileLoadingSpeed}%</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Desktop Loading Speed:</strong>
                                                    <span className="badge bg-success">{seoreport.DesktopLoadingSpeed}%</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Types of CMS:</strong>
                                                    <span>{seoreport.TypesofCMS}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Monthly Traffic:</strong>
                                                    <span>{seoreport.MonthlyTraffic}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Website Optimization:</strong>
                                                    <span>{seoreport.WebsiteOptimization}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Keyword Optimization:</strong>
                                                    <span>{seoreport.KeywordOptimization}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Focus Keyword:</strong>
                                                    <span>{seoreport.FocusKeyword}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Image Optimization:</strong>
                                                    <span>{seoreport.ImageOptimization}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Meta Title & Description:</strong>
                                                    <span>{seoreport.MetaTitleDescription}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Internal Backlink:</strong>
                                                    <span>{seoreport.InternalBacklink}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <strong>Indexing and Crawling:</strong>
                                                    <span>{seoreport.IndexingCrawling}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* SEO Notes Section */}
                                    <div className="card shadow-lg">
                                        <div className="card-header bg-danger text-white text-center">
                                            <h5 className="mb-0">SEO Notes for {seoreport.websiteURL}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-center">
                                                This SEO audit report provides insights into the website performance of <strong>{seoreport.websiteURL}</strong>. 
                                                To improve search engine visibility, focus on the following areas:
                                            </p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <strong>Loading Speeds:</strong> Enhance both mobile and desktop loading speeds for better user experience and ranking.
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Image Optimization:</strong> Compress and optimize images to improve page load times.
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Keyword Optimization:</strong> Refine keyword targeting to align better with your audience's search queries.
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Indexing & Crawling:</strong> Ensure all critical pages are indexed and crawled efficiently by search engines.
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Internal Backlinks:</strong> Strengthen internal linking to improve site structure and navigation.
                                                </li>
                                            </ul>
                                            <p className="text-center mt-3">
                                                Continuously monitor and adjust these SEO factors to maintain and boost your website's performance in search engine results.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <p>Loading report details...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <HeaderBottom />
        </>
    );
};

export default ViewReport;
