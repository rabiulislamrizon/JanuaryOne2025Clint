import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditAuthor = () => {
    const [author, setauthor] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/author/${id}`)
            .then((res) => res.json())
            .then((info) => setauthor(info));
    }, [author]);

    const handleauthorSection = (event) => {
        event.preventDefault();
        const allAuthorName = event.target.allAuthorName.value;
        const AuthorTitle = event.target.AuthorTitle.value;
        const AuthorImage = event.target.AuthorImage.value;
        const authorDetails = event.target.authorDetails.value;
    

        const authorSection = {
            allAuthorName,
            AuthorTitle,
            AuthorImage,
            authorDetails
           
        };

        const url = `http://localhost:5000/update-author/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(authorSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Author is Updated');
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
                                <h2 className='mb-5 mt-5'>Update Author</h2>
                                <form className="contact-form" onSubmit={handleauthorSection}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="allAuthorName" defaultValue={author.allAuthorName} placeholder="Author Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="AuthorTitle" defaultValue={author.AuthorTitle} placeholder="Author Title" required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="AuthorImage" defaultValue={author.AuthorImage} placeholder="Author Image" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="authorDetails" defaultValue={author.authorDetails} placeholder="Author Details" required />
                                            </div>
                                        </div>
                                      
                                        <div className="col-lg-12 text-center">
                                            <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-4">Update Author</button>
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

export default EditAuthor;
