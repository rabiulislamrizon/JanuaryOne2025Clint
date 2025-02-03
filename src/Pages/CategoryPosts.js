import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderBottom from "../components/HomePage/HeaderBottom";
import { Helmet } from "react-helmet";

const CategoryPosts = () => {
  const { categorySlug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryMapping, setCategoryMapping] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categorys");
        const data = await response.json();
        const mapping = data.reduce((acc, category) => {
          acc[category.categorySlug] = category.postCategoryName;
          return acc;
        }, {});
        setCategoryMapping(mapping);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/posts?category=${categorySlug.toLowerCase()}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    if (categorySlug) fetchPosts();
  }, [categorySlug]);

  const postCategoryName = categoryMapping[categorySlug] || "Unknown";
  const filteredPosts = posts.filter(
    (post) => post.postCategoryName === postCategoryName
  );

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{postCategoryName} - Posts</title>
        <meta name="description" content={`Explore posts in the ${postCategoryName} category`} />
      </Helmet>

      <HeaderBottom />
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">{postCategoryName} Posts</h2>
        {loading ? (
          <div className="text-center text-muted">Loading...</div>
        ) : currentPosts.length > 0 ? (
          <div className="row g-4">
            {currentPosts.map((post) => (
              <div key={post.titleSlug} className="col-md-4">
                <div className="card shadow-sm border-0 h-100">
                  <img src={post.featuredImage} className="card-img-top" alt={post.postTitle} />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/blog/${post.titleSlug}`} className="text-decoration-none text-dark">
                        {post.postTitle}
                      </Link>
                    </h5>
                    <p className="text-muted small">Posted on: {post.postDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">No posts found in this category.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <HeaderBottom />
    </>
  );
};

export default CategoryPosts;
