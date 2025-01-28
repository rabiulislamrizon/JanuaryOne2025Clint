import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBottom from "../components/HomePage/HeaderBottom";
import MargingTop from "../components/HomePage/MargingTop";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const postsPerPage = 5;

    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Blog Posts:", data);
                setPosts(data.reverse());
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (titleSlug) => {
        fetch(`http://localhost:5000/blog/${titleSlug}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Post deleted:", data);
                setPosts(posts.filter((post) => post.titleSlug !== titleSlug)); // Remove the post from the state
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };
    

    const indexOfFirstPost = (currentPage - 1) * postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfFirstPost + postsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <>
            <HeaderBottom />
            <div className="container mt-5 mb-5 vh-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="text-3xl font-bold">Blog Post List</h1>
                    <Link
                        className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white"
                        to="/add-post"
                    >
                        Add Post
                    </Link>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th scope="col" className="text-center">Sl. No.</th>
                                <th scope="col">Post Image</th>
                                <th scope="col">Post Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Author</th>
                                <th scope="col">Date</th>
                                <th scope="col" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="text-center">Loading...</td>
                                </tr>
                            ) : currentPosts.length > 0 ? (
                                currentPosts.map((post, index) => (
                                    <tr key={post._id}>
                                        <td className="text-center">{(currentPage - 1) * postsPerPage + index + 1}</td>
                                        <td>
                                            <img
                                                src={post.featuredImage}
                                                className="rounded"
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                alt="Featured"
                                            />
                                        </td>
                                        <td><b>{post.postTitle}</b></td>
                                        <td>{post.postCategoryName}</td>
                                        <td>{post.authorName}</td>
                                        <td>{new Date(post.postDate).toLocaleDateString()}</td>
                                        <td className="text-center">
                                            <Link
                                                to={`/edit-post/${post.titleSlug}`}
                                                className="btn btn-sm btn-outline-primary"
                                            >
                                                <i className="fas fa-edit"></i> Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post.titleSlug)} // Pass titleSlug instead of _id
                                                className="btn btn-sm btn-outline-danger ms-2"
                                            >
                                                <i className="fas fa-trash"></i> Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-muted">No blog posts found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <nav aria-label="Page navigation example" className="mt-4">
                    <ul className="pagination justify-content-center">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <li
                                key={pageNumber}
                                className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                <button className="page-link">{pageNumber}</button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <MargingTop />
            </div>
        </>
    );
};

export default AllPosts;
