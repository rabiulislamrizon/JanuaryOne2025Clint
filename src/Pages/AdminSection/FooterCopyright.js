import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from './../../components/HomePage/HeaderBottom';

const FooterCopyright = () => {

    const [footercopyright, setFooterCopyright] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/copyrights`)
            .then((res) => res.json())
            .then((info) => setFooterCopyright(info));
    }, []);

    const handleFooterCopyright = (event) => {
        event.preventDefault();
        const copyrightText = event.target.copyrightText.value;

        const FooterCopyrightSection = {
            copyrightText,
        };

        const url = `http://localhost:5000/add-footer-copyright`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterCopyrightSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Footer Copy Right Updated');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
            
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            {
                                footercopyright.length === 1 &&
                                <div className="mb-4">
                                    {
                                        footercopyright.map(c => (
                                            <Link key={c._id} className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white d-inline-block mx-auto' to={`/edit-copyright/${c._id}`}>Please Edit About Footer</Link>
                                        ))
                                    }
                                </div>
                            }
                            {
                                footercopyright.length === 0 &&
                                <form className="contact-form text-center" onSubmit={handleFooterCopyright}>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control mx-auto" id="firstn" name="copyrightText" placeholder="Copyright Text" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">Update Footer Copyright</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FooterCopyright;
