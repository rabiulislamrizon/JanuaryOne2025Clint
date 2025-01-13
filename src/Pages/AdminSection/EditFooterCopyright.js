import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFooterCopyright = () => {
    const [footercopyright, setFooterCopyright] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/copyrights/${id}`)
            .then((res) => res.json())
            .then((info) => setFooterCopyright(info));
    }, [id]);

    const handleFooterCopyright = (event) => {
        event.preventDefault();
        const copyrightText = event.target.copyrightText.value;

        const FooterCopyrightSection = {
            copyrightText,
        };

        fetch(`http://localhost:5000/copyrights/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterCopyrightSection),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Footer Copyright Updated');
            });
    };

    return (
        <>

        <HeaderBottom></HeaderBottom>
            
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <form className="contact-form text-center" onSubmit={handleFooterCopyright}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="copyrightText"
                                        defaultValue={footercopyright.copyrightText || ''}
                                        placeholder="Copyright Text"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                        Update Footer Copyright
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditFooterCopyright;
