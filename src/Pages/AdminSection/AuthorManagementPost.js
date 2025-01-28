import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AuthorManagementPost = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/author`)
      .then((res) => res.json())
      .then((info) => setAuthor(info));
  }, []);

  const handleAuthorSection = (event) => {
    event.preventDefault();
    const allAuthorName = event.target.allAuthorName.value;
    const AuthorTitle = event.target.AuthorTitle.value;
    const AuthorImage = event.target.AuthorImage.value;
    const authorDetails = event.target.authorDetails.value;

    
    
    

    const AuthorSection = {
      allAuthorName,
      AuthorTitle,
      AuthorImage,
      authorDetails,
   
     
      
      
    };

    const url = `http://localhost:5000/add-author`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(AuthorSection),
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
        <section id="services" className="services-area d-flex align-items-center  ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center vh-100">
                <h2 className="mb-5 mt-5">Update Author Details</h2>

                {author.length === 1 && (
                  <>
                    {author.map((c) => (
                      <Link className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mb-4" to={`/author/${c._id}`}>
                        Edit Author
                      </Link>
                    ))}
                  </>
                )}
                {author.length === 0 && (
                  <form className="contact-form text-center" onSubmit={handleAuthorSection}>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mb-3"
                            name="allAuthorName"
                            placeholder="Author Name "
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="AuthorTitle"
                            placeholder="Author Title"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="AuthorImage"
                            placeholder="Author Image"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="authorDetails"
                            placeholder="Author Details"
                            required
                          />
                        </div>
                      </div>
              
                    
                      <div className="slider-btn text-center">
                        <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                          Add Author
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuthorManagementPost;
