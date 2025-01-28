import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderBottom from "../components/HomePage/HeaderBottom";

const BlogPostDetails = () => {
    const { titleSlug } = useParams(); // Extract the blog post titleSlug from the URL
    const [blogPost, setBlogPost] = useState(null); // State to store the blog post details
    const [author, setAuthor] = useState([]);

    // Fetch author details
    useEffect(() => {
        fetch("http://localhost:5000/author")
            .then((res) => res.json())
            .then((info) => setAuthor(info))
            .catch((error) => console.error("Error fetching author details:", error));
    }, []);

    // Fetch blog post details by titleSlug
    useEffect(() => {
        if (titleSlug) {
            fetch(`http://localhost:5000/blog/${titleSlug}`)
                .then((res) => res.json())
                .then((info) => {
                    console.log("Blog post data:", info); // Log to check the response
                    setBlogPost(info);
                })
                .catch((error) => console.error("Error fetching blog post:", error));
        }
    }, [titleSlug]);

    // If blogPost is null, show a loading state
    if (!blogPost) {
        return (
            <>
                <HeaderBottom />
                <div className="blog-section vh-100 flex items-center justify-center">
                    <p>Loading...</p>
                </div>
            </>
        );
    }

    return (
        <>
            {/* Dynamic Helmet for SEO */}
            <Helmet>
                <title>{blogPost.postTitle} | Your Blog</title>
                <meta name="description" content={blogPost.description.slice(0, 160)} />
                <meta name="keywords" content={`Blog, ${blogPost.postCategoryName}, ${blogPost.authorName}`} />
                <meta property="og:title" content={blogPost.postTitle} />
                <meta property="og:description" content={blogPost.description.slice(0, 160)} />
                <meta property="og:image" content={blogPost.featuredImage} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`http://localhost:5000/blog/${titleSlug}`} />
            </Helmet>

            <HeaderBottom />
            <div className="blog-section container col-lg-6 py-5">
                {/* Section Spacer */}
                <div className="pb-40 xl:pb-[220px]">
                    {/* Section Container */}
                    <div className="global-container">
                        {/* Breadcrumbs */}
                        <nav className="mb-4">
                            <ul className="breadcrumb bg-white p-3 rounded shadow-sm">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-primary">
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="breadcrumb-item active text-secondary" aria-current="page">
                                    {blogPost.postTitle}
                                </li>
                            </ul>
                        </nav>

                        <div className="gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.5fr)]">
                            <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                                {/* Blog Post Details */}
                                <div className="flex flex-col gap-6">
                                    {/* Blog Post Text Area */}
                                    <article className="overflow-hidden bg-white p-4 rounded shadow-sm">
                                        {/* Featured Image */}
                                        <div className="mb-7 block overflow-hidden rounded-[10px]">
                                            <img
                                                src={blogPost.featuredImage}
                                                alt={blogPost.postTitle}
                                                width={700}
                                                height={400}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                        {/* Blog Post Meta */}
                                        <ul className="flex flex-wrap gap-4">
                                            <li className="font-semibold">
                                                <span className="me-2">
                                                    <i className="fas fa-user-circle"></i>
                                                </span>
                                                <span>By {blogPost.authorName}</span>
                                            </li>

                                            <li className="relative font-semibold">
                                                <span>{blogPost.postDate}</span>
                                            </li>
                                        </ul>

                                        {/* Blog Post Title */}
                                        <h1 className="mt-4 text-6xl font-bold text-dark">
                                            {blogPost.postTitle}
                                        </h1>

                                        {/* Blog Post Description */}
                                        <div
                                            className="mt-6 text-gray-700 text-justify"
                                            dangerouslySetInnerHTML={{ __html: blogPost.description }}
                                        ></div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            {/* Author Section */}
                            {author.length > 0 && author.map((a) => (
                                <div className="mt-4 bg-white p-4 rounded shadow-sm" key={a.id}>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={a.AuthorImage}
                                            alt="Author Image"
                                            className="rounded-circle me-3"
                                            style={{ width: 80, height: 80 }}
                                        />
                                        <div>
                                            <h5 className="mb-1">{a.allAuthorName}</h5>
                                            <p className="text-muted mb-2">{a.AuthorTitle}</p>
                                            <p className="mb-0 text-justify">
                                                {a.authorDetails}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostDetails;
