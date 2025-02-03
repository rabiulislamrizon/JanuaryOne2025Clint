// src/components/CategoryPage.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderBottom from "../components/HomePage/HeaderBottom";
import MargingTop from "../components/HomePage/MargingTop";
import { Pagination } from "react-bootstrap"; // Import Bootstrap Pagination

const CategoryPage = () => {
    const { categorySlug } = useParams();
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [author, setAuthor] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // To track the current page
    const postsPerPage = 6; // Number of posts per page

    // Fetch author details
    useEffect(() => {
        fetch("http://localhost:5000/author")
            .then((res) => res.json())
            .then((info) => setAuthor(info))
            .catch((error) => console.error("Error fetching author details:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/categorys")
            .then((res) => res.json())
            .then((data) => setCategories(data));

        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    useEffect(() => {
        if (categories.length > 0 && posts.length > 0) {
            const matchedCategory = categories.find(
                (category) => category.categorySlug === categorySlug
            );
            if (matchedCategory) {
                const filtered = posts.filter(
                    (post) => post.postCategoryName === matchedCategory.categoryName
                );
                setFilteredPosts(filtered);
            }
        }
    }, [categories, posts, categorySlug]);

    // Get the current posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <HeaderBottom />

            <div className="container mt-5 mb-5">
                <h2 className="text-center text-primary mb-4">Category: {categorySlug}</h2>

                {currentPosts.length > 0 ? (
                    <div className="row">
                        {currentPosts.map((post) => (
                            <div key={post._id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm border-light rounded">
                                    <Link to={`/blog/${post.titleSlug}`}>
                                        <img
                                            src={post.featuredImage}
                                            className="card-img-top rounded-top"
                                            alt="Post Thumbnail"
                                            style={{ width: "100%", height: "200px", objectFit: "" }}
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-title text-muted">Posted on {post.postDate}</p>
                                        {author.length > 0 && author.map((a) => (
                                            <p key={a._id} className="card-subtitle text-muted mb-2">
                                                <span className="me-2">
                                                    <i className="fas fa-user-circle"></i> {/* Author icon */}
                                                </span>
                                                by <span className="fw-bold text-dark">{a.allAuthorName}</span>
                                            </p>
                                        ))}
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
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <i className="fas fa-frown fa-3x text-warning mb-3"></i>
                            <p className="lead">No posts found for this category.</p>
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > postsPerPage && (
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            {[...Array(Math.ceil(filteredPosts.length / postsPerPage))].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => paginate(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                )}
            </div>
            <MargingTop />
        </>
    );
};

export default CategoryPage;
