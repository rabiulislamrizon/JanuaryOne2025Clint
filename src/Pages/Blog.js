import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link here
import HeaderBottom from "../components/HomePage/HeaderBottom";
import MargingTop from "../components/HomePage/MargingTop";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <>
      <HeaderBottom></HeaderBottom>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title"></h1>
                <ul className="breadcrumb-nav">
                  <li><a href="/">Home</a></li>
                  <li>Our Blog</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        <div className="container mx-auto my-5 ">
          <h2 className="text-center mb-4">All Blog Posts</h2>
          <div className="container mt-5">

            <>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {posts.slice().reverse().map((post) => (
                  <div className="col" key={post._id}>
                    <div className="card shadow border-light rounded-3 h-100">
                      <div className="card">
                        <img
                          src={post.featuredImage}
                          className="card-img-top rounded-top"
                          alt="Post Thumbnail"
                          style={{ width: "400px", height: "200px", objectFit: "" }}
                        />
                        <div className="card-body">
                          <p className="card-title">Posted on {post.postDate}</p>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-subtitle text-muted mb-2">
                          <span className="me-2">
                            <i className="fas fa-user-circle"></i> {/* Author icon */}
                          </span>
                          by <span className="fw-bold text-dark">{post.authorName}</span>
                        </p>
                        <h4 className="card-title mb-3">
                          <Link to={`/blog/${post.titleSlug}`} className="text-decoration-none text-dark">
                            {post.postTitle}
                          </Link>

                        </h4>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              <MargingTop></MargingTop>
              {/* Pagination Section */}
              <div className="d-flex justify-content-center mt-4">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    {/* Replace these with actual page numbers dynamically */}
                    <li className="page-item">
                      <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </>

          </div>


        </div>
        <MargingTop></MargingTop>
      </main>
    </>
  );
};

export default Blog;
